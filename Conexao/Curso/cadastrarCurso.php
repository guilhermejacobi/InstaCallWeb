<?php
require_once "conexao.php";

if(isset($_POST['curso']) && isset($_POST['nivel']) && isset($_POST['idInst'])){
  if($_POST['curso'] != "" && $_POST['nivel'] !="" && $_POST['idInst'] !=""){
    
    $parametros = array(
      ':curso' => $_POST['curso'],
      ':nivel' => $_POST['nivel'],
      ':idInst' => $_POST['idInst']
    );

    $stmt = $conn->prepare("INSERT INTO curso (idInst, nomeCurso, nivelCurso) VALUES (:idInst, :curso, :nivel)");
    $stmt->execute($parametros);

    $retorno = array(
      'status' => $stmt,
    );
    echo json_encode(['status'=>true]);

    } else {
    echo json_encode(['status'=>false]);
  }
}
