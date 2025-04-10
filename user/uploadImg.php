<?php
include "../connect.php";
include '../bearerAuthorization.php';

$img = uploadFile("u_img");

$stmt = $con->prepare(
    "SELECT `users`.`token` 
    FROM `users`
    WHERE `users`.`token` = ?"
);

$stmt->execute(
    array(
        $tokenId,
    )
);

$count = $stmt->rowCount();

if ($count > 0) {

    $stmt = $con->prepare(
        "SELECT `more_user_info`.`image`
        FROM `more_user_info`
        WHERE `more_user_info`.`user_token` = ?"
    );

    $stmt->execute([
        $tokenId,
    ]);

    $userData = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($userData) {
        deleteFile("../upload", $userData['image']);

        if ($img !== "failed") {
            $stmt = $con->prepare(
                "UPDATE `more_user_info` SET `image` = ? 
                WHERE `user_token` = ?"
            );

            $stmt->execute(
                array(
                    $img,
                    $tokenId,
                )
            );

            $count = $stmt->rowCount();

            if ($count > 0) {
                http_response_code(201);
                echo json_encode(
                    array(
                        "message" => "Image uploaded successfully",
                        "count" => $count,
                    )
                );
            } else {
                http_response_code(500);
                echo json_encode(
                    array(
                        "message" => "Failed to upload image",
                        "count" => $count,
                    )
                );
            }
        } else {
            http_response_code(500);
            echo json_encode([
                "message" => "Upload failed: $msgError",
            ]);
        }
    }
} else {
    http_response_code(401);
    echo json_encode(array(
        "message" => "Unauthorized",
        "count" => $count,
    ));
}
