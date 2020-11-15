<?php
require_once "conexao.php";

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

