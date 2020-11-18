<?php

  require_once "../conexao.php";
  
  $sql = ("SELECT COUNT(*) AS total FROM instituicao WHERE nomeInst = :nomeInst AND cepInst = :cep AND  numInst = :numInst");

  $query = $conn->prepare($sql);

  $query->bindParam(':nomeInst',$_POST['nomeInst']);
  $query->bindParam(':cep',$_POST['cep']);
  $query->bindParam(':numInst',$_POST['numInst']);

  $query->execute();

  $result = $query->fetchObject();
  
  echo json_encode($result);
