function cadastrarAtividade() {

    var testeIdTurma = $('#turma').val();
    var testeIdProf = $('#idProf').val();
    var testeNome = $('#nomeAtividade').val();
    var testeDesc = $('#descricao').val();
    var testeFinal = $('#dataFinal').val();
    console.log(testeIdTurma);
    console.log(testeIdProf);
    console.log(testeNome);
    console.log(testeDesc);
    console.log(testeFinal);

    if (testeIdTurma != '' && testeIdProf != '' && testeNome != "" && testeDesc != "" && testeFinal != "") {
        jQuery.ajax({
            type: 'POST',
            url: '../Conexao/Atividade/cadastrarAtividade.php',
            datatype: 'json',
            data: {turma: $('#turma').val(), idProf: $('#idProf').val(), nome: $('#nomeAtividade').val(), desc: $('#descricao').val(), data: $('#dataFinal').val()},
    
            success: function (result, textstatus) {
                console.log(result);                
                let resultParciado = JSON.parse(result);

                if (resultParciado.status) {
                    window.alert("Atividade postada com sucesso!");
                    window.location.href= "Professor/menu.php";
                } else if (!resultParciado.status){
                    window.alert("Houve um erro ao inserir atividades\nCaso o erro persista, informe um Administrador.")
                }
            }
        })
    } else if (testeIdProf == '') {
        window.alert("Errou de autenticação");
        window.location.href="../index.php"
    } else if (testeNome == "" || testeDesc == "" || testeFinal == ""){
        window.alert("Prencha todos os campos")
    }
}