<?php
// Path database SQLite
$db_path = __DIR__ . '/../db/database.sqlite';

// Buat koneksi
$conn = new SQLite3($db_path);

// Buat tabel users jika belum ada
$conn->exec("CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)");
?>
