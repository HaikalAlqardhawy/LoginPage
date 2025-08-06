<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: ../index.html");
    exit();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background: #0f0f1a;
            color: white;
            text-align: center;
            padding-top: 100px;
        }
        .welcome {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }
        .logout {
            color: #00ffff;
            text-decoration: none;
            font-size: 1.2rem;
        }
    </style>
</head>
<body>
    <div class="welcome">Welcome, <?php echo htmlspecialchars($_SESSION['username']); ?>!</div>
    <a href="logout.php" class="logout">Logout</a>
</body>
</html>
