<?php

class Program {

    private $conn;
    private $table_name = "ak_ramowka";

    public $id;
    public $dayOfWeek;
    public $startHour;
    public $endHour;
    public $title;
    public $author;

    public function __construct($db){
        $this->conn = $db;
    }


    // read Program
    function read(){

        $query = "SELECT * FROM " . $this->table_name .";";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    // create Program
    // function create(){

    //     $query = "INSERT INTO
    //                 " . $this->table_name . "
    //             SET
    //                 person=:person, email=:email, subject=:subject, content=:content, agreement=:agreement";


    //     $stmt = $this->conn->prepare($query);

    //     $this->person=htmlspecialchars(strip_tags($this->person));
    //     $this->email=htmlspecialchars(strip_tags($this->email));
    //     $this->subject=htmlspecialchars(strip_tags($this->subject));
    //     $this->content=htmlspecialchars(strip_tags($this->content));
    //     $this->agreement=htmlspecialchars(strip_tags($this->agreement));

    //     $stmt->bindParam(":person", $this->person);
    //     $stmt->bindParam(":email", $this->email);
    //     $stmt->bindParam(":subject", $this->subject);
    //     $stmt->bindParam(":content", $this->content);
    //     $stmt->bindParam(":agreement", $this->agreement);

    //     if($stmt->execute()){
    //         return true;
    //     }

    //     return false;
    // }
}