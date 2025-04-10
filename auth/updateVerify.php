<?php

include "../connect.php";

include "../bearerAuthorization.php";

$u_verify = patchRequest("u_verify");

$stmt = $con->prepare(
    "UPDATE `users` 
    SET `verified` = ?
    WHERE `token` = ?"
);

$stmt->execute(
    array(
        $u_verify,
        $tokenId,
    )
);

$count = $stmt->rowCount();

if ($count > 0) {
    http_response_code(200);
    echo json_encode(
        array(
            "message" => "User verified successfully",
        )
    );
} else {
    http_response_code(400);
    echo json_encode(
        array(
            "message" => "No changes made to this user",
        )
    );
}
