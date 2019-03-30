<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../objects/contact.php';


$database = new Database();
$db = $database->getConnection();

$contact = new Contact($db);

$data = json_decode(file_get_contents("php://input"));


$statement_arr=array();
$statement_arr["statement"]=array();

if(
    !empty($data->person) &&
    !empty($data->email) &&
    !empty($data->subject) &&
    !empty($data->content) &&
    !empty($data->agreement)
){

    $contact->person = $data->person;
    $contact->email = $data->email;
    $contact->subject = $data->subject;
    $contact->content = $data->content;
    $contact->agreement = $data->agreement;

    // Send the concert
    if($contact->send()){
        http_response_code(201);
        echo json_encode(array("message" => "Wiadomość została wysłana poprawnie"));
        // echo json_encode(array("message" => "Message was added"));

        $to = "kontaktainkarim@gmail.com";
        $subject = "Potwierdzenie wysłania wiadomości - " . $contact->subject;
        $txt = "Witaj, " . $contact->person . "\n" .
                "Dziękujemy za wysłanie wiadomości o treści: \n\n" . $contact->content . "\n\n" .
                "Skontaktujemy się z Tobą jak najszybciej. \n\n" .
                "Pozdrawiamy, \nRadio Ain Karim 104.4FM Skomielna Czarna";

        $headers = "From: Kontakt Radio Ain Karim <kontakt@radioainkarim.pl>" . "\r\n" .
                    "CC: ". $contact->email;

        mail($to,$subject,$txt,$headers);
    }

    else{
        http_response_code(503);
        echo json_encode(array("message" => "Wysyłanie wiadomości nie powiodło się"));
        // echo json_encode(array("message" => "Unable to added contact"));
    }
}

else{
    http_response_code(400);
    echo json_encode(array("message" => "Wysyłanie wiadomości nie powiodło się"));

    // echo json_encode(array("message" => "Unable to create concert element. Data is incomplete."));
}