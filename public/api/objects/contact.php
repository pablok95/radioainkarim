<?php

class Contact{

    private $conn;
    private $table_name = "Contact";

    public $id;
    public $person;
    public $email;
    public $subject;
    public $content;
    public $agreement;

    public function __construct($db){
        $this->conn = $db;
    }


    // read Contact
    function read(){

        $query = "SELECT * FROM " . $this->table_name .";";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    // create Contact
    function send(){

        $query = "INSERT INTO
                    " . $this->table_name . "
                SET
                    person=:person, email=:email, subject=:subject, content=:content, agreement=:agreement";


        $stmt = $this->conn->prepare($query);

        $this->person=htmlspecialchars(strip_tags($this->person));
        $this->email=htmlspecialchars(strip_tags($this->email));
        $this->subject=htmlspecialchars(strip_tags($this->subject));
        $this->content=htmlspecialchars(strip_tags($this->content));
        $this->agreement=htmlspecialchars(strip_tags($this->agreement));

        $stmt->bindParam(":person", $this->person);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":subject", $this->subject);
        $stmt->bindParam(":content", $this->content);
        $stmt->bindParam(":agreement", $this->agreement);

        if($stmt->execute()){
            return true;
        }

        return false;
    }
}