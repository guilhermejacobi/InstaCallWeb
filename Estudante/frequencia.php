<html>
    <head>
        <link href="frequencia.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="modal.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8">
        
    </head>
    <title> Frequência-Estudante-Unisociesc</title>
    <body id="topoInstaCall"></body>
        <div>
            <h1><font class="instaCall">Insta</font><font class="instaCall2">Call&copy;</font></h1>
        </div>
        <div class="centralizarTudo">
            <div id="boxMenu">
            
                <input type="button" value="Chamada" class="botoesMenu botaoChamada" onclick="">
                <br>
                <input type="button" class="botoesMenu" value="Frequência">
                <br>
                <a href="menu.php"><input type="button" class="botoesMenu" value="Sair"></a>
               
            </div>
        </div>
        <div id="chamadaModal" class="chamadaModal">
            <div class="modalBox" id="fundoCinza">
                <h1>
                    <b class="tituloModal">Registrar Presença</b>
                </h1>
                <table class="descricaoModal">
                    <tr>
                        <td>
                            Status de chamada em <b style="color: red;">VEMELHO</b>: Chamada não liberada / encerrada.
                            <br>
                            Status de chamada em <b style="color: green">VERDE</b>: Chamada liberada
                        </td>
                    </tr>
                </table>
                <center><table class="bordaTable1">
                    <tr>
                        <td>
                            <table class="bordaTable2">
                                <tr>
                                    <td align="right" class="textoModal">Turma: </td>
                                    <td><input type="text" class="inputModal" disabled></td>
                                </tr>
                                <tr>
                                    <td align="right" class="textoModal">Aula: </td>
                                    <td><input type="text" class="inputModal" disabled></td>
                                </tr>
                                <tr>
                                    <td align="right" class="textoModal">Status Chamada: </td>
                                    <td><input type="text" class="inputModal" disabled></td>
                                </tr>
                                <tr>
                                    <td align="right" class="textoModal">Login: </td>
                                    <td><input type="text" class="inputModal"></td>
                                </tr>
                                <tr>
                                    <td align="right" class="textoModal">Senha: </td>
                                    <td><input type="text" class="inputModal"></td>
                                </tr>
                                <tr>
                                    <td><label for="">&nbsp;</label></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><center><input type="button" class="botoesModal" value="Registrar Presença" onclick=""></center></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <div class="fechar"><a onclick="">X</a></div>
            </div>
        </div>
    </body>
    </script>
</html>