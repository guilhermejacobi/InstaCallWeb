<?php
require_once "../conexao.php";

if(isset($_POST['nomeInst']) && isset($_POST['cep']) && isset($_POST['uf']) && isset($_POST['cidade']) && isset($_POST['bairro']) && isset($_POST['logradouro']) && isset($_POST['numInst'])){
  if($_POST['nomeInst'] != "" && $_POST['cep'] != "" && $_POST['uf'] != "" && $_POST['cidade'] != "" && $_POST['bairro'] != "" && $_POST['logradouro'] != "" && $_POST['numInst'] != ""){
    
    $parametros = array(
      ':nomeInst' => $_POST['nomeInst'],
      ':cep' => $_POST['cep'],
      ':uf' => $_POST['uf'],
      ':cidade' => $_POST['cidade'],
      ':bairro' => $_POST['bairro'],
      ':logradouro' => $_POST['logradouro'],
      ':numInst' => $_POST['numInst']
    );

    $stmt = $conn->prepare("INSERT INTO instituicao (nomeInst, cepInst, ufInst, cidadeInst, bairroInst, logradouroInst, numInst) VALUES (:nomeInst, :cep, :uf, :cidade, :bairro, :logradouro, :numInst)");
    $stmt->execute($parametros);

    $retorno = array(
      'status' => $stmt,
    );
    echo json_encode(['status'=>true]);

  } else {
    echo json_encode(['status'=>false]);
  }
}