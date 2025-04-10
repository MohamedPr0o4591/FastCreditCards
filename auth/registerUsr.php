<?php

include "../connect.php";

$u_name = filterRequest("u_name");
$u_email = filterRequest("u_email");
$u_password = filterRequest("u_password");
$fullName = filterRequest("fullName");
$gender = filterRequest("gender");
$birth = filterRequest("birth");
$country = filterRequest("country");
$token = bin2hex(random_bytes(16));
$hashed = password_hash($u_password, PASSWORD_DEFAULT);

$stmt = $con->prepare(
    "SELECT * 
    FROM `users`
    WHERE `username` = ? OR `email` = ?"
);

$stmt->execute(
    array(
        $u_name,
        $u_email,
    )
);

$count = $stmt->rowCount();

if ($count > 0) {
    http_response_code(500);
    echo json_encode(array("message" => "User already exists"));
} else {
    $stmt = $con->prepare(
        "INSERT INTO `users` (`username` ,`email` ,`password` ,`fullName` ,`gender` ,`birthDate` ,`country` ,`token`)
        VALUES (? , ? , ? , ? , ? , ? , ? , ?)"
    );

    $stmt->execute(
        array(
            $u_name,
            $u_email,
            $hashed,
            $fullName,
            $gender,
            $birth,
            $country,
            $token,
        )
    );

    $count = $stmt->rowCount();

    if ($count > 0) {

        $stmt1 = $con->prepare(
            "INSERT INTO `points_user` (`points_user`) VALUES (:token)"
        );
        $stmt1->execute([':token' => $token]);

        $stmt2 = $con->prepare(
            "INSERT INTO `more_user_info` (`user_token`) VALUES (:token)"
        );
        $stmt2->execute([':token' => $token]);

        http_response_code(200);
        echo json_encode(array(
            "message" => "User created successfully",
            "token" => $token
        ));
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "User not created"));
    }
}
