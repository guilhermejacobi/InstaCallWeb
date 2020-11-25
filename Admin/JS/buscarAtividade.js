function listarAtividades(idTurma){

    if (idTurma != "") {

        jQuery.ajax({
            type: 'GET',
            url: '../Conexao/Atividade/listarAtividade.php',
            datatype: 'json',
            data: {idTurma: idTurma},

            success: function (result, textstatus) {

                let dados = JSON.parse(result);

                dados.forEach(d => criarLinhaInst(d));

                //Como forEach trabalha? funcoinamento etc...
            }
        })
    } else {
        window.alert("Erro de autenticação")
        window.location.href="../index.php"
    }
}

function retornaLinhaTabela(_id, _desc, _curso, _data){
var html = '<div class="tabelaId">'+ _id +'</div> <div class="tabelaDesc">'+_desc+'</div> <div class="tabelaNome">'+_curso+'</div> <div class="tabelaData">Data Limite:<br>'+_data+'</div>';

return html;

}

function criarLinhaInst(dados){
var table = document.getElementById("tabelaDeAtividades");
var row = table.insertRow(-1);
var cell1 = row.insertCell(0);

cell1.innerHTML = retornaLinhaTabela(dados.idAtividade, dados.descricaoAtividade, dados.nomeCurso, dados.dataLimite);

}