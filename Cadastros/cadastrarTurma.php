<?php
require_once "conexao.php";

if(isset($_POST['idCurso']) && isset($_POST['turno'])){
  if($_POST['idCurso'] != "" && $_POST['turno'] !=""){
    
    $parametros = array(
      ':idCurso' => $_POST['idCurso'],
      ':turno' => $_POST['turno']
    );
    
    $stmt = $conn->prepare("INSERT INTO turma (idCurso, turno) VALUES (:idCurso, :turno)");
    $stmt->execute($parametros);

    $retorno = array(
      'status' => $stmt,
    );

    echo ("<SCRIPT LANGUAGE='JavaScript'>alert('Cadastro realizado com sucesso!');location.href='../Admin/menuADM.html';l</SCRIPT>");

  } else {
    echo ("<SCRIPT LANGUAGE='JavaScript'>alert('Campos vazios a serem prenchidos');</SCRIPT>");
  }
}