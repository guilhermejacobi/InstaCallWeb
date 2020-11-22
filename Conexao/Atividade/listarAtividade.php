<?php
require "../conexao.php";

$sql = ("SELECT atividade.idAtividade, atividade.nomeAtividade, atividade.DescricaoAtividade, atividade.dataLimite FROM turma, curso, instituicao WHERE idTurma = :idTurma AND turma.idCurso = curso.idCurso AND curso.idInst = instituicao.IdInst");
$query = $conn->prepare($sql);

$query->bindParam(':idTurma',$_POST['idTurma']);

$query->execute();

$result = $query->fetchObject();

echo json_encode($result);0