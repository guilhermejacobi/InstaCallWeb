<?php

require_once "../conexao.php";

$sql = ("SELECT COUNT(*) AS total FROM curso WHERE idInst = :idInst AND nomeCurso = :curso AND nivelCurso = :nivel");

$query = $conn->prepare($sql);

$query->bindParam(':idInst',$_POST['idInst']);
$query->bindParam(':curso',$_POST['curso']);
$query->bindParam(':nivel',$_POST['nivel']);

$query->execute();

$result = $query->fetchObject();

echo json_encode($result);
