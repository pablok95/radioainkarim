<?php

class Concert{

    private $conn;
    private $table_name = "Concert";

    public $id;
    public $odKogo;
    public $dlaKogo;
    public $email;
    public $zyczenia;
    public $agreement;

    public function __construct($db){
        $this->conn = $db;
    }


    // read concert
    function read(){

        $query = "SELECT * FROM " . $this->table_name .";";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    // create concert
    function send(){

        $query = "INSERT INTO
                    " . $this->table_name . "
                SET
                    odKogo=:odKogo, dlaKogo=:dlaKogo, email=:email, zyczenia=:zyczenia, agreement=:agreement";


        $stmt = $this->conn->prepare($query);

        $this->odKogo=htmlspecialchars(strip_tags($this->odKogo));
        $this->dlaKogo=htmlspecialchars(strip_tags($this->dlaKogo));
        $this->email=htmlspecialchars(strip_tags($this->email));
        $this->zyczenia=htmlspecialchars(strip_tags($this->zyczenia));
        $this->agreement=htmlspecialchars(strip_tags($this->agreement));

        $stmt->bindParam(":odKogo", $this->odKogo);
        $stmt->bindParam(":dlaKogo", $this->dlaKogo);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":zyczenia", $this->zyczenia);
        $stmt->bindParam(":agreement", $this->agreement);

        if($stmt->execute()){
            return true;
        }

        return false;
    }
}