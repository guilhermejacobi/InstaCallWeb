$(document).ready(function(){

    jQuery.ajax({
        type: 'POST',
        url: '../Conexao/Professor/buscarProfessor.php',
        datatype: 'json',
        data: {},
        success: function (result, textstatus) {

            let resultado = JSON.parse(result);
            if (resultado) {
                $('#idProf').val(resultado.idProf);
                $('#nomeProf').val(resultado.nomeProf);
                $('#nomeCurso').val(resultado.nomeCurso);
                $('#turmaProf').val(resultado.idTurma);
                $('#turno').val(resultado.turno);
                listarChamadas();
            } else if(!resultado) {
                window.alert("Professor não encontrado")
                window.location.href="../index.php";
            }
        }
    })
});

function listarChamadas(){
    
    //tratar
   

    jQuery.ajax({
        type: 'GET',
        url: '../Conexao/Chamada/buscarListaChamadaProf.php',
        datatype: 'json',
        data: {idTurma: $("#turmaProf").val()},
    
        success: function (result, textstatus) {
            console.log(result);
            let dados = JSON.parse(result);

            dados.forEach(d => criarLinhaInst(d));

            //Como forEach trabalha? funcoinamento etc...
        }
    })
}

function retornaLinhaTabela(_id, _dia,_teste, _curso){

    if (_teste == 1) {
        _teste = 'Liberado';
    }
    if (_teste == 0) {
        _teste = 'Encerrado';
    }
    var html = `
    <tr>
    <td class="tabelaId">${_id}</td>
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
        dados.dia,
        dados.teste,
        dados.nomeCurso
    );
    
    $("#tabelaProfChamada").append(html);
    
  }