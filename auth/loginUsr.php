<?php

include "../connect.php";

$u_name = filterRequest("u_name");
$u_pass = filterRequest("u_pass");

$stmt = $con->prepare(
    "SELECT *
    FROM `users`
    WHERE `username` = ? OR `email` = ?"
);

$stmt->execute(
    array(
        $u_name,
        $u_name,
    )
);

$userData = $stmt->fetch(PDO::FETCH_ASSOC);

if ($userData) {
    if (password_verify($u_pass, $userData['password'])) {
        http_response_code(200);
        echo json_encode(array(
            'status' => 'success',
            'message' => 'Login Successful',
            "user" => $userData,
        ));
    } else {
        http_response_code(401);
        echo json_encode(array(
            'status' => 'error',
            'message' => 'Invalid Credentials',
        ));
    }
} else {
    http_response_code(404);
    echo json_encode(array(
        'status' => 'error',
        'message' => 'User Not Found',
    ));
}
