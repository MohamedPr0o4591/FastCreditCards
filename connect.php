<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE, PATCH");
header("Content-Type: application/json; charset=UTF-8");

// Handling OPTIONS request (preflight request)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200); // Send HTTP OK for preflight request
    exit();
}

$host = "localhost";
$dbname = "fastcreditcards_db";
$user = "root";
$pass = "";

try {
    $con = new PDO("mysql:host=$host", $user, $pass);
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $con->exec("CREATE DATABASE IF NOT EXISTS $dbname CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");

    $con = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = [];

    $sql[] =  "CREATE TABLE IF NOT EXISTS `users` (
        `token` VARCHAR(255) NOT NULL PRIMARY KEY ,
        `username` VARCHAR(255) NOT NULL ,
        `email` VARCHAR(255) NOT NULL ,
        `password` VARCHAR(255) NOT NULL ,
        `fullName` VARCHAR(255) NOT NULL ,
        `gender` VARCHAR(255) NOT NULL ,
        `birthDate` VARCHAR(255) NOT NULL ,
        `country` VARCHAR(255) NOT NULL ,
        `verified` VARCHAR(255) NULL DEFAULT 'false'
    ) ";

    $sql[] = "CREATE TABLE IF NOT EXISTS `points_user` (
        `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `points_user` VARCHAR(255) NOT NULL,
        `points_earn` VARCHAR(255) NULL DEFAULT '0',
        `points_deposit` VARCHAR(255) NULL DEFAULT '0',
        `points_affiliate` VARCHAR(255) NULL DEFAULT '0',
        FOREIGN KEY (`points_user`) REFERENCES `users` (`token`) ON DELETE CASCADE ON UPDATE CASCADE
    )";

    $sql[] = "CREATE TABLE IF NOT EXISTS `more_user_info` (
        `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `user_token` VARCHAR(255)  NULL,
        FOREIGN KEY (`user_token`) REFERENCES `users` (`token`) ON DELETE CASCADE ON UPDATE CASCADE
    )";

    $sql[] = "CREATE TABLE IF NOT EXISTS `inviteuser` (
        `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `i_user` VARCHAR(255)  NULL,
        `i_userInvited` VARCHAR(255)  NULL,
        FOREIGN KEY (`i_user`) REFERENCES `users` (`token`) ON DELETE CASCADE ON UPDATE CASCADE
    )";

    if (!empty($sql)) {
        foreach ($sql as $query) {
            $con->exec($query);
        }
    }

    include('../actions.php');
} catch (PDOException $e) {
    echo "" . $e->getMessage();
}
