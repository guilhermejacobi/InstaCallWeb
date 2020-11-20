/*
Editar Insitiuicao
*/
function buscarIdInstituicao(){
    
    var testeId = $('#idInst').val();

    //verifica se campos estão vazios
    if (testeId != "") {
        
        //traz os dados do banco para a input com base na ID
        jQuery.ajax({
            type: 'POST',
            url: '../../Conexao/Instituicao/buscarIdInstituicao.php',
            datatype: 'json',
            data: {idInst: $('#idInst').val()},
            
            success: function (result, textstatus) {

                let resultado = JSON.parse(result);

                if (resultado) {
                    $('#nomeInst').val(resultado.nomeInst);
                    $('#cnpj').val(resultado.cnpjInst);
                    $('#cep').val(resultado.cepInst);
                    $('#uf').val(resultado.ufInst);
                    $('#cidade').val(resultado.cidadeInst);
                    $('#bairro').val(resultado.bairroInst);
                    $('#logradouro').val(resultado.logradouroInst);
                    $('#numInst').val(resultado.numInst);
                } else if (!resultado) {
                    window.alert("Instituicção não encontrada")
                }
            }
        })
    } else {
        window.alert("ID inválida!");
    }
}

function editarInstituicao() {
    var testeId = $('#idInst').val();
    var testeCnpj = $('#cnpj').val();
    var testeNome = $('#nomeInst').val();
    var testeCep = $('#cep').val();
    var testeUf = $('#uf').val();
    var testeCidade = $('#cidade').val();
    var testeBairro = $('#bairro').val();
    var testeLogradouro = $('#logradouro').val();
    var testeNum = $('#numInst').val();

     //verifica se os campos estão vazios
    if (testeId != "" && testeCnpj != "" && testeNome != "" && testeCep != "" && testeUf != "" && testeCidade != "" && testeBairro != "" && testeLogradouro != "" && testeNum != ""){
        
        //teste se já possui uma instituição com mesmo CNPJ em outro ID.
        jQuery.ajax({
            type: 'POST',
            url: '../../Conexao/Instituicao/contarEditInstituicao.php',
            datatype: 'json',
            data: {idInst: $('#idInst').val(), cnpj: $('#cnpj').val()},
        
            success: function (result, textstatus) {
                    
                let resultado = JSON.parse(result);

                //Se resultado for == 0 no select, não ha isntituição igual, então pode registar essa.
                if (resultado.total == 0) {

                    jQuery.ajax({
                        type: 'POST',
                        url: '../../Conexao/Instituicao/editarInstituicao.php',
                        datatype: 'json',
                        data: {nomeInst: $('#nomeInst').val(), cnpj: $('#cnpj').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), numInst: $('#numInst').val(), idInst: $('#idInst').val()},
                        
                        success: function (result, textstatus) {

                            resultParciado = JSON.parse(result);
                        
                            if (resultParciado) {
                                window.alert("Cadastro editado com sucesso!")
                                window.location.href= "../menuADM.html";
                            } else if (!resultParciado == false) {
                                window.alert('Falha ao conectar ao banco!/nContacte um Administrador');
                            }
                        }
                    })

                } else if (resultado.total == 1) {
                    //Caso tenha uma ou mais com mesmas informações, deverá ocorrer erro ao registrar.
                    window.alert("CNPJ já registrado");
                }
            }
        })
    } else if (testeNome == "" || testeCep == "" || testeNum == ""){
        //Se campos que são possiveis digitar estiverem vazios, solicita para prencher
        window.alert("Falha na operação, campos vazios.");

    } else if (testeUf == "" || testeCidade == "" || testeBairro == "" || testeLogradouro == "") {
        //Se área do endereço que só consegue buscando o CEP estiver vazia, solicita a validação
        window.alert("Validação de CEP necessário!");
    }
}
/*
Editar Curso
*/

function buscarIdCurso(){

    var testeId = $('#idCurso').val();

    if (testeId != "") {
        jQuery.ajax({
            type: 'POST',
            url: '../../Conexao/Curso/buscarIdCurso.php',
            datatype: 'json',
            data: {id: $('#idCurso').val()},
            success: function (result, textstatus) {
                let resultado = JSON.parse(result);

                if (resultado) {
                    $('#curso').val(resultado.nomeCurso);
                    $('#nivel').val(resultado.nivelCurso);
                    $('#idInst').val(resultado.idInst);
                    $('#instituicao').val(resultado.nomeInst);
                    $('#cep').val(resultado.cepInst);
                    $('#uf').val(resultado.ufInst);
                    $('#cidade').val(resultado.cidadeInst);
                    $('#logradouro').val(resultado.logradouroInst);
                    $('#bairro').val(resultado.bairroInst);
                    $('#numInst').val(resultado.numInst);

                } else if(!resultado) {
                    window.alert("Curso não encontrado")
                }
            }
        });
    } else {
        window.alert("Campo ID vazio.")
    }  
}


function editarCurso() {

    var testeIdCurso = $('#idCurso').val();
    var testeCurso = $('#curso').val();
    var testeNivel = $('#nivel').val();
    var testeInst = $('#idInst').val();

    if (testeIdCurso != "" && testeCurso != "" && testeNivel != "" && testeInst != ""){
        jQuery.ajax({
            type: 'POST',
            url: '../../Conexao/Curso/contarCurso.php',
            datatype: 'json',
            data: {idCurso: $('#idCurso').val(), curso: $('#curso').val(), nivel: $('#nivel').val(), idInst: $('#idInst').val()},
            
            success: function (result, textstatus) {

                let resultParciado = JSON.parse(result);

                if (resultParciado.total == 0) {
                    jQuery.ajax({
                        type: 'POST',
                        url: '../../Conexao/Curso/editarCurso.php',
                        datatype: 'json',
                        data: {idCurso: $('#idCurso').val(), curso: $('#curso').val(), nivel: $('#nivel').val(), idInst: $('#idInst').val()},
                        
                        success: function (result, textstatus) {

                            let resultParciado = JSON.parse(result);

                            if (resultParciado) {
                                window.alert("Cadastro editado com sucesso!")
                                window.location.href= "../menuADM.html";
                            } else if (!resultParciado == false) {
                                window.alert('Falha ao conectar ao banco!/nContacte um Administrador');
                            }
                        }
                    })
                } else if (!resultParciado.total != 0) {
                    window.alert('Falha ao conectar ao banco!/nContacte um Administrador');
                }
            }
        })
    } else if(testeIdCurso == "" || testeCurso == "" || testeNivel == "" || testeNum == "") {
        window.alert("Falha na operação, campos ainda vazios.");

    } else if(testeInst == "") {
        window.alert("Validação de curso necessário!");
    }
}


/*
Editar Turma
*/

function buscarIdTurma(){

    var testeId = $('#idTurma').val();

    if (testeId != "") {
        jQuery.ajax({
            type: 'POST',
            url: '../../Conexao/Turma/buscarIdTurma.php',
            datatype: 'json',
            data: {idTurma: $('#idTurma').val()},
            success: function (result, textstatus) {

                let resultado = JSON.parse(result);

                if (resultado) {

                    $('#turno').val(resultado.turno);
                    $('#idCurso').val(resultado.idCurso);
                    $('#curso').val(resultado.nomeCurso);
                    $('#nivel').val(resultado.nivelCurso);
                    $('#instituicao').val(resultado.nomeInst);
                    $('#cep').val(resultado.cepInst);
                    $('#uf').val(resultado.ufInst);
                    $('#cidade').val(resultado.cidadeInst);
                    $('#logradouro').val(resultado.logradouroInst);
                    $('#bairro').val(resultado.bairroInst);
                    $('#numInst').val(resultado.numInst);

                } else if(!resultado) {
                    window.alert("Curso não encontrado")
                }
            }
        })
    } else {
        window.alert("Campo ID vazio.")
    }  
}

function buscarIdTurma2(){

    var testeId = $('#idTurma').val();

    if (testeId != "") {
        jQuery.ajax({
            type: 'POST',
            url: '../../Conexao/Turma/buscarIdTurma.php',
            datatype: 'json',
            data: {idTurma: $('#idTurma').val()},
            success: function (result, textstatus) {

                let resultado = JSON.parse(result);
                console.log(resultado);
                if (resultado) {

                    $('#turno').val(resultado.turno);
                    $('#curso').val(resultado.nomeCurso);
                    $('#nivel').val(resultado.nivelCurso);

                } else if(!resultado) {
                    window.alert("Curso não encontrado")
                }
            }
        })
    } else {
        window.alert("Campo ID vazio.")
    }  
}

function editarTurma() {
   
    var testeTurma = $('#idTurma').val();
    var testeIdCurso = $('#idCurso').val();
    var testeTurno =$('#turno').val();
    var testeCurso =$('#curso').val();
    var testeNivel = $('#nivel').val();
    var testeNome = $('#instituicao').val();
    var testeCep = $('#cep').val();
    var testeUf = $('#uf').val();
    var testeCidade = $('#cidade').val();
    var testeLogradouro = $('#logradouro').val();
    var testeBairro = $('#bairro').val();
    var testeNum = $('#numInst').val();

    if (testeTurma != "" && testeIdCurso != "" && testeTurno != "" && testeCurso != "" && testeNivel != "" && testeNome != "" && testeCep != "" && testeUf != "" && testeCidade != "" && testeBairro != "" && testeLogradouro != "" && testeNum != ""){
        jQuery.ajax({
            type: 'POST',
            url: '../../Conexao/Turma/editarTurma.php',
            datatype: 'json',
            data: {idTurma: $('#idTurma').val(), idCurso: $('#idCurso').val(), turno: $('#turno').val()},
            
            success: function (result, textstatus) {

                resultParciado = JSON.parse(result);
            
                if (resultParciado) {
                    window.alert("Cadastro editado com sucesso!")
                    window.location.href= "../menuADM.html";
                } else if (!resultParciado == false) {
                    window.alert('Falha ao conectar ao banco!/nContacte um Administrador');
                }
            }
        })

    } else if(testeTurma == "" || testeTurno == "" || testeIdCurso == "") {
        window.alert("Falha na operação, campos ainda vazios.");

    } else if(testeCurso == "" || testeNivel == "" || testeNome == "" || testeCep == "" || testeUf == "" || testeCidade == "" || testeBairro == "" || testeLogradouro == "" || testeNum == "") {
        window.alert("Validação de CEP necessário!");
    }
}

/*
Editar Professor
*/

function buscarIdProfessor(){

    var testeMatricula = $('#matricula').val();

    if (testeMatricula != "") {
        jQuery.ajax({
            type: 'POST',
            url: '../../Conexao/Professor/buscarProfessor.php',
            datatype: 'json',
            data: {matricula: $('#matricula').val()},
            success: function (result, textstatus) {

                let resultado = JSON.parse(result);

                if (resultado) {
                    $('#turno').val(resultado.turno);
                    $('#nome').val(resultado.nomeProf);
                    $('#curso').val(resultado.nomeCurso);
                    $('#nascimento').val(resultado.nascProf);
                    $('#telefone').val(resultado.telProf);
                    $('#celular').val(resultado.celProf);
                    $('#cpf').val(resultado.cpfProf);
                    $('#cep').val(resultado.cepProf);
                    $('#uf').val(resultado.ufProf);
                    $('#cidade').val(resultado.cidadeProf);
                    $('#logradouro').val(resultado.logradouroProf);
                    $('#bairro').val(resultado.bairroProf);
                    $('#numero').val(resultado.numProf);
                    $('#formacao').val(resultado.formacaoProf);
                    $('#nivelProf').val(resultado.nivelProf);
                    $('#nomeInst').val(resultado.instituicaoProf);
                    $('#idTurma').val(resultado.idTurma);
                    $('#login').val(resultado.loginProf);
                    $('#senha').val(resultado.senhaProf);

                } else if(!resultado) {
                    window.alert("Professor não encontrado")
                }
            }
        })
    } else {
        window.alert("Campo ID vazio.")
    }  

}

function editarProfessor(){
    var testeMatricula = $('#matricula').val();
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
    if (testeMatricula != "" && testeNome != '' && testeNascimento != '' && testeCpf != '' && testeCep != '' && testeUf != '' && testeCidade != '' && testeBairro != '' && testeLogradouro != '' && testeNumProf != '' && testeFormacao != '' && testeNivel != '' && testeInstituicao != '' && testeTurma != '' && testeCurso != '' && testeTurno != '' && testeLogin != '' && testeSenha != '') {

        //verifica se não possui pessoa com mesmo CPF
        jQuery.ajax({
            type: 'POST',
            url: '../../Conexao/Professor/contarEditCpfProfessor.php',
            datatype: 'json',
            data: {matricula: $('#matricula').val(), cpf: $('#cpf').val()},
    
            success: function (result, textstatus) {
                resultParciado = JSON.parse(result);
    
                if(resultParciado.total == 0) {

                    jQuery.ajax({
                        type: 'POST',
                        url: '../../Conexao/Professor/contarEditEmailProfessor.php',
                        datatype: 'json',
                        data: {matricula: $('#matricula').val(), login: $('#login').val()},
                
                        success: function (result, textstatus) {

                            let resultParciado = JSON.parse(result);

                            if(resultParciado.total == 0) {

                                var testeTelefone = $('#telefone').val();
                                var testeCelular = $('#celular').val();
                                if(testeTelefone != "" && testeCelular != "") {

                                    jQuery.ajax({
                                        type: 'POST',
                                        url: '../../Conexao/Professor/editarProfessor.php',
                                        datatype: 'json',
                                        data: {matricula: $('#matricula').val(), nome: $('#nome').val(), cpf: $('#cpf').val(), nascimento: $('#nascimento').val(), telefone: $('#telefone').val(), celular: $('#celular').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), numero: $('#numero').val(), formacao: $('#formacao').val(), nivel: $('#nivelProf').val(), nomeInst: $('#nomeInst').val(), idTurma: $('#idTurma').val(), login: $('#login').val(), senha: $('#senha').val()},
                                
                                        success: function (result, textstatus) {
                                            
                                            console.log(result);
                                            let resultParciado = JSON.parse(result);
                                            console.log(resultParciado.status);

                                            if(resultParciado.status) {
                                                window.alert("Cadastro realizado com sucesso!")
                                                // location.href= "../menuADM.html";
                                            } else if(!resultParciado.status) {
                                                window.alert('Falha ao registrar no banco!/nSe o erro persistir, informe um administrador.');
                                            } 
                                        }
                                    })

                                } else if(testeTelefone == "" && testeCelular == ""){

                                    jQuery.ajax({
                                        type: 'POST',
                                        url: '../../Conexao/Professor/editarProfessor1.php',
                                        datatype: 'json',
                                        data: {matricula: $('#matricula').val(), nome: $('#nome').val(), cpf: $('#cpf').val(), nascimento: $('#nascimento').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), numero: $('#numero').val(), formacao: $('#formacao').val(), nivel: $('#nivelProf').val(), nomeInst: $('#nomeInst').val(), idTurma: $('#idTurma').val(), login: $('#login').val(), senha: $('#senha').val()},
                                
                                        success: function (result, textstatus) {

                                            resultParciado = JSON.parse(result);
                                
                                            if(resultParciado.status) {
                                                window.alert("Cadastro realizado com sucesso!")
                                                // location.href= "../menuADM.html";
                                            } else if(!resultParciado.status) {
                                                window.alert('Falha ao registrar no banco!/nSe o erro persistir, informe um administrador.');
                                            } 
                                        }
                                    })

                                } else if(testeTelefone == "" && testeCelular != "") {

                                    jQuery.ajax({
                                        type: 'POST',
                                        url: '../../Conexao/Professor/editarProfessor2.php',
                                        datatype: 'json',
                                        data: {matricula: $('#matricula').val(), nome: $('#nome').val(), cpf: $('#cpf').val(), nascimento: $('#nascimento').val(), celular: $('#celular').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), numero: $('#numero').val(), formacao: $('#formacao').val(), nivel: $('#nivelProf').val(), nomeInst: $('#nomeInst').val(), idTurma: $('#idTurma').val(), login: $('#login').val(), senha: $('#senha').val()},
                                
                                        success: function (result, textstatus) {

                                            resultParciado = JSON.parse(result);
                                
                                            if(resultParciado.status) {
                                                window.alert("Cadastro realizado com sucesso!")
                                                // location.href= "../menuADM.html";
                                            } else if(!resultParciado.status) {
                                                window.alert('Falha ao registrar no banco!/nSe o erro persistir, informe um administrador.');
                                            } 
                                        }
                                    })
                                    
                                } else if(testeTelefone != "" && testeCelular == "") {

                                    jQuery.ajax({
                                        type: 'POST',
                                        url: '../../Conexao/Professor/editarProfessor3.php',
                                        datatype: 'json',
                                        data: {matricula: $('#matricula').val(), nome: $('#nome').val(), cpf: $('#cpf').val(), nascimento: $('#nascimento').val(), telefone: $('#telefone').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), numero: $('#numero').val(), formacao: $('#formacao').val(), nivel: $('#nivelProf').val(), nomeInst: $('#nomeInst').val(), idTurma: $('#idTurma').val(), login: $('#login').val(), senha: $('#senha').val()},
                                
                                        success: function (result, textstatus) {

                                            resultParciado = JSON.parse(result);
                                            if(resultParciado.status) {
                                                window.alert("Cadastro realizado com sucesso!")
                                                // location.href= "../menuADM.html";
                                            } else if(!resultParciado.status) {
                                                window.alert('Falha ao registrar no banco!/nSe o erro persistir, informe um administrador.');
                                            } 
                                        }
                                    })

                                }        
                            
                            }else if(resultParciado.total != 0) {
                                window.alert('E-mail já registrado.');
                            } 
                        }
                    })

                } else if (resultParciado.total != 0){
                    window.alert('CPF já registrado.');
                } 
            },
        });

    } else if(testeMatricula != "" && testeNome == "" || testeNascimento == "" || testeCpf == "" || testeCep == "" || testeNumProf == "" || testeFormacao == "" || testeNivel == "" || testeInstituicao == "" || testeTurma == "" || testeLogin == "" || testeSenha == "") {
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
Editar Aluno
*/
