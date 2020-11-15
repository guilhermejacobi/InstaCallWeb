<?php
//if(isset($_POST['id']){}
 // if($_POST['id'] != ""){}
  require "../conexao.php";
  
  $sql = ("SELECT curso.idCurso, instituicao.nomeInst, instituicao.idInst, curso.nomeCurso, curso.nivelCurso FROM curso, instituicao WHERE curso.idCurso = :id AND curso.idInst = instituicao.IdInst");
  $query = $conn->prepare($sql);
  $query->bindParam(':id',$_POST['id']);
  $query->execute();

  $result = $query->fetchObject();
  
  echo json_encode($result);