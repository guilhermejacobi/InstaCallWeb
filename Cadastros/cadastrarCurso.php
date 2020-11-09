<?php
require_once "conexao.php";

if(isset($_POST['idInst']) && isset($_POST['curso']) && isset($_POST['nivel'])){
  if($_POST['idInst'] != "" && $_POST['curso'] !="" && $_POST['nivel'] !=""){
    
    $parametros = array(
      ':idInst' => $_POST['idInst'],
      ':curso' => $_POST['curso'],
      ':nivel' => $_POST['nivel']
    );

    $stmt = $conn->prepare("INSERT INTO curso (idInst, nomeCurso, nivelCurso) VALUES (:idInst, :curso, :nivel)");
    $stmt->execute($parametros);

    $retorno = array(
      'status' => $stmt,
    );

    //echo ("<SCRIPT LANGUAGE='JavaScript'>alert('Cadastro realizado com sucesso!');</SCRIPT>");

  } else {
    echo ("<SCRIPT LANGUAGE='JavaScript'>alert('Campos vazios a serem prenchidos');</SCRIPT>");
  }
}