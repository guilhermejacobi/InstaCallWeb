
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
                            console.log(resultParciado.status)
                
                            if (resultParciado.status) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                window.alert("Cadastro realizado com sucesso!")
                                // window.location.href= "../menuADM.html";
                            } else if (!resultParciado.status) {
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

    //verifica se os campos estão vazios
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
                            if(resultParciado.status) {
                                window.alert("Cadastro realizado com sucesso!")
                                location.href= "../menuADM.html";
                            } else  if(!resultParciado.status){
                                window.alert('Falha ao conectar ao banco!/nContacte um Administrador');
                            } 
                        }
                    })
                } else if(resultado.total != 0) {
                     //Caso tenha uma ou mais com mesmas informações, deverá ocorrer erro ao registrar.
                    window.alert("Curso ja existente")
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
    var testeIdCurso = $('#idCurso').val();
    var testeCurso = $('#curso').val();
    var testeNivel = $('#nivel').val();
    var testeInst = $('#instituicao').val();
    var testeCep = $('#cep').val();
    var testeUf = $('#uf').val();
    var testeCidade = $('#cidade').val();
    var testeBairro = $('#bairro').val();
    var testeLogradouro = $('#logradouro').val();
    var testeNumInst = $('#numInst').val();

    if (testeTurno != "" && testeIdCurso != "" && testeCurso != "" && testeNivel != "" && testeInst != "" && testeCep != "" && testeUf != "" && testeCidade != "" && testeBairro != "" && testeLogradouro != "" && testeNumInst != "") {

        jQuery.ajax({
            type: 'POST',
            url: '../../Conexao/Turma/cadastrarTurma.php',
            datatype: 'json',
            data: {id: $('#idCurso').val(), turno: $('#turno').val()},
    
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
    
    var testeNome = $('#nome').val();
    var testeNascimento = $('#nascimento').val();
    var testeCpf = $('#cpf').val();
    var testeCep = $('#cep').val();
    var testeUf = $('#uf').val();
    var testeCidade = $('#cidade').val();
    var testeBairro = $('#bairro').val();
    var testeLogradouro = $('#logradouro').val();
    var testeNumProf = $('#numero').val();
    var testeFormacao = $('#formacao').val();
    var testeNivel = $('#nivelProf').val();
    var testeInstituicao = $('#nomeInst').val();
    var testeTurma = $('#idTurma').val();
    var testeCurso = $('#curso').val();
    var testeTurno = $('#turno').val();
    var testeLogin = $('#login').val();
    var testeSenha = $('#senha').val();

    //verifica se campos não estão vazios
    if (testeNome != '' && testeNascimento != '' && testeCpf != '' && testeCep != '' && testeUf != '' && testeCidade != '' && testeBairro != '' && testeLogradouro != '' && testeNumProf != '' && testeFormacao != '' && testeNivel != '' && testeInstituicao != '' && testeTurma != '' && testeCurso != '' && testeTurno != '' && testeLogin != '' && testeSenha != '') {

        //verifica se não possui pessoa com mesmo CPF
        jQuery.ajax({
            type: 'POST',
            url: '../../Conexao/Professor/contarCpfProfessor.php',
            datatype: 'json',
            data: {cpf: $('#cpf').val()},
    
            success: function (result, textstatus) {
                console.log(result);
                resultParciado = JSON.parse(result);
                console.log(resultParciado.total);
    
                if(resultParciado.total == 0) {
                    var testeTelefone = $('#telefone').val();
                    var testeCelular = $('#celular').val();
                    if(testeTelefone != "" && testeCelular != "") {

                        jQuery.ajax({
                            type: 'POST',
                            url: '../../Conexao/Professor/cadastrarProfessor.php',
                            datatype: 'json',
                            data: {nome: $('#nome').val(), cpf: $('#cpf').val(), nascimento: $('#nascimento').val(), telefone: $('#telefone').val(), celular: $('#celular').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), numero: $('#numero').val(), formacao: $('#formacao').val(), nivel: $('#nivelProf').val(), nomeInst: $('#nomeInst').val(), idTurma: $('#idTurma').val(), login: $('#login').val(), senha: $('#senha').val()},
                    
                            success: function (result, textstatus) {
                                console.log(result);
                                resultParciado = JSON.parse(result);
                                console.log(resultParciado);
                    
                                if(resultParciado) {
                                    window.alert("Cadastro realizado com sucesso!")
                                    location.href= "../menuADM.html";
                                } else if(!resultParciado) {
                                    window.alert('Falha ao registrar no banco!/nSe o erro persistir, informe um administrador.');
                                } 
                            },
                        });

                    } else if(testeTelefone == "" && testeCelular == ""){

                        jQuery.ajax({
                            type: 'POST',
                            url: '../../Conexao/Professor/cadastrarProfessor1.php',
                            datatype: 'json',
                            data: {nome: $('#nome').val(), cpf: $('#cpf').val(), nascimento: $('#nascimento').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), numero: $('#numero').val(), formacao: $('#formacao').val(), nivel: $('#nivelProf').val(), nomeInst: $('#nomeInst').val(), idTurma: $('#idTurma').val(), login: $('#login').val(), senha: $('#senha').val()},
                    
                            success: function (result, textstatus) {
                                console.log(result);
                                resultParciado = JSON.parse(result);
                                console.log(resultParciado.status);
                    
                                if(resultParciado.status) {
                                    window.alert("Cadastro realizado com sucesso!")
                                    location.href= "../menuADM.html";
                                } else if(!resultParciado.status) {
                                    window.alert('Falha ao registrar no banco!/nSe o erro persistir, informe um administrador.');
                                } 
                            },
                        });

                    } else if(testeTelefone == "" && testeCelular != "") {

                        jQuery.ajax({
                            type: 'POST',
                            url: '../../Conexao/Professor/cadastrarProfessor2.php',
                            datatype: 'json',
                            data: {nome: $('#nome').val(), cpf: $('#cpf').val(), nascimento: $('#nascimento').val(), celular: $('#celular').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), numero: $('#numero').val(), formacao: $('#formacao').val(), nivel: $('#nivelProf').val(), nomeInst: $('#nomeInst').val(), idTurma: $('#idTurma').val(), login: $('#login').val(), senha: $('#senha').val()},
                    
                            success: function (result, textstatus) {
                                console.log(result);
                                resultParciado = JSON.parse(result);
                                console.log(resultParciado.status);
                    
                                if(resultParciado.status) {
                                    window.alert("Cadastro realizado com sucesso!")
                                    location.href= "../menuADM.html";
                                } else if(!resultParciado.status) {
                                    window.alert('Falha ao registrar no banco!/nSe o erro persistir, informe um administrador.');
                                } 
                            },
                        });
                        
                    } else if(testeTelefone != "" && testeCelular == "") {

                        jQuery.ajax({
                            type: 'POST',
                            url: '../../Conexao/Professor/cadastrarProfessor3.php',
                            datatype: 'json',
                            data: {nome: $('#nome').val(), cpf: $('#cpf').val(), nascimento: $('#nascimento').val(), telefone: $('#telefone').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), numero: $('#numero').val(), formacao: $('#formacao').val(), nivel: $('#nivelProf').val(), nomeInst: $('#nomeInst').val(), idTurma: $('#idTurma').val(), login: $('#login').val(), senha: $('#senha').val()},
                    
                            success: function (result, textstatus) {
                                console.log(result);
                                resultParciado = JSON.parse(result);
                                console.log(resultParciado.status);
                    
                                if(resultParciado.status) {
                                    window.alert("Cadastro realizado com sucesso!")
                                    location.href= "../menuADM.html";
                                } else if(!resultParciado.status) {
                                    window.alert('Falha ao registrar no banco!/nSe o erro persistir, informe um administrador.');
                                } 
                            },
                        });

                    }                  

                } else if (resultParciado.total != 0){
                    window.alert('CPF já registrado.');
                } 
            },
        });

    } else if(testeNome == "" || testeNascimento == "" || testeCpf == "" || testeCep == "" || testeNumProf == "" || testeFormacao == "" || testeNivel == "" || testeInstituicao == "" || testeTurma == "" || testeLogin == "" || testeSenha == "") {
        //Caso campo nome de curso estiver vazio
        window.alert("Falha ao cadastrar, campos vazios");

    } else if(testeUf == "" || testeCidade == "" || testeBairro == "" || testeLogradouro == "") {
        //caso CEP não tenha sido verificado
        window.alert("Validação de CEP necessário.")
    } else if(testeCurso == "" || testeTurno == ""){
        //caso Curso/turno não tenha sido verificados
        window.alert("Validação de curso necessário.")
    }
    
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
