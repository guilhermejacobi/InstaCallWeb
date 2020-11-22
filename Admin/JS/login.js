function login(){
   loginADM();
}

function loginADM() {

    var testeEmail = $('#loginMenu').val();
    var testeSenha = $('senhaMenu').val();

    if (testeEmail != "" && testeSenha != "") {

        jQuery.ajax({
            type: 'POST',
            url: './Conexao/Login/loginAdm.php',
            datatype: 'json',
            data: {loginMenu: $('#loginMenu').val(), senhaMenu: $('#senhaMenu').val()},
    
            success: function (result, textstatus) {
                
                let resultParciado = JSON.parse(result);
                console.log(resultParciado.total + " TESTE ADM");
    
                if (resultParciado.total == 1) {
                    window.location.href= "Admin/menuADM.html";
                } else if(resultParciado.total != 1){
                    jQuery.ajax({
                        type: 'POST',
                        url: './Conexao/Login/loginProf.php',
                        datatype: 'json',
                        data: {loginMenu: $('#loginMenu').val(), senhaMenu: $('#senhaMenu').val()},
                
                        success: function (result, textstatus) {
                            
                            let resultParciado = JSON.parse(result);
                            console.log(resultParciado.total + " Teste Prof");
                
                            if (resultParciado.total == 1) {
                                window.location.href= "Professor/menu.html";
                            } else {
                                jQuery.ajax({
                                    type: 'POST',
                                    url: './Conexao/Login/loginEstudante.php',
                                    datatype: 'json',
                                    data: {loginMenu: $('#loginMenu').val(), senhaMenu: $('#senhaMenu').val()},
                            
                                    success: function (result, textstatus) {
                                        
                                        console.log(result)
                                        let resultParciado = JSON.parse(result);
                                        console.log(resultParciado.total + " Teste Estudante");
                            
                                        if (resultParciado.total == 1) {
                                            window.location.href= "Estudante/menu.html";
                                        } else {
                                            window.alert("Falha ao entrar\nLogin ou senha inválidos")
                                        }
                                    }
                                })
                            }
                        }
                    })
                }
            }
        })
    } else if(testeEmail == "" || testeSenha == "") {
        window.alert("Campos vazios.");
    }
 }