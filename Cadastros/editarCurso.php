<?php
require_once "conexao.php";

if(isset($_POST['idInst']) && isset($_POST['curso']) && isset($_POST['nivel']) && isset($_POST['id'])){
  if($_POST['idInst'] != "" && $_POST['curso'] !="" && $_POST['nivel'] !="" && $_POST['id'] !=""){
    
    $parametros = array(
      ':id' => $_POST['id'],
      ':idInst' => $_POST['idInst'],
      ':curso' => $_POST['curso'],
      ':nivel' => $_POST['nivel']
    );

    $stmt = $conn->prepare("UPDATE curso SET idInst = :idInst, nomeCurso = :curso, nivelCurso = :nivel WHERE idCurso = :id");
    $stmt->execute($parametros);

    $retorno = array(
      'status' => $stmt,
    );

    echo ("<SCRIPT LANGUAGE='JavaScript'>alert('Cadastro editado com sucesso!');location.href='../Admin/menuADM.html';;</SCRIPT>");

  } else {
    echo ("<SCRIPT LANGUAGE='JavaScript'>alert('Campos vazios a serem prenchidos');</SCRIPT>");
  }
}