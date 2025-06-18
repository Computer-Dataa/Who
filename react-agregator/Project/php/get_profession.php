<?php
header('Content-Type: application/json');
include 'db_connect.php';

$id = (int)$_GET['id'];
$stmt = $pdo->prepare("SELECT * FROM professions WHERE id = ?");
$stmt->execute([$id]);
$profession = $stmt->fetch();

if ($profession) {
    echo json_encode($profession);
} else {
    echo json_encode(['error' => 'Profession not found']);
}
?>