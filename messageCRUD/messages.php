<?php

$dsn = "mysql:host=localhost;dbname=tests;";
$pdo = new PDO($dsn, 'root', '');

$sql = "SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 10";
$stmt = $pdo->query($sql);

if ($stmt->errorCode() !== '00000') {
    die("Conectare esuata: " . $stmt->errorInfo()[2]);
}

$messages = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <h2>Ultimele mesaje salvate</h2>
        <?php if (count($messages) > 0): ?>
            <table>
            <thead>
                <tr>
                    <th>Nume</th>
                    <th>Email</th>
                    <th>Mesaj</th>
                    <th>Trimis la</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($messages as $message): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($message['name']); ?></td>
                        <td><?php echo htmlspecialchars($message['email']); ?></td>
                        <td><?php echo htmlspecialchars($message['message']); ?></td>
                        <td><?php echo htmlspecialchars($message['created_at']); ?></td>
                        <td>
                            <button class="delete-btn" data-id="<?php echo htmlspecialchars($message['id']); ?>">
                                Sterge
                            </button>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
        <?php else: ?>
            <p>Nu exista mesaje salvate</p>
        <?php endif; ?>

        <script src="script.js"></script>
    </body>
</html>
