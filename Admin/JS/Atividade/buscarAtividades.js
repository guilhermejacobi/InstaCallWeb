function listarAtividades(idTurma) {
  //tratar

  jQuery.ajax({
    type: "GET",
    url: "../Conexao/Atividade/listarAtividade.php",
    datatype: "json",
    data: { idTurma: idTurma },

    success: function (result, textstatus) {
      let dados = JSON.parse(result);

      dados.forEach((d) => criarLinhaInst(d));

      //Como forEach trabalha? funcoinamento etc...
    },
  });
}

function retornaLinhaTabela(_id, _desc, _nomeProf, _curso, _data) {
  var dataBD = _data.split("/");
  var dataLimite = new Date(dataBD[2], dataBD[1] - 1, dataBD[0], 0, 0, 0, 0);
  var diaAtual = new Date();

  var emAtraso = diaAtual - dataLimite > 0;

  var html = `
  <tr>
  <td class="tabelaId">${_id}</td>
  <td class="tabelaId">${_nomeProf}</td>
  <td class="tabelaDesc">${_desc}</td>
  <td class="tabelaNome">${_curso}</td>
  <td class="tabelaData ${
    emAtraso ? "emAtraso" : "emDia"
  }"><p>Data Limite:<br>${_data}</p></td>
  <tr>
  `;

  return html;
}

function criarLinhaInst(dados) {
  var table = document.getElementById("tabelaDeAtividades");

  var html = retornaLinhaTabela(
    dados.idAtividade,
    dados.descricaoAtividade,
    dados.nomeProf,
    dados.nomeCurso,
    dados.dataLimite
  );

  $("#tabelaDeAtividades").append(html);
}
