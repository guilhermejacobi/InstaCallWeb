
/*
cadastrar instituicao
*/
function transformarInt(string){
    var int = parseInt($('#cep').val());

    console.log(int.typeof)
}

function cadastrarInstituicao(){

        jQuery.ajax({
            type: 'POST',
            url: '../Conexao/Instituicao/cadastrarInstituicao.php',
            datatype: 'json',
            data: {nomeInst: $('#nomeInst').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), numInst: $('#numInst').val()},

            success: function (result, textstatus) {

                resultParciado = JSON.parse(result);
                console.log(resultParciado.status);

                window.alert("Cadastro realizado com sucesso!")
            // window.location.href= "menuADM.html";
            }
        })
}

/*
cadastrar curso
*/

function cadastrarCurso(){
    jQuery.ajax({
        type: 'POST',
        url: '../Conexao/Curso/cadastrarCurso.php',
        datatype: 'json',
        data: {curso: $('#curso').val(), nivel: $('#nivel').val(),idInst: $('#idInst').val()},

        success: function (result, textstatus) {
            resultParciado = JSON.parse(result);
            console.log(resultParciado.status);

            if(resultParciado) {
                window.alert("Cadastro realizado com sucesso!")
                location.href= "menuADM.html";
            } else {
                window.alert('Falha ao salvar, favor rever informações.');
            } 
        },
    });
}

/*
cadastrar turma
*/
/*
function cadastrarTurma(){
    jQuery.ajax({
        type: 'POST',
        url: '../Conexao/Instituicao/cadastrarInstituicao.php',
        datatype: 'json',
        data: {criarNomeInst: $('#criarNomeInst').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), criarNumInst: $('#criarNumInst').val()},

        success: function (result, textstatus) {
                //dar JSON parse,e jogar em variável, após verificar a variavel ".status" reesultando true ou false, se vier true dar allert e madnar pro ADM, se false, dar allert de falha. =D
            resultParciado = JSON.parse(result);
            console.log(resultParciado.status);

            if(resultParciado) {
                window.alert("Cadastro realizado com sucesso!")
                location.href= "menuADM.html";
            } else {
                window.alert('Falha ao salvar, favor rever informações.');
            } 
        },
    });
}

/*
cadastrar professor
*/
/*
function cadastrarProfessor(){
    jQuery.ajax({
        type: 'POST',
        url: '../Conexao/Instituicao/cadastrarInstituicao.php',
        datatype: 'json',
        data: {criarNomeInst: $('#criarNomeInst').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), criarNumInst: $('#criarNumInst').val()},

        success: function (result, textstatus) {
                //dar JSON parse,e jogar em variável, após verificar a variavel ".status" reesultando true ou false, se vier true dar allert e madnar pro ADM, se false, dar allert de falha. =D
            resultParciado = JSON.parse(result);
            console.log(resultParciado.status);

            if(resultParciado) {
                window.alert("Cadastro realizado com sucesso!")
                location.href= "menuADM.html";
            } else {
                window.alert('Falha ao salvar, favor rever informações.');
            } 
        },
    });
}

/*
cadastrar aluno
*/
/*
function cadastrarAluno(){
    jQuery.ajax({
        type: 'POST',
        url: '../Conexao/Instituicao/cadastrarInstituicao.php',
        datatype: 'json',
        data: {criarNomeInst: $('#criarNomeInst').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), criarNumInst: $('#criarNumInst').val()},

        success: function (result, textstatus) {
                //dar JSON parse,e jogar em variável, após verificar a variavel ".status" reesultando true ou false, se vier true dar allert e madnar pro ADM, se false, dar allert de falha. =D
            resultParciado = JSON.parse(result);
            console.log(resultParciado.status);

            if(resultParciado) {
                window.alert("Cadastro realizado com sucesso!")
                location.href= "menuADM.html";
            } else {
                window.alert('Falha ao salvar, favor rever informações.');
            } 
        },
    });
   
}*/
