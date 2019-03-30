<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/radioainramowka.php';
include_once '../objects/program.php';


$database = new Ramowka();
$db = $database->getConnection();

$program = new Program($db);

$stmt = $program->read();
$num = $stmt->rowCount();

if($num>0){

    $program_arr=array();
    $program_arr["program"]=array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        extract($row);

        $program_item=array(
            "id" => $idr,
            "dayOfWeek" => $idt,
            "startHour" => $godz_od,
            "endHour" => $godz_do,
            "title" => $tytul,
            "author" => $autor,
        );

        array_push($program_arr["program"], $program_item);
    }

    http_response_code(200);
    echo json_encode($program_arr);
}

else {
    http_response_code(404);

    echo json_encode(
        array("message" => "No program found.")
    );
}