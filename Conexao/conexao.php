<?php
    try{
        $conn = new PDO ('mysql:host=127.0.0.1;dbname=instacall','root','');
    }catch (PDOException $e){
        die("Erro: " . $e->getMessage());
    }
?>