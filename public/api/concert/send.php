<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../objects/concert.php';


$database = new Database();
$db = $database->getConnection();

$concert = new Concert($db);

$data = json_decode(file_get_contents("php://input"));

if(
    !empty($data->odKogo) &&
    !empty($data->dlaKogo) &&
    !empty($data->email) &&
    !empty($data->zyczenia) &&
    !empty($data->agreement)
){

    $concert->odKogo = $data->odKogo;
    $concert->dlaKogo = $data->dlaKogo;
    $concert->email = $data->email;
    $concert->zyczenia = $data->zyczenia;
    $concert->agreement = $data->agreement;

    // Send the concert
    if($concert->send()){
        http_response_code(201);
        echo json_encode(array("message" => "Życzenia zostały wysłane poprawnie"));
        // echo json_encode(array("message" => "Zyczenia was added."));

        $to = "koncertainkarim@gmail.com";
        $subject = "Potwierdzenie wysłania życzeń - Radiowy koncert życzeń";
        $txt = "Witaj, " . $concert->odKogo . "\n" .
                "Dziękujemy za wysłanie życzeń dla " . $concert->dlaKogo . "\n" .
                "Treść: " . $concert->zyczenia ."\n\n" .
                "Zostaną one odczytane w następną niedzielę. \n\n" .
                "Pozdrawiamy, \nRadio Ain Karim 104.4FM Skomielna Czarna";

        $headers = "From: Radiowy Koncert Życzeń <koncert@radioainkarim.pl>" . "\r\n" .
                    "CC: " . $concert->email;

        mail($to,$subject,$txt,$headers);
    }

    else{
        http_response_code(503);
        echo json_encode(array("message" => "Wysyłanie życzeń nie powiodło się"));
        // echo json_encode(array("message" => "Unable to added zyczenia."));
    }
}

else{
    http_response_code(400);
    echo json_encode(array("message" => "Wysyłanie życzeń nie powiodło się."));
    // echo json_encode(array("message" => "Unable to create concert element. Data is incomplete."));
}