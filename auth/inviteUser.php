<?php

include "../connect.php";

include "../bearerAuthorization.php";

$u_name = filterRequest("u_name");

$stmt = $con->prepare(
    "INSERT INTO `inviteuser`
    (`i_user` ,`i_userInvited`)
    VALUES (? ,?)"
);

$stmt->execute(
    array(
        $tokenId,
        $u_name,
    )
);

$count = $stmt->rowCount();

if ($count > 0) {
    http_response_code(200);
    echo json_encode(
        array(
            "status" => "success",
            "message" => "Invite Sent",
        )
    );
} else {
    http_response_code(400);
    echo json_encode(
        array(
            "status" => "error",
            "message" => "Invite Failed",
        )
    );
}
