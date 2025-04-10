<?php
include "../connect.php";
include "../bearerAuthorization.php";


$id = bin2hex(random_bytes(16));
$title = filterRequest("title");
$time = filterRequest("time");
$link = filterRequest("link");
$price = filterRequest("price");

$stmt = $con->prepare(
    "INSERT INTO 
        `surf_ads`
            (`id` , `surf_title` , `surf_time` , `surf_link` , `surf_price` , `surf_user`)
                VALUES (?, ? ,? ,? ,? ,?)"
);

$stmt->execute(
    array(
        $id,
        $title,
        $time,
        $link,
        $price,
        $tokenId,
    )
);

$count = $stmt->rowCount();

if ($count > 0) {
    http_response_code(200);
    echo json_encode(array(
        "message" => "surf ads created",
    ));
} else {
    http_response_code(400);
    echo json_encode(array(
        "message" => "Failed to create surf ads",
    ));
}
