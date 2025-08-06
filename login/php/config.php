<?php
$db_path = __DIR__ . '/../db/database.sqlite';

$conn = new SQLite3($db_path);

$conn->exec("CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)");
?>
