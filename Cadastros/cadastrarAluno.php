<?php
require_once "conexao.php";

if(isset($_POST['nome']) && isset($_POST['nascimento']) && isset($_POST['cpf']) && isset($_POST['cep']) && isset($_POST['uf']) && isset($_POST['cidade']) && isset($_POST['bairro']) && isset($_POST['logradouro']) && isset($_POST['numero']) && isset($_POST['idTurma']) && isset($_POST['email']) && isset($_POST['senha'])){
    if($_POST['nome'] != "" && $_POST['nascimento'] != "" && $_POST['cpf'] != "" && $_POST['cep'] != "" && $_POST['uf'] != "" && $_POST['cidade'] != "" && $_POST['bairro'] != "" && $_POST['logradouro'] != "" && $_POST['numero'] != "" && $_POST['idTurma'] != "" && $_POST['email'] != "" && $_POST['senha'] != ""){
      
        $parametros = array(
            ':nome' => $_POST['nome'],
            ':cpf' => $_POST['cpf'],
            ':nascimento' => $_POST['nascimento'],
            ':cep' => $_POST['cep'],
            ':uf' => $_POST['uf'],
            ':cidade' => $_POST['cidade'],
            ':bairro' => $_POST['bairro'],
            ':logradouro' => $_POST['logradouro'],
            ':numero' => $_POST['numero'],
            ':idTurma' => $_POST['idTurma'],
            ':email' => $_POST['email'],
            ':senha' => $_POST['senha']
        );
  
        $stmt = $conn->prepare("INSERT INTO aluno (nomeAluno, cpfAluno, nascAluno, cepAluno, ufAluno, cidadeAluno, bairroAluno, logradouroAluno, numAluno, idTurma , loginAluno, senhaAluno)
                                                VALUES (:nome, :cpf, :nascimento, :cep, :uf, :cidade, :bairro, :logradouro, :numero, :idTurma, :email, :senha)");
        $stmt->execute($parametros);

    $retorno = array(
      'status' => $stmt,
    );

    echo ("<SCRIPT LANGUAGE='JavaScript'>alert('Cadastro realizado com sucesso!');location.href='../Admin/menuADM.html';</SCRIPT>");
  
} else {
    echo "<script type='text/javascript'>window.alert('Prencher todos os campos');location.href='../Admin/cadastrarInstituicao.html';</script>";
  }
}