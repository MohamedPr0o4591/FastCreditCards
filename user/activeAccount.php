<?php
include "../connect.php";


include "../bearerAuthorization.php";

$status = filterRequest("status");

$stmt = $con->prepare(
    "INSERT INTO `user_active` (`user_token` , `user_status`)
    VALUES (? , ?)"
);

$stmt->execute(
    array($tokenId, $status)
);

$count = $stmt->rowCount();

if ($count > 0) {
    http_response_code(200);
    echo json_encode(array(
        "message" => "account activated",
    ));
} else {
    http_response_code(400);
    echo json_encode(array(
        "message" => "Failed to activate account",
    ));
}
