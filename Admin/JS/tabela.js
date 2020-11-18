$(document).ready( function (e) {
    $('.abrirListaInst').click(function(){
        $('#editarInstModal').fadeIn(500);
    })
    $('.fechar').click(function(){
        $('#editarInstModal').fadeOut(500)
    })
})