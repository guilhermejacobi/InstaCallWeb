function listarAtividades(idTurma){
    
    //tratar

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
}

function retornaLinhaTabela(_id, _desc,_nomeProf, _curso, _data){

    var dataBD = _data.split("/");
    var dataLimite = new Date(dataBD[2],dataBD[1]-1,dataBD[0],0,0,0,0);
    var diaAtual = new Date();
    
    var emAtraso = diaAtual - dataLimite > 0;

    // console.log(dataLimite.getDate());
    // console.log(dataLimite.getMonth());
    // console.log(dataLimite.getFullYear());

    var html = `<div class="tabelaId">${_id}</div><div class="tabelaId">${_nomeProf}</div><div class="tabelaDesc">${_desc}</div> <div class="tabelaNome">${_curso}</div> <div class="tabelaData ${emAtraso?"emAtraso":"emDia"}"><p>Data Limite:<br>${_data}</p></div>`;

    return html;

}

function criarLinhaInst(dados){
    var table = document.getElementById("tabelaDeAtividades");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    
    cell1.innerHTML = retornaLinhaTabela(dados.idAtividade, dados.descricaoAtividade,dados.nomeProf, dados.nomeCurso, dados.dataLimite);
    
  }