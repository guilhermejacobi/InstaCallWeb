<?php

require_once 'conexao.php';

class Instituicao{
    private $id;
    private $instituicao;
    private $cep;
    private $uf;
    private $cidade;
    private $bairro;
    private $logradouro;
    private $num;

    public function getId() {
        return $this->id;
    }

    public function setId($valor) {
            $this->id = $valor;
    }
    
    public function getInstituicao() {
        return $this->instituicao;
    }

    public function setInstituicao($valor) {
            $this->instituicao = $valor;
    }

    public function getCep() {
        return $this->cep;
    }

    public function setCep($valor) {
            $this->cep = $valor;
    }
    
    public function getUf() {
        return $this->uf;
    }

    public function setUf($valor) {
            $this->uf = $valor;
    }
    
    public function getCidade() {
        return $this->cidade;
    }

    public function setCidade($valor) {
            $this->cidade = $valor;
    }

    public function getBairro() {
        return $this->bairro;
    }

    public function setBairro($valor) {
            $this->bairro = $valor;
    }

    public function getLogradouro() {
        return $this->logradouro;
    }

    public function setLogradouro($valor) {
            $this->logradouro = $valor;
    }
    
    public function getNumero() {
        return $this->num;
    }

    public function setNumero($valor) {
            $this->num = $valor;
    }
    

}
    
?>