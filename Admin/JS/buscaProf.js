$(document).ready(function(){
    var testeMatricula = $('#matricula').val();

    if (testeMatricula != "") {
        jQuery.ajax({
            type: 'POST',
            url: '../Conexao/Professor/buscarProfessor.php',
            datatype: 'json',
            data: {},
            success: function (result, textstatus) {

                let resultado = JSON.parse(result);
                
                if (resultado) {
                    $('#idProf').val(resultado.idProf);
                    $('#turno').val(resultado.turno);
                    $('#nomeProf').val(resultado.nomeProf);
                    $('#nomeCurso').val(resultado.nomeCurso);
                    $('#turma').val(resultado.idTurma);

                } else if(!resultado) {
                    window.alert("Professor não encontrado")
                }
            }
        })
    } else {
        window.alert("Campo ID vazio.")
    }  
});