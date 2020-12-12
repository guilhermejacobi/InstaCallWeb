$(document).ready(function(){

    jQuery.ajax({
        type: 'POST',
        url: '../Conexao/Aluno/buscarAluno.php',
        datatype: 'json',
        data: {},
        success: function (result, textstatus) {

            let resultado = JSON.parse(result);
            if (resultado) {
                $('#idAluno').val(resultado.idAluno);
                $('#nomeAluno').val(resultado.nomeAluno);
                $('#nomeCurso').val(resultado.nomeAluno);
                $('#Turma').val(resultado.idAluno);
                listarFrequencia();
            } else if(!resultado) {
                window.alert("Aluno não encontrado")
                window.location.href="../index.php";
            }
        }
    })
});
function listarFrequencia(){
    
    //tratar
   

    jQuery.ajax({
        type: 'GET',
        url: '../Conexao/Chamada/buscarFrequenciaAluno.php',
        datatype: 'json',
        data: {idTurma: $("#Turma").val(), idAluno: $("#idAluno").val()},
    
        success: function (result, textstatus) {
            console.log(result);
            let dados = JSON.parse(result);

            dados.forEach(d => criarLinhaInst(d));

            //Como forEach trabalha? funcoinamento etc...
        }
    })
}

function retornaLinhaTabela(_id,_nAluno, _dia,_teste, _curso){

    if (_teste == 1) {
        _teste = 'Presente';
    }
    if (_teste == 0) {
        _teste = 'Faltou';
    }
    var html = `
    <tr>
    <td class="tabelaId">${_id}</td>
    <td class="tabelaId">${_nAluno}</td>
    <td class="tabelaId">${_dia}</td>
    <td class="tabelaDesc">${_teste}</td> 
    <td class="tabelaNome">${_curso}</td>
    </tr> 
    `;

    return html;

}

function criarLinhaInst(dados){
    var html = retornaLinhaTabela(
        dados.idTurma,
        dados.nomeAluno, 
        dados.diaChamada,
        dados.presenca,
        dados.nomeCurso
    );
    $ ("#tabelaFrequencia").append(html);
    
  }
