<?php

include "../connect.php";

include "../bearerAuthorization.php";

$stmt = $con->prepare(
    "SELECT
    `users`.*,
    `points_user`.`points_earn`,
    `points_user`.`points_deposit`,
    `points_user`.`points_affiliate` ,
    `more_user_info`.* 
    FROM
    `users`,
    `points_user`,
    `more_user_info`
    WHERE
    `users`.`token` = :token AND `points_user`.`points_user` = :token AND `more_user_info`.`user_token` = :token"
);

$stmt->execute(
    array(
        ":token" => $tokenId
    )
);

$userData = $stmt->fetch(PDO::FETCH_ASSOC);

if ($userData) {
    http_response_code(200);
    echo json_encode(array(
        "message" => "Authorized",
        "user" => array(
            "full_name" => $userData['fullName'],
            "username" => $userData['username'],
            "email" => $userData['email'],
            "gender" => $userData['gender'],
            "birth" => $userData['birthDate'],
            "createAt" => $userData['createAt'],
            "country" => $userData['country'],
            "status" => array(
                "accountStatus" => $userData['verified'],
            ),
            "points" => array(
                "earn" => $userData['points_earn'],
                "deposit" => $userData['points_deposit'],
                "affiliate" => $userData['points_affiliate'],
            ),
            "more_info" => array(
                "image" => $userData['image'],
            )
        )
    ));
} else {
    http_response_code(401);
    echo json_encode(array(
        "message" => "not Authorized",
    ));
}
