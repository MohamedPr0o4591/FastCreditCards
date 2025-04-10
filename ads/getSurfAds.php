<?php
include "../connect.php";

$stmt  = $con->prepare(
    "SELECT *
    FROM `surf_ads`"
);

$stmt->execute();

$adsData = $stmt->fetchAll(PDO::FETCH_ASSOC);

if ($adsData) {
    http_response_code(200);
    echo json_encode(
        array(
            "message" => "success",
            "ads_surf" => $adsData,
            "count" => count($adsData)
        )
    );
} else {
    http_response_code(400);
    echo json_encode(
        array(
            "message" => "failed",
            "ads_surf" => $adsData,
            "count" => count($adsData)
        )
    );
}
