<?php

function filterRequest($req)
{
    return htmlspecialchars(strip_tags($_POST[$req]));
}

function filterGetDate($req)
{
    return htmlspecialchars(strip_tags($_GET[$req]));
}

function patchRequest($req)
{
    parse_str(file_get_contents("php://input"), $patchData);

    if (isset($patchData[$req])) {
        return htmlspecialchars(strip_tags($patchData[$req]));
    }

    return null;
}

define("MB", (1024 * 1024));

function uploadFile($file)
{

    global $msgError;

    $name = $_FILES[$file]["name"];
    $tmp = $_FILES[$file]['tmp_name'];
    $size = $_FILES[$file]["size"];

    $srtToArr = explode(".", $name);
    $ext = end($srtToArr);
    $ext = strtolower($ext);

    $allowedExt = array("jpg", "png", "jpeg", "webp", "gif");

    $randName = rand(1000, 10000) . $name;

    if (!empty($file) && !in_array($ext, $allowedExt)) {
        $msgError = "File type not allowed";
    }

    if ($size > 1 * MB) {
        $msgError = "File too large";
    }

    if (empty($msgError)) {
        move_uploaded_file($tmp, "../upload/" . $randName);

        return $randName;
    } else return "failed";
}

function deleteFile($dir, $file)
{

    if (file_exists($dir . '/' . $file)) {
        return unlink($dir . '/' . $file);
    }
}
