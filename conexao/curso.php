<?php

require_once 'conexao.php';

class Curso{
    private $id;
    private $idInst;
    private $curso;

    public function getId() {
        return $this->id;
    }

    public function setId($valor) {
            $this->id = $valor;
    }
    
    public function getIdInst() {
        return $this->idInst;
    }

    public function setIdInst($valor) {
            $this->idInst = $valor;
    }

    public function getCurso() {
        return $this->curso;
    }

    public function setCurso($valor) {
            $this->curso = $valor;
    }

}
    
?>