<?php
require_once "../conexao.php";

try{
  $sql = ("");

  echo json_encode(['status' =>true]);

}catch (PDOException $e) {
  echo ("Erro " .$e->getMessage());
  echo json_encode(['status' =>false]);
}