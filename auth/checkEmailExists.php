<?php

include "../connect.php";

$u_email = filterRequest("u_email");

$stmt = $con->prepare(
    "SELECT *
    FROM `users`
    WHERE `email` = ? OR `username` = ?"
);

$stmt->execute(
    array(
        $u_email,
        $u_email
    )
);

$count = $stmt->rowCount();

if ($count > 0) {
    http_response_code(404);
    echo json_encode(
        array(
            'status' => 'error',
            'message' => 'Email or Username Already Exists',
        )
    );
} else {
    http_response_code(200);
    echo json_encode(
        array(
            'status' => 'success',
            'message' => 'Email Available',
        )
    );
}
