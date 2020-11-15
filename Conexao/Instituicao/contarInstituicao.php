<?php
require_once "../conexao.php";

if(isset($_POST['nomeInst']) && isset($_POST['cep']) && isset($_POST['uf']) && isset($_POST['cidade']) && isset($_POST['bairro']) && isset($_POST['logradouro']) && isset($_POST['numInst'])){
  if($_POST['nomeInst'] != "" && $_POST['cep'] != "" && $_POST['uf'] != "" && $_POST['cidade'] != "" && $_POST['bairro'] != "" && $_POST['logradouro'] != "" && $_POST['numInst'] != ""){
  
    $sql = ("SELECT COUNT(*) AS total FROM instituicao WHERE nomeInst = :nomeInst, cepInst = :cep, ufInst = :uf, cidadeInst = :cidade, bairroInst = :bairro, logradouroInst = :logradouro, numInst = :numInst");
    $query = $conn->prepare($sql);
    
    $query->bindParam(':nomeInst',$_POST['nomeInst']);
    $query->bindParam(':cepInst',$_POST['cepInst']);
    $query->bindParam(':ufInst',$_POST['ufInst']);
    $query->bindParam(':uf',$_POST['uf']);
    $query->bindParam(':cidade',$_POST['cidade']);
    $query->bindParam(':bairro',$_POST['bairro']);
    $query->bindParam(':logradouro',$_POST['logradouro']);
    $query->bindParam(':numInst',$_POST['numInst']);

    $query->execute();

    $result = $query->fetchObject();
  
    echo json_encode($result);

  } else {
    echo json_encode(['status'=>false]);
   // echo "<script type='text/javascript'>window.alert('Prencher todos os campos');</script>";
  }
}