<?php

// ❌ Doesn't work because $_POST only contains form-encoded data
// $id = $_POST['id'] ?? null;

$input = json_decode(file_get_contents('php://input', true));
$id = $input->id ?? null;
if (!$id) {
    echo json_encode([
        "success" => false,
        "message" => "ID-ul mesajului nu este setat"
    ]);
    exit;
}

$dsn = "mysql:host=localhost;dbname=contact_form;";

try {
    $pdo = new PDO($dsn, 'root', '');

    $sql = "DELETE FROM contact_messages WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$id]);

    if ($stmt->rowCount() > 0) {
        echo json_encode([
            "success" => true,
            "message" => "Mesajul a fost sters cu succes!"
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Mesajul nu a fost găsit!"
        ]);
    }
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Eroare la stergerea mesajului: ' . $e->getMessage()
    ]);
    exit;
}
