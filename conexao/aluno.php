<?php

require_once 'conexao.php';

class Aluno{

    private $matricula;
    private $nome;
    private $cpf;
    private $nascimento;
    private $cep;
    private $uf;
    private $cidade;
    private $bairro;
    private $logradouro;
    private $num;
    private $curso;
    private $nivel;
    private $turno;

    public function getMatricula()
    {
        return $this->matricula;
    }

    public function setMatricula($matricula)
    {
        $this->matricula = $matricula;

        return $this;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;

        return $this;
    }

    public function getCpf()
    {
        return $this->cpf;
    }

    public function setCpf($cpf)
    {
        $this->cpf = $cpf;

        return $this;
    }

    public function getNascimento()
    {
        return $this->nascimento;
    }

    public function setNascimento($nascimento)
    {
        $this->nascimento = $nascimento;

        return $this;
    }

    public function getCep()
    {
        return $this->cep;
    }

    public function setCep($cep)
    {
        $this->cep = $cep;

        return $this;
    }

    public function getUf()
    {
        return $this->uf;
    }

    public function setUf($uf)
    {
        $this->uf = $uf;

        return $this;
    }

    public function getCidade()
    {
        return $this->cidade;
    }

    public function setCidade($cidade)
    {
        $this->cidade = $cidade;

        return $this;
    }

    public function getBairro()
    {
        return $this->bairro;
    }

    public function setBairro($bairro)
    {
        $this->bairro = $bairro;

        return $this;
    }

    public function getLogradouro()
    {
        return $this->logradouro;
    }

    public function setLogradouro($logradouro)
    {
        $this->logradouro = $logradouro;

        return $this;
    }

    public function getNum()
    {
        return $this->num;
    }

    public function setNum($num)
    {
        $this->num = $num;

        return $this;
    }

    public function getCurso()
    {
        return $this->curso;
    }

    public function setCurso($curso)
    {
        $this->curso = $curso;

        return $this;
    }

    public function getNivel()
    {
        return $this->nivel;
    }
 
    public function setNivel($nivel)
    {
        $this->nivel = $nivel;

        return $this;
    }

    public function getTurno()
    {
        return $this->turno;
    }

    public function setTurno($turno)
    {
        $this->turno = $turno;

        return $this;
    }
}

?>