function cadastrarAtividade() {
    var testeNome = $('#nomeAtividade').val();
    var testeDesc = $('#descricao').val();
    var testeFinal = $('#dataFinal').val();

    if (testeNome != "" && testeDesc != "" && testeFinal != "") {
        jQuery.ajax({
            type: 'POST',
            url: './Conexao/Login/loginProf.php',
            datatype: 'json',
            data: {nome: $('#nomeAtividade').val(), desc: $('#descricao').val(),data: $('#dataFinal').val()},
    
            success: function (result, textstatus) {
                
                let resultParciado = JSON.parse(result);
                console.log(resultParciado.total + " Teste Prof");
    
                if (resultParciado.total == 1) {
                    window.location.href= "Professor/menu.html";
                }
            }
        })
    } else if (testeNome == "" || testeDesc == "" || testeFinal == ""){
        window.alert("Prencha todos os campos")
    }
}