<?php

include "../connect.php";


$u_email = filterRequest("u_email");
$u_newPass = filterRequest("u_newPass");
$hashed = password_hash($u_newPass, PASSWORD_DEFAULT);

$stmt = $con->prepare(
    "UPDATE `users`
    SET `password` = ?
    WHERE `email` = ?"
);

$stmt->execute(
    array(
        $hashed,
        $u_email,
    )
);

$count = $stmt->rowCount();

if ($count > 0) {
    http_response_code(200);
    echo json_encode(array(
        "message" => "Password Changed",
    ));
} else {
    http_response_code(400);
    echo json_encode(array(
        "message" => "Failed to Change Password",
    ));
}
