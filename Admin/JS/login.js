/*
Função para saber qual página irá, usando dados do login, seja ADM/Professor/Aluno
*/
function login(){

    var loginMenu = $('#loginMenu').val();
    var senhaMenu = $('#senhaMenu').val();
    console.log(loginMenu);
    console.log(senhaMenu);

    if (loginMenu != "" && senhaMenu != ""){

        jQuery.ajax({
            type: 'POST',
            url: './Conexao/Login/loginAdm.php',
            datatype: 'json',
            data: {loginMenu: $('#loginMenu').val(), senhaMenu: $('#senhaMenu').val()},
    
            success: function (result, textstatus) {
                
                console.log(result)
                let resultParciado = JSON.parse(result);
                console.log(resultParciado.total);
    
                if (resultParciado.total == 1) {
                    window.location.href= "Admin/menuADM.html";
                } else if (resultParciado.total =! 1) {
                    
                    jQuery.ajax({
                        type: 'POST',
                        url: './Conexao/Login/loginProfessor.php',
                        datatype: 'json',
                        data: {loginMenu: $('#loginMenu').val(), senhaMenu: $('#senhaMenu').val()},
                
                        success: function (result, textstatus) {
                            
                            console.log(result)
                            let resultParciado = JSON.parse(result);
                            console.log(resultParciado.total);
                
                            if (resultParciado.total == 1) {
                                window.location.href= "Professor/menu.html";
                            } else if (resultParciado.total =! 1) {
                                jQuery.ajax({
                                    type: 'POST',
                                    url: './Conexao/Login/loginEstudante.php',
                                    datatype: 'json',
                                    data: {loginMenu: $('#loginMenu').val(), senhaMenu: $('#senhaMenu').val()},
                            
                                    success: function (result, textstatus) {
                                        
                                        console.log(result)
                                        let resultParciado = JSON.parse(result);
                                        console.log(resultParciado.total);
                            
                                        if (resultParciado.total == 1) {
                                            window.location.href= "Estudante/menu.html";
                                        } else if (resultParciado.total =! 1) {
                                            window.alert('Login ou Senha não correspondem.')
                                        }
                                        
                                    }
                                })
                            }
                            
                        }
                    })
                }                
            }
        })

    } else if (loginMenu == "" || senhaMenu == ""){
        window.alert("Login/Senha sem informações Prencha os campos vazios.");
    }
    
    
}