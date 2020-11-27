function iniciarChamda(){
    var data = new Date();
    console.log(data);
    jQuery.ajax({
        type: 'POST',
        url: '../Conexao/Chamada/insertChamada.php',
        datatype: 'json',
        data: {idTurma: $("#turmaProf").val(), data: data=new Date()},
        success: function (result, textstatus) {

            let resultado = JSON.parse(result);
            console.log(resultado);
            if (resultado) {
                $('#idProf').val(resultado.idProf);
                $('#nomeProf').val(resultado.nomeProf);
                $('#nomeCurso').val(resultado.nomeCurso);
                $('#turmaProf').val(resultado.idTurma);
                $('#turno').val(resultado.turno);

            } else if(!resultado) {
                window.alert("Professor não encontrado")
                window.location.href="../index.php";
            }
        }
    })
}