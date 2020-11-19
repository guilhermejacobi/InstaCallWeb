
/*
cadastro de instituicao
*/

function cadastrarInstituicao(){
    var testeNome = $("#nomeInst").val();
    var testeCnpj = $('#cnpj').val();
    var testeCep = $("#cep").val();
    var testeUf = $("#uf").val();
    var testeCidade = $("#cidade").val();
    var testeBairro = $("#bairro").val();
    var testeLogradouro = $("#logradouro").val();
    var testeNum = $("#numInst").val();
    
    //verifica se os campos estão vazios
    if (testeNome != "" && testeCnpj != "" && testeCep != "" && testeUf != "" && testeCidade != "" && testeBairro != "" && testeLogradouro != "" && testeNum != ""){

        //teste se já possui uma instituição com mesmo CEP e NUM, pois nõa tem como ter 2 instituições no mesmo lugar de forma literal.
        jQuery.ajax({
            type: 'POST',
            url: '../../Conexao/Instituicao/contarInstituicao.php',
            datatype: 'json',
            data: {cnpj: $('#cnpj').val()},
    
            success: function (result, textstatus) {
                
                console.log(result)
                let resultado = JSON.parse(result);
                console.log(resultado.total);

                //Se resultado for == 0 no select, não ha isntituição igual, então pode registar essa.
                if (resultado.total == 0) {
                    jQuery.ajax({
                        type: 'POST',
                        url: '../../Conexao/Instituicao/cadastrarInstituicao.php',
                        datatype: 'json',
                        data: {nomeInst: $('#nomeInst').val(),cnpj: $('#cnpj').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), numInst: $('#numInst').val()},
                
                        success: function (result, textstatus) {
                            
                            let resultParciado = JSON.parse(result);
                            console.log(resultParciado)
                
                            if (resultParciado) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                window.alert("Cadastro realizado com sucesso!")
                                // window.location.href= "../menuADM.html";
                            } else if (!resultParciado) {
                                window.alert('Falha ao conectar ao banco!/nContacte um Administrador');
                            }
                        }
                    })

                } else if (resultado.total != 0) {
                    //Caso tenha uma ou mais com mesmas informações, deverá ocorrer erro ao registrar.
                    window.alert("Instituição já existente");
                }
            }
        })
        
    } else if (testeNome == "" || testeCep == "" || testeNum == "" || testeCnpj == ""){
        //Se campos que são possiveis digitar estiverem vazios, solicita para prencher
        window.alert("Falha ao cadastrar, campos vazios.");

    } else if (testeUf == "" || testeCidade == "" || testeBairro == "" || testeLogradouro == "") {
        //Se área do endereço que só consegue buscando o CEP estiver vazia, solicita a validação
        window.alert("Validação de CEP necessário!");
    }
}

/*
cadastrar curso
*/

function cadastrarCurso(){
    //verifica se os campos estão vazios
    var testeNomeCurso = $('#curso').val();
    var testeNivel = $('#nivel').val();
    var testeIdInst = $('#idInst').val();
    var testeNomeInst = $('#nomeInst').val();
    var testeCep = $('#cep').val();
    var testeUf = $('#uf').val();
    var testeCidade = $('#cidade').val();
    var testeBairro = $('#bairro').val();
    var testeLogradouro = $('#logradouro').val();
    var testeNumInst = $('#numInst').val();

    if(testeNomeCurso != "" && testeNivel != "" && testeIdInst != "" && testeNomeInst != "" && testeCep != "" && testeUf != ""  && testeCidade != "" && testeNomeCurso != "" && testeBairro != "" && testeLogradouro != "" && testeNumInst != "") {

        //teste se já possui uma instituição com mesmas informações
        jQuery.ajax({
            type: 'POST',
            url: '../../Conexao/Curso/contarCurso.php',
            datatype: 'json',
            data: {curso: $('#curso').val(), nivel: $('#nivel').val(), idInst: $('#idInst').val()},
    
            success: function (result, textstatus) {
                let resultado = JSON.parse(result);
                console.log(resultado);
                //verifica se possui cadastro igual
                if (resultado.total == 0) {

                    jQuery.ajax({
                        type: 'POST',
                        url: '../../Conexao/Curso/cadastrarCurso.php',
                        datatype: 'json',
                        data: {idInst: $('#idInst').val(), curso: $('#curso').val(), nivel: $('#nivel').val()},
                        
                        success: function (result, textstatus) {
    
                            let resultParciado = JSON.parse(result);
                            console.log(resultParciado.status);
                            
                            //Se true, cadastro realizado com sucesso, caso false, ocorreu erro no banco
                            if(resultParciado) {
                                window.alert("Cadastro realizado com sucesso!")
                                location.href= "../menuADM.html";
                            } else {
                                window.alert('Falha ao conectar ao banco!/nContacte um Administrador');
                            } 
                        }
                    })
                } else if(resultado.total != 0) {
                     //Caso tenha uma ou mais com mesmas informações, deverá ocorrer erro ao registrar.
                    window.alert("Instituiçõa ja existente")
                }
               
            }
        })

    } else if(testeNomeCurso == "" || testeNivel == "" || testeIdInst == "") {
         //Se campos que são possiveis digitar estiverem vazios, solicita para prencher
        window.alert("Falha ao salvar, campos vazios.")


    
    } else if(testeNomeInst == "" || testeCep != "" || testeUf == "" || testeCidade == "" || testeNomeCurso == "" || testeBairro == "" || testeLogradouro == "" || testeNumInst == ""){
        //Se área do endereço que só consegue buscando o CEP estiver vazia, solicita a validação
        window.alert("Validação de Instituição necessária.");
    }
    
}

/*
cadastrar turma
*/

function cadastrarTurma(){
    
    var testeTurno = $('#turno').val();
    var testeIdCurso = $('#id').val();
    var testeCurso = $('#curso').val();
    var testeNivel = $('#nivel').val();
    var testeInst = $('#nomeInst').val();
    var testeCep = $('#cep').val();
    var testeUf = $('#uf').val();
    var testeCidade = $('#cidade').val();
    var testeBairro = $('#bairro').val();
    var testeLogradouro = $('#logradouro').val();
    var testeNumInst = $('#numInst').val();

    if (testeTurno != "" && testeIdCurso != "" && testeCurso != "" && testeNivel != "" &&testeInst != "" && testeCep != "" && testeUf != "" && testeCidade != "" && testeBairro != "" && testeLogradouro != "" && testeNumInst != "") {

        jQuery.ajax({
            type: 'POST',
            url: '../../Conexao/Turma/cadastrarTurma.php',
            datatype: 'json',
            data: {id: $('#id').val(), turno: $('#turno').val()},
    
            success: function (result, textstatus) {
                console.log(result);
                resultParciado = JSON.parse(result);
                console.log(resultParciado.status);
    
                if(resultParciado) {
                    window.alert("Cadastro realizado com sucesso!")
                    location.href= "../menuADM.html";
                } else {
                    window.alert('Falha ao conectar ao banco!/nContacte um Administrador');
                } 
            },
        });

    } else if(testeIdCurso == "" || testeTurno == "") {
        //Caso campo nome de curso estiver vazio
        window.alert("Falha ao cadastrar, campos vazios");

    } else if(testeCurso == "" || testeNivel == "" || testeCep == "" || testeInst == "" || testeUf == "" || testeCidade == "" || testeBairro == "" || testeLogradouro == "" || testeNumInst == "") {
        //caso turno não tenha sido seleiconado
        window.alert("Validação de curso necessário.")
    }
    
}

/*
cadastrar professor
*/

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
