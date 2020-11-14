$(document).ready( function (e) {
    $('.botoesMenu').click(function(){
        $('#chamadaModal').fadeIn(500);
    });

    $('.fechar').click(function(){
        $('#chamadaModal').fadeOut(500)
    })
})