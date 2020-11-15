/*
Editar Insitiuicao
*/
function buscarIdInstituicao(){
    
    var testeId = $('#idInst').val();

    if (testeId != "") {
        jQuery.ajax({
            type: 'POST',
            url: '../Conexao/Instituicao/buscarIdInstituicao.php',
            datatype: 'json',
            data: {idInst: $('#idInst').val()},
            
            success: function (result, textstatus) {

                let resultado = JSON.parse(result);

                console.log(resultado);

                $('#nomeInst').val(resultado.nomeInst);
                $('#cep').val(resultado.cepInst);
                $('#uf').val(resultado.ufInst);
                $('#cidade').val(resultado.cidadeInst);
                $('#bairro').val(resultado.bairroInst);
                $('#logradouro').val(resultado.logradouroInst);
                $('#numInst').val(resultado.numInst);
            }
        })
    } else {
        window.alert("ID inválida!");
    }
}

function editarInstituicao() {
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
            url: '../Conexao/Instituicao/editarInstituicao.php',
            datatype: 'json',
            data: {nomeInst: $('#nomeInst').val(), cep: $('#cep').val(), uf: $('#uf').val(), cidade: $('#cidade').val(), bairro: $('#bairro').val(), logradouro: $('#logradouro').val(), numInst: $('#numInst').val(), idInst: $('#idInst').val()},
            
            success: function (result, textstatus) {
                console.log(result);
                resultado = JSON.parse(result);
                console.log(resultado);


            }
        })

    } else if(testeId == "" || testeNome == "" || testeCep == "" || testeNum == "") {
        window.alert("Falha na operação, campos ainda vazios.");

    } else if(testeUf == "" || testeCidade == "" || testeBairro == "" || testeLogradouro == "") {
        window.alert("Validação de CEP necessário!");
    }
}
/*
Editar Curso
*/

function buscarIdCurso(){
    jQuery.ajax({
        type: 'POST',
        url: '../Conexao/Curso/buscarIdCurso.php',
        datatype: 'json',
        data: {id: $('#id').val()},
        success: function (result, textstatus) {
            let resultado = JSON.parse(result);

            $('#curso').val(resultado.nomeCurso);
            $('#nivel').val(resultado.nivelCurso);
            $('#idInst').val(resultado.idInst);
            $('#instituicao').val(resultado.nomeInst);
        }
        
    });
}


function salvarEditarCurso() {

}
