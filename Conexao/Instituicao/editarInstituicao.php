<?php

require_once "../conexao.php";

try {
    $sql = ("UPDATE instituicao SET nomeInst = :nomeInst, cepInst = :cep, ufInst = :uf, cidadeInst = :cidade , bairroInst = :bairro, logradouroInst = :logradouro , numInst = :numInst WHERE idInst = :idInst");
    $query = $conn->prepare($sql);

    $query->bindParam(':nomeInst',$_POST['nomeInst']);
    $query->bindParam(':cep',$_POST['cep']);
    $query->bindParam(':uf',$_POST['uf']);
    $query->bindParam(':cidade',$_POST['cidade']);
    $query->bindParam(':bairro',$_POST['bairro']);
    $query->bindParam(':logradouro',$_POST['logradouro']);
    $query->bindParam(':numInst',$_POST['numInst']);
    $query->bindParam(':idInst',$_POST['idInst']);

    $query->execute();

    echo json_encode(['status'=>true]);

} catch {
    echo json_encode(['status'=>false]);
}