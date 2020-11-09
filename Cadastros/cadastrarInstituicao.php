<?php
require_once "conexao.php";

if(isset($_POST['criarNomeInst']) && isset($_POST['cep']) && isset($_POST['uf']) && isset($_POST['cidade']) && isset($_POST['bairro']) && isset($_POST['logradouro']) && isset($_POST['criarNumInst'])){
  if($_POST['criarNomeInst'] != "" && $_POST['cep'] != "" && $_POST['uf'] != "" && $_POST['cidade'] != "" && $_POST['bairro'] != "" && $_POST['logradouro'] != "" && $_POST['criarNumInst'] != ""){
    
    $parametros = array(
      ':criarNomeInst' => $_POST['criarNomeInst'],
      ':cep' => $_POST['cep'],
      ':uf' => $_POST['uf'],
      ':cidade' => $_POST['cidade'],
      ':bairro' => $_POST['bairro'],
      ':logradouro' => $_POST['logradouro'],
      ':criarNumInst' => $_POST['criarNumInst']
    );

    $stmt = $conn->prepare("INSERT INTO instituicao (nomeInst, cepInst, ufInst, cidadeInst, bairroInst, logradouroInst, numInst) VALUES (:criarNomeInst, :cep, :uf, :cidade, :bairro, :logradouro, :criarNumInst)");
    $stmt->execute($parametros);

    $retorno = array(
      'status' => $stmt,
    );

    echo ("<SCRIPT LANGUAGE='JavaScript'>alert('Cadastro realizado com sucesso!');location.href='../Admin/menuADM.html';</SCRIPT>");

  } else {
    echo "<script type='text/javascript'>window.alert('Prencher todos os campos');</script>";
  }
}