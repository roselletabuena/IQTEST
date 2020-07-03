<?php
include 'config.php';

if (!empty($_POST)) {

    if ($_POST['action'] == 'insert_user') {
    
        $fullname = $_POST['fullname'];
        $email = $_POST['email'];
        $birthday = $_POST['birthDate'];
        $gender = $_POST['gender'];
        $user_pass = password_hash($_POST['password'], PASSWORD_DEFAULT);
    
        // function emailExists($dbc, $email) {
        //     $stmt = $dbc->prepare("SELECT 1 FROM users WHERE email=?");
        //     $stmt->execute([$email]); 
        //     return $stmt->fetchColumn();
        // }
        
        // if (emailExists($dbc, $email)) {
        //     // found 
        //     echo false;
        // } else {

         

        // }    

        $query = "INSERT INTO users (full_name, email, birthday, gender, password, avatar) VALUES (?, ?, ?, ?, ?,?)";
    
        try {
            if ($dbc->prepare($query)->execute([$fullname, $email, $birthday, $gender, $user_pass, "default"])) {
    
            }
        } catch (PDOException $ex) {
            $data = $ex->getMessage();
        }
  
    }



}
?>

