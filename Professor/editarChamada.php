<html>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <script type="text/javascript" src="../Admin/JS/mask.js"></script>
    <script type="text/javascript" src="../Admin/JS/tabela.js"></script>
    <script type="text/javascript" src="../Admin/JS/editar.js"></script>
    <link rel="stylesheet" href="editarChamada.css">

        <title>Atividades-Professor-UniSociesc</title>
        
    </head>
    <header>
        <div id="topoInstaCall">
            <h1 class="insta"><font >Insta</font><font class="call">Call&copy;</font></h1>
        </div>
    </header>
    <body id="fundoCinza">
        <div class="centralizarTudo">

            <center><font class="fonteAtividade">Chamadas:</font>
                <table>
                    <tr>
                        <td id="direita">Matrícula:</td>
                        <td><input type="text"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="button" id="abrirAlunoChamada" class="botao" value="Listar Alunos"></td>
                    </tr>
                    <tr>
                        <td id="direita">Aluno:</td>
                        <td><input type="text" disabled></td>
                    </tr>
                    <tr>
                        <td id="direita">Turma</td>
                        <td><input type="text" disabled></td>
                    </tr>
                    <tr>
                        <td id="direita">Curso:</td>
                        <td><input type="text" disabled></td>
                    </tr>
                    <tr>
                        <td id="direita">Data: </td>
                        <td><input type="text" id="data" placeholder="Ex: 02/02/2002"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="button" class="botao" value="Ajustar Presença"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><a href="frequencia.php"><input type="button" class="botao" value="Voltar"></a></td>
                    </tr>
                </table>
            </center>
        </div>
        <div id="listarAlunoModal" class="modalAluno">
            <div class="listarAlunoModalBox">
                <div class="fundoBrancoAluno">
                    <span class="pesquisaLabel">Pesquisar CPF: <input type="text" onkeyup="pesquisarAluno()" id="pesquisarAlunoChamada" class="cpf pesquisarAluno" name="pesquisarAluno"></span><input type="button" value="Limpar Filtro" style="width: 100px;" class="botao" onclick="limparFiltroAluno()">
                    <br>
                    <br>
                    <div class="overflow">
                        <center>
                            <table BORDER RULES = ALL class="tableListarAluno" id="tableListarAluno" style="width: 100%;">
                                <tr>
                                    <th class="tableModal1">Matrícula</th>
                                    <th class="tableModal2">Nome</th>
                                    <th class="tableModal3">CPF</th>
                                    <th class="tableModal3">Nascimento</th>
                                    <th class="tableModal4">Logradouro</th>
                                    <th class="tableModal5">N°</th>
                                    <th class="tableModal6">Bairro</th>
                                    <th class="tableModal7">Cidade</th>
                                    <th class="tableModal8">UF</th>
                                </tr>
                            </table>
                        </center>
                    </div>
                </div>
                <div class="fecharAluno"><a onclick="">X</a></div>
            </div>
        </div>
    </body>
</html>