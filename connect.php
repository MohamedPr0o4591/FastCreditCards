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

$dns = "mysql:host=localhost;dbname=fastcreditcards_db";
$user = 'root';
$pass = '';
$option = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES UTF8"
);

try {
    $con = new PDO($dns, $user, $pass, $option);
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    include "actions.php";
} catch (PDOException $e) {
    echo $e->getMessage();
}
