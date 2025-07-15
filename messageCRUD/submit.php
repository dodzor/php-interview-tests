<?php

function get_post_data($key) {
    // Convert special characters (e.g. <, >, &) to HTML entities (e.g. &lt;, &gt;, &amp;)
    return htmlspecialchars($_POST[$key] ?? "");
}

$name = get_post_data("name");
$email = get_post_data("email");
$message = get_post_data("message");

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode([
        "success" => false,
        "message" => "Toate campurile sunt obligatorii!"
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "success" => false,
        "message" => "Email-ul nu este valid!"
    ]);
    exit;
}

$dsn = "mysql:host=localhost;dbname=contact_form;charset=utf8mb4";
$user = "root";
// $pass = "pass";

try {
    $pdo = new PDO($dsn, $user);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // throw exceptions on errors

    // $sql = "CREATE DATABASE IF NOT EXISTS contact_form";
    // $pdo->exec($sql);
    // $sql = "USE contact_form";
    // $pdo->exec($sql);
    
    $sql = "CREATE TABLE IF NOT EXISTS contact_messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ";
    $pdo->exec($sql);

    $sql = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$name, $email, $message]);

    echo json_encode([
        "success" => true,
        "date" => date("Y-m-d H:i:s"),
        "message" => "Mesajul a fost salvat cu succes!"
    ]);
    exit;
} catch (PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => "Eroare la conectare cu baza de date! " . $e->getMessage()
    ]);
    exit;
}


// echo json_encode([
//     "success" => true,
//     "name" => $name,
//     "email" => $email,
//     "message" => $message,
//     "message" => "Mesajul a fost trimis cu succes!"
// ]);
