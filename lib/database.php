<?php
class Database {
    public $host = DB_HOST;
    public $user = DB_USER;
    public $pass = DB_PASS;
    public $dbName = DB_NAME;

    public $link;
    public $error;

    public function __construct(){
        $this->DbConnection();
    }
    private function DbConnection(){
        $this->link = new mysqli($this->host, $this->user, $this->pass, $this->dbName);
        if(!$this->link){
            $this->error = "Connection Failed.".$this->link->connect_error;
            return false;
        }


    }

    // Select or Read Database
    public function select($qury){
        $result = $this->link->query($qury) or die($this->link->error.__LINE__);
        if($result->num_rows > 0){
            return $result;
        }else{
            return false;
        }
    }
    // Data Insert Into Database
    public function insert($query){
        $insert_row = $this->link->query($query) or die($this->link->error.__LINE__);
        if($insert_row){
            header("Location: index.php?msg=".urlencode('Data Inserted Succesfully'));
            exit();
        }else{
            die("Error: (".$this->link->errno.")".$this->link->error);
        }
    }
    // Data Update Into Database
        public function update($query){
            $update_row = $this->link->query($query) or die($this->link->error.__LINE__);
            if($update_row){
                header("Location: index.php?msg=".urlencode('Data Updated Succesfully'));
                exit();
            }else{
                die("Error: (".$this->link->errno.")".$this->link->error);
            }
        }
    // Data Update Into Database
        public function delete($query){
            $delete_row = $this->link->query($query) or die($this->link->error.__LINE__);
            if($delete_row){
                header("Location: index.php?msg=".urlencode('Data Deleted Succesfully'));
                exit();
            }else{
                die("Error: (".$this->link->errno.")".$this->link->error);
            }
        }




}