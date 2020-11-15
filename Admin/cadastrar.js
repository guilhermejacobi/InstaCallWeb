
/*
cadastro de instituicao
*/

function cadastrarInstituicao(){
    var testeNome = $("#nomeInst").val();
    var testeCep = $("#cep").val();
    var testeUf = $("#uf").val();
    var testeCidade = $("#cidade").val();
    var testeBairro = $("#bairro").val();
    var testeLogradouro = $("#logradouro").val();
    var testeNum = $("#numInst").val();

    //if (numInst != 0) {
        if (testeNome != "" && testeCep != "" && testeUf != "" && testeCidade != "" && testeBairro != "" && testeLogradouro != "" && testeNum != ""){
            
            //Se campos gerais forem diferente de vazios, começa a ligação com banco de dados
            jQuery.ajax({
                type: 'POST',
                url: '../Conexao/Instituicao/cadastrarInstituicao.php',
                datatype: 'json',
                data: {nomeInst: $('#nomeInst').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), numInst: $('#numInst').val()},
        
                success: function (result, textstatus) {
                    console.log(result);
                    let resultParciado = JSON.parse(result);
                    console.log(resultParciado.status);
        
                    if (resultParciado) {
                        window.alert("Cadastro realizado com sucesso!")
                       // window.location.href= "menuADM.html";
                    } else if (!resultParciado == false) {
                        window.alert("Falha ao cadastrar, revisar as informações")
                    }
                }
            })

        } else if (testeNome == "" || testeCep == "" || testeNum == ""){
            //Se campos que são possiveis digitar estiverem vazios, solicita para prencher
            window.alert("Falha ao cadastrar, campos vazios.");

        } else if (testeUf == "" || testeCidade == "" || testeBairro == "" || testeLogradouro == "") {
            //Se área do endereço que só consegue buscando o CEP estiver vazia, solicita a validação
            window.alert("Validação de CEP necessário!");
        }
        
    //} else {
    //    window.alert("Instituicao idêntica já registrada.")
   // }
}

function contarInst(){
    jQuery.ajax({
        type: 'POST',
        url: '../Conexao/Instituicao/contarInstituicao.php',
        datatype: 'json',
        data: {nomeInst: $('#nomeInst').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), numInst: $('#numInst').val()},

        success: function (result, textstatus) {
            console.log('teste 1:');
            console.log(result);
            
            console.log('teste 2:');
            let resultado = JSON.parse(result);
            console.log(resultado);

            console.log('teste 3:');
            console.log(resultado.total);
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
