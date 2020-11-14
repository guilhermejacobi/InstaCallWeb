function buscarIdCurso(){
    jQuery.ajax({
        type: 'POST',
        url: '../Conexao/Curso/selectCurso',
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

function buscarIdInstituicao() {
    jQuery.ajax({
        type: 'POST',
        url: '../Cadastros/selectInstituicao.php',
        datatype: 'json',
        data: {id: $('idInst').val()},
        success: function (result, textstatus) {
            let resultado = JSON.parse(result);

            $('#instituicao').val(resultado.nomeInst);

        }
    })
}
function salvarEditarCurso() {

}
