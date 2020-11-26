function atribuirNota() {
    var turmaProf = $('#turmaProf').val();
    var matricula = $('#matricula').val();
    var idAtividade = $('#idAtividade').val();
    var turma = $('#turma').val();
    var atividade = $('#nomeAtividade').val();
    var nota = $('#nota').val();
   
    console.log($('#turma').val());
    console.log($('#idAtividade').val());
    console.log($('#matricula').val());
    console.log( $('#nota').val());

    if (turmaProf != "" && matricula != "" && turma != "" && atividade != "" && idAtividade != "" && nota != "") {

        if (turma == turmaProf){
            jQuery.ajax({
                type: 'POST',
                url: '../Conexao/Atividade/atribuirNota.php',
                datatype: 'json',
                data: {turma: $('#turma').val(),idAluno: $('#matricula').val(),idAtividade: $('#idAtividade').val(),turmaProf: $('#turmaProf').val(), nota: $('#nota').val()},
                success: function (result, textstatus) {
                    window.alert("Nota atribuída como sucesso!");
                    window.location.href="atividade.php";     
                }, error: function(){
                    window.alert("Falha no registro, se o problema persistir, chame um administrador.")
                }
            })
        } else {
            window.alert("Turmas diferentes, impossível atribuir")
        }
       
    } else if(matricula == "") {
        window.alert("Matrícula de aluno necessária");
    } else if(turma == "") {
        window.alert("Validação de aluno necessário");
    } else if(atividade == "" || idAtividade == "") {
        window.alert("Validação de atividade necessário");
    } else if(nota == "") {
        window.alert('Campo "Nota" necessário!')
    }
}