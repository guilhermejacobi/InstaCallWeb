
function loginADM() {

    var testeEmail = $('#loginMenu').val();
    var testeSenha = $('#senhaMenu').val();

    if (testeEmail != "" && testeSenha != "") {

        jQuery.ajax({
            type: 'POST',
            url: './Conexao/Login/loginAdm.php',
            datatype: 'json',
            data: {loginMenu: $('#loginMenu').val(), senhaMenu: $('#senhaMenu').val()},
    
            success: function (result, textstatus) {
                
                let resultParciado = JSON.parse(result);

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
                
                            if (resultParciado.total == 1) {
                                //PROFESSOR LOGOU
                                jQuery.ajax({
                                    type: 'POST',
                                    url: './QuantidadeAcesso/fezLogin.php',
                                    datatype: 'json',
                                    data: {add: true, tipo: "Professor"},
                            
                                    success: function (result, textstatus) {
                                        
                                        console.log(result)
                                        
                                    }
                                })

                                window.location.href= "Professor/menu.html";
                            } else {
                                jQuery.ajax({
                                    type: 'POST',
                                    url: './Conexao/Login/loginEstudante.php',
                                    datatype: 'json',
                                    data: {loginMenu: $('#loginMenu').val(), senhaMenu: $('#senhaMenu').val()},
                            
                                    success: function (result, textstatus) {
                                        
                                        let resultParciado = JSON.parse(result);
                            
                                        if (resultParciado.total == 1) {
                                            //ALUNO LOGOU
                                            jQuery.ajax({
                                                type: 'POST',
                                                url: './QuantidadeAcesso/fezLogin.php',
                                                datatype: 'json',
                                                data: {add: true, tipo: "Aluno"},
                                        
                                                success: function (result, textstatus) {
                                                    
                                                    console.log(result)
                                                    
                                                }
                                            })
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