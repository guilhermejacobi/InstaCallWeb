<?php
require_once "conexao.php";

if(isset($_POST['nome']) && isset($_POST['nascimento']) && isset($_POST['cpf']) && isset($_POST['cep']) && isset($_POST['estado']) && isset($_POST['cidade']) && isset($_POST['bairro']) && isset($_POST['logradouro']) && isset($_POST['numero']) && isset($_POST['formacao']) && isset($_POST['selectCurso']) && isset($_POST['idTurma']) && isset($_POST['email']) && isset($_POST['senha'])){
    if($_POST['nome'] != "" && $_POST['nascimento'] != "" && $_POST['cpf'] != "" && $_POST['cep'] != "" && $_POST['estado'] != "" && $_POST['cidade'] != "" && $_POST['bairro'] != "" && $_POST['logradouro'] != "" && $_POST['numero'] != "" && $_POST['formacao'] != "" && $_POST['selectCurso'] != "" && $_POST['idTurma'] != "" && $_POST['email'] != "" && $_POST['senha'] != ""){
      
      $parametros = array(
        ':nome' => $_POST['nome'],
        ':cpf' => $_POST['cpf'],
        ':nascimento' => $_POST['nascimento'],
        ':cep' => $_POST['cep'],
        ':estado' => $_POST['estado'],
        ':cidade' => $_POST['cidade'],
        ':bairro' => $_POST['bairro'],
        ':logradouro' => $_POST['logradouro'],
        ':numero' => $_POST['numero'],
        ':formacao' => $_POST['formacao'],
        ':selectCurso' => $_POST['selectCurso'],
        ':idTurma' => $_POST['idTurma'],
        ':email' => $_POST['email'],
        ':senha' => $_POST['senha']
      );
  
      $stmt = $conn->prepare("INSERT INTO professor (nomeProf, cpfProf, nascProf, cepProf, ufProf, cidadeProf, bairroProf, logradouroProf, numProf, formacaoProf, nivelProf, idTurma, loginProf, senhaProf)
                                            VALUES (:nome, :cpf, :nascimento, :cep, :estado, :cidade, :bairro, :logradouro, :numero, :formacao, :selectCurso, :idTurma, :email, :senha)");
      $stmt->execute($parametros);

    $retorno = array(
      'status' => $stmt,
    );

    echo ("<SCRIPT LANGUAGE='JavaScript'>alert('Cadastro realizado com sucesso!');</SCRIPT>");

  } else {
    echo "<script type='text/javascript'>window.alert('Prencher todos os campos');</script>";
  }
}