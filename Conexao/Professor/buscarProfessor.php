<?php

require_once "../conexao.php";

$sql = ("SELECT professor.nomeProf, professor.cpfProf, professor.nascProf, professor.telProf, professor.celProf, professor.cepProf, professor.ufProf, professor.cidadeProf, professor.bairroProf, professor.logradouroProf, professor.numProf, professor.formacaoProf, professor.nivelProf, professor.instituicaoProf, professor.idTurma, curso.nomeCurso, turma.turno, professor.loginProf, professor.senhaProf FROM professor, curso, turma WHERE idProf = :matricula AND turma.idturma = professor.idTurma AND curso.IdCurso = turma.idCurso");

$query = $conn->prepare($sql);

$query->bindParam(':matricula',$_POST['matricula']);

$query->execute();

$result = $query->fetchObject();

echo json_encode($result);