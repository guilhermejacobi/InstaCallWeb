<?php

require_once 'conexao.php';

class Turma{
    private $id;
    private $idCurso;
    private $turma;
    private $turno;

    public function getId() {
        return $this->id;
    }

    public function setId($valor) {
            $this->id = $valor;
    }
    
    public function getIdCurso() {
        return $this->idCurso;
    }

    public function setIdCurso($valor) {
            $this->idCurso = $valor;
    }

    public function getTurma() {
        return $this->turma;
    }

    public function setTurma($valor) {
            $this->turma = $valor;
    }

    public function getTurno() {
        return $this->turma;
    }

    public function setTurno($valor) {
            $this->turma = $valor;
    }
}
    
?>