
$(document).ready( function (e) {
  $('.abrirListaInst').click(function(){
    $('#editarInstModal').fadeIn(500);
  })
  $('.fechar').click(function(){
    $('#editarInstModal').fadeOut(500)
  })
  $('.abrirModalCurso').click(function(){
    $('#listarCursoModal').fadeIn(500);
  })
  $('.fecharCurso').click(function(){
    $('#listarCursoModal').fadeOut(500)
  })
  if ($('#pesquisarInst').val() == "") {
    listarInst();
  }
  if ($('#pesquisarCurso').val() == "") {
    listarCurso();
  }

})
/*
modal LitarInst
*/
function listarInst(){
    jQuery.ajax({
        type: 'GET',
        url: '../../Conexao/Pesquisa/tabelaInst.php',
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

function deletarTabelaInst() {
  var table = document.getElementById("tableListarInst");
  while (table.rows.length > 1){
  	document.getElementById("tableListarInst").deleteRow(-1);
  }
}

function pesquisarInst() {

  var teste = $('#pesquisarInst').val();
    deletarTabelaInst();
    
    jQuery.ajax({
      type: 'POST',
      url: '../../Conexao/Pesquisa/filtroInstNome.php',
      datatype: 'json',
      data: {nomeInst: "%"+$('#pesquisarInst').val()+"%"},

      success: function (result, textstatus) {
          console.log(result);
          let dados = JSON.parse(result);
          dados.forEach(d => criarLinhaInst(d));

          //Como forEach trabalha? funcoinamento etc...
      }
    })
}

function limparFiltroInst(){
  deletarTabelaInst();

  listarInst();

}

/*
modal Curso
*/

function listarCurso(){
  jQuery.ajax({
    type: 'GET',
    url: '../../Conexao/Pesquisa/tabelaCurso.php',
    datatype: 'json',
    data: {},

    success: function (result, textstatus) {
        
        console.log(result)
        let dados = JSON.parse(result);
        dados.forEach(d => criarLinhasCurso(d));

        //Como forEach trabalha? funcoinamento etc...
    }
})
}

function criarLinhasCurso(dados){
  var table = document.getElementById("tableListarCurso");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);

  cell1.innerHTML = dados.idCurso;
  cell2.innerHTML = dados.nomeCurso;
  cell3.innerHTML = dados.nivelCurso;
  cell4.innerHTML = dados.nomeInst;
  cell5.innerHTML = dados.logradouroInst;
  cell6.innerHTML = dados.bairroInst;
  cell7.innerHTML = dados.cidadeInst;
  cell8.innerHTML = dados.ufInst;

}

function deletarTabelaCurso(){
  var table = document.getElementById("tableListarCurso");
  while (table.rows.length > 1){
  	document.getElementById("tableListarCurso").deleteRow(-1);
  }
}

function pesquisarCurso(){

  deletarTabelaCurso();
  
  jQuery.ajax({
    type: 'POST',
    url: '../../Conexao/Pesquisa/filtroCursoNome.php',
    datatype: 'json',
    data: {nomeCurso: "%"+$('#pesquisarCurso').val()+"%"},

    success: function (result, textstatus) {
        
        let dados = JSON.parse(result);
        console.log(dados);
        dados.forEach(d => criarLinhasCurso(d));

        //Como forEach trabalha? funcoinamento etc...
    }
  })
}


function limparFiltroCurso(){
  deletarTabelaCurso();
  listarCurso();
}
