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

                console.log(resultado);
                if (resultado) {
                    $('#nomeInst').val(resultado.nomeInst);
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
    var testeCnpj = $('cnpj').val();
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
            data: {},
        
            success: function (result, textstatus) {
                    
                console.log(result);
                let resultado = JSON.parse(result);
                //Se resultado for == 0 no select, não ha isntituição igual, então pode registar essa.
                if (resultado.total == 0 || resultado.total == 1) {

                    jQuery.ajax({
                        type: 'POST',
                        url: '../../Conexao/Instituicao/editarInstituicao.php',
                        datatype: 'json',
                        data: {nomeInst: $('#nomeInst').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), numInst: $('#numInst').val(), idInst: $('#idInst').val()},
                        
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

                } else if (resultado.total > 1) {
                    //Caso tenha uma ou mais com mesmas informações, deverá ocorrer erro ao registrar.
                    window.alert("Instituição já existente");
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
                    $('#nomeInst').val(resultado.nomeInst);
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
    var testeId = $('#idInst').val();
    var testeNome = $('#nomeInst').val();
    var testeCep = $('#cep').val();
    var testeUf = $('#uf').val();
    var testeCidade = $('#cidade').val();
    var testeBairro = $('#bairro').val();
    var testeLogradouro = $('#logradouro').val();
    var testeNum = $('#numInst').val();

    if (testeId != "" && testeNome != "" && testeCep != "" && testeUf != "" && testeCidade != "" && testeBairro != "" && testeLogradouro != "" && testeNum != ""){
        jQuery.ajax({
            type: 'POST',
            url: '../../Conexao/Instituicao/editarInstituicao.php',
            datatype: 'json',
            data: {nomeInst: $('#nomeInst').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), numInst: $('#numInst').val(), idInst: $('#idInst').val()},
            
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
    } else if(testeId == "" || testeNome == "" || testeCep == "" || testeNum == "") {
        window.alert("Falha na operação, campos ainda vazios.");

    } else if(testeUf == "" || testeCidade == "" || testeBairro == "" || testeLogradouro == "") {
        window.alert("Validação de CEP necessário!");
    }
}


/*
Editar Turma
*/
function buscarIdTurma(){

    var testeId = $('#idTurma').val();
    console.log(testeId);
    if (testeId != "") {
        jQuery.ajax({
            type: 'POST',
            url: '../../Conexao/Turma/buscarIdTurma.php',
            datatype: 'json',
            data: {idTurma: $('#idTurma').val()},
            success: function (result, textstatus) {
                console.log(result)
                let resultado = JSON.parse(result);

                if (resultado) {
                    console.log(resultado);
                    $('#turno').val(resultado.turno);
                    $('#idCurso').val(resultado.idCurso);
                    $('#curso').val(resultado.nomeCurso);
                    $('#nivel').val(resultado.nivelCurso);
                    $('#nomeInst').val(resultado.nomeInst);
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

function editarTurma() {
   
    var testeTurma = $('#idTurma').val();
    var testeIdCurso = $('#idCurso').val();
    var testeTurno =$('#turno').val();
    var testeCurso =$('#curso').val();
    var testeNivel = $('#nivel').val();
    var testeNome = $('#nomeInst').val();
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

                console.log(result);
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