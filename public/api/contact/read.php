<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../objects/contact.php';


$database = new Database();
$db = $database->getConnection();

$contact = new Contact($db);

$stmt = $contact->read();
$num = $stmt->rowCount();

if($num>0){

    $contact_arr=array();
    $contact_arr["contact"]=array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        extract($row);

        $contact_item=array(
            "id" => $id,
            "person" => $person,
            "email" => $email,
            "subject" => $subject,
            "content" => $content,
            "agreement" => $agreement,
        );

        array_push($contact_arr["contact"], $contact_item);
    }

    http_response_code(200);
    echo json_encode($contact_arr);
}

else {
    http_response_code(404);

    echo json_encode(
        array("message" => "No contact found.")
    );
}