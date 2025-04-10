<?php

include "../connect.php";

$surf_id  = filterGetDate("surf_id");

$stmt = $con->prepare(
    "SELECT *
    FROM `surf_ads`
    WHERE `id` = ?"
);

$stmt->execute([$surf_id]);

$surfData = $stmt->fetch(PDO::FETCH_ASSOC);

if ($surfData) {
    http_response_code(200);
    echo json_encode(
        array(
            "message" => "success",
            "ads" => $surfData,
        )
    );
} else {
    http_response_code(400);
    echo json_encode(
        array(
            "message" => "failed",
            "ads" => $surfData,
        )
    );
}
