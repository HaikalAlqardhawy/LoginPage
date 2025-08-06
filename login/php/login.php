<?php
session_start();
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Escape input untuk SQLite
    $username = $conn->escapeString($_POST['username']);
    $password = $_POST['password'];

    // Gunakan query() untuk SELECT
    $sql = "SELECT id, username, password FROM users WHERE username = '$username'";
    $result = $conn->query($sql);

    // Ambil data user
    $row = $result->fetchArray(SQLITE3_ASSOC);

    if ($row) {
        if (password_verify($password, $row['password'])) {
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['username'] = $row['username'];
            header("Location: dashboard.php");
            exit();
        } else {
            echo "<script>alert('Invalid password'); window.location.href='../index.html';</script>";
        }
    } else {
        echo "<script>alert('User not found'); window.location.href='../index.html';</script>";
    }
}
?>

