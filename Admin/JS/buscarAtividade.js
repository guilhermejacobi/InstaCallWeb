$(document).ready(function(){
    listarInst();
});

function listarInst(){
    jQuery.ajax({
        type: 'GET',
        url: '../../Conexao/Atividade/listarAtividade.php',
        datatype: 'json',
        data: {},
    
        success: function (result, textstatus) {
            
            let dados = JSON.parse(result);
            dados.forEach(d => criarLinhaInst(d));

            //Como forEach trabalha? funcoinamento etc...
        }
    })
}

function criarLinhaInst(dados){
  var table = document.getElementById("tableListarInst");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);

  cell1.innerHTML = dados.idInst, "teste";
  cell2.innerHTML = dados.nomeInst;
  cell3.innerHTML = dados.logradouroInst;
  cell4.innerHTML = dados.numInst;
  cell5.innerHTML = dados.bairroInst;
  cell6.innerHTML = dados.cidadeInst;
  cell7.innerHTML = dados.ufInst;
  cell8.innerHTML = dados.cepInst;

}