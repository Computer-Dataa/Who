<?php
header('Content-Type: application/json');
include 'db_connect.php';

$id = (int)$_GET['id'];
$stmt = $pdo->prepare("SELECT * FROM questions WHERE id = ?");
$stmt->execute([$id]);
$question = $stmt->fetch();

if ($question) {
    echo json_encode($question);
} else {
    echo json_encode(['error' => 'Question not found']);
}
?>