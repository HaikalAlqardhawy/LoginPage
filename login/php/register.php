<?php
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $conn->escapeString($_POST['username']);
    $email = $conn->escapeString($_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $check = $conn->query("SELECT 1 FROM users WHERE username = '$username'");
    if ($check && $check->fetchArray()) {
        echo "<script>alert('Username already exists'); window.location.href='../index.html';</script>";
        exit();
    }

    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
    if ($conn->exec($sql)) {
        echo "<script>alert('Registration successful!'); window.location.href='../index.html';</script>";
    } else {
        echo "<script>alert('Error: Could not register user'); window.location.href='../register.html';</script>";
    }
}
?>

