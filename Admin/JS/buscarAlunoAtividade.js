$(document).ready(function(){

    jQuery.ajax({
        type: 'POST',
        url: '../Conexao/Aluno/buscarAluno.php',
        datatype: 'json',
        data: {},
        success: function (result, textstatus) {

            let resultado = JSON.parse(result);
            
            if (resultado) {
                $('#idAluno').val(resultado.idAluno);
                $('#nomeAluno').val(resultado.nomeAluno);
                $('#nomeCurso').val(resultado.nomeCurso);
                $('#turma').val(resultado.idTurma);
                listarAtividades(resultado.idTurma);

            } else if(!resultado) {
                window.alert("Aluno não encontrado");
                window.location.href="../index.php"
            }
        }
    })

});