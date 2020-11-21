<?php

require_once "../conexao.php";

$sql = ("SELECT COUNT(*) AS total FROM adm WHERE loginProf = :email AND senhaProf = :senha");

$query = $conn->prepare($sql);

$query->bindParam(':email',$_POST['loginMenu']);
$query->bindParam(':senha',$_POST['senhaMenu']);

$query->execute();

$result = $query->fetchObject();

echo json_encode($result);
