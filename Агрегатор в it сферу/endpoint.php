<?php
// Подключение к базе данных
$host = '127.0.0.1';
$db = 'test_db';
$user = 'root';
$pass = '';
$port = 3306;
$charset = 'utf8mb4';

$conn = new mysqli($host, $user, $pass, $db, $port);

// Проверка соединения
if ($conn->connect_error) {
    die(json_encode(['error' => 'Database connection failed: ' . $conn->connect_error]));
}

// Установка заголовка для JSON-ответа
header('Content-Type: application/json');

// Константы для эндпоинтов
define('ENDPOINT_QUESTIONS', '/api/questions');
define('ENDPOINT_SUBMIT', '/api/submit');

// Функция для возврата ошибки в формате JSON
function sendError($message, $code = 400) {
    http_response_code($code);
    echo json_encode(['error' => $message]);
    return;
}

// Функция для проверки входных данных
function validateInput($input, $fields) {
    foreach ($fields as $field) {
        if (!isset($input[$field])) {
            sendError("Missing required field: $field");
        }
    }
}

// Эндпоинт для получения вопросов теста
if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_SERVER['REQUEST_URI'] === ENDPOINT_QUESTIONS) {
    $stmt = $conn->prepare("SELECT id, question_text FROM questions");
    if (!$stmt) {
        sendError('Failed to prepare statement', 500);
    }

    $stmt->execute();
    $result = $stmt->get_result();
    
    $questions = [];
    while ($row = $result->fetch_assoc()) {
        $questions[] = $row;
    }
    
    echo json_encode($questions);
    return; 
}

// Эндпоинт для отправки ответов и расчета результата
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_SERVER['REQUEST_URI'] === ENDPOINT_SUBMIT) {
    // Получение и проверка входных данных
    $input = json_decode(file_get_contents('php://input'), true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        sendError('Invalid JSON input');
    }

    validateInput($input, ['answers']);

    $answers = $input['answers'];
    if (!is_array($answers)) {
        sendError('Answers must be an array');
    }

    $scores = [];

    // Обработка ответов
    foreach ($answers as $answer) {
        validateInput($answer, ['question_id', 'answer_id']);

        $question_id = intval($answer['question_id']);
        $answer_id = intval($answer['answer_id']);

        // Получение баллов за ответ из базы данных
        $stmt = $conn->prepare("SELECT profession_id, score FROM answers WHERE id = ?");
        if (!$stmt) {
            sendError('Failed to prepare statement', 500);
        }

        $stmt->bind_param("i", $answer_id);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $profession_id = intval($row['profession_id']);
            $score = intval($row['score']);
            
            // Суммируем баллы по профессиям
            if (!isset($scores[$profession_id])) {
                $scores[$profession_id] = 0;
            }
            $scores[$profession_id] += $score;
        } else {
            sendError("Invalid answer_id: $answer_id", 400);
        }
    }

    // Расчет процентного соотношения
    $totalScore = array_sum($scores);
    if ($totalScore === 0) {
        sendError('No scores calculated', 400);
    }

    // Формирование результата
    $results = [];
    foreach ($scores as $profession_id => $score) {
        if ($score > 0) { 
            $percentage = ($score / $totalScore) * 100;
            $results[] = [
                'profession_id' => $profession_id,
                'score' => $score,
                'percentage' => round($percentage, 2)
            ];
        }
    }

    // Возврат результата в формате JSON
    echo json_encode($results);
    return;
}

// Если запрос не соответствует ни одному эндпоинту
sendError('Endpoint not found', 404);

// Закрытие соединения
$conn->close();
?>