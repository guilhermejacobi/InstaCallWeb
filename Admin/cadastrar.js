function cadastrarInstituicao() {
    var nomeInst = document.getElementById("criarNomeInst").value;
    var cepInst = document.getElementById("cep").value;
    var ufInst = document.getElementById("uf").value;
    var cidadeInst = document.getElementById("cidade").value;
    var bairroInst = document.getElementById("bairro").value;
    var ruaInst = document.getElementById("logradouro").value;
    var numInst =document.getElementById("criarNumInst").value;

    var request = new XMLHttpRequest();
  
    var url = "http://localhost/InstaCallWeb/Cadastros/cadastrarInstituicao.php";
    console.log(nomeInst);
    console.log(cepInst);
    console.log(ufInst);
    console.log(cidadeInst);
    console.log(bairroInst);
    console.log(ruaInst);
    console.log(numInst);

    <?php
    ?>

    request.open("POST",url,true);

    let form = new FormData();
    form.append('nomeInst' , nomeInst);
    form.append('cepInst' , cepInst);
    form.append('ufInst' , ufInst);
    form.append('cidadeInst' , cidadeInst);
    form.append('bairroInst' , bairroInst);
    form.append('ruaInst' , ruaInst);
    form.append('numInst' , numInst);


    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
        console.log(this.responseText)
        //let response = JSON.parse(this.responseText);
        //_element.parentNode.deleteRow(_element.rowIndex);
        }
    };

    request.send(form);
}

function cadastrarCurso(){
    var idInst = document.getElementById("idInst").value;
    var nomeCurso = document.getElementById("nomeCurso").value;
    var selectNivel = document.getElementById("selectNivel").value;
    
    var request = new XMLHttpRequest();
  
    var url = "http://localhost/InstaCallWeb/Cadastros/cadastrarCurso.php";
    console.log(idInst);
    console.log(nomeCurso);
    console.log(selectNivel);
   
    request.open("POST",url,true);

    let form = new FormData();
    form.append('idInst' , idInst);
    form.append('curso' , nomeCurso);
    form.append('nivel' , selectNivel);
   
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
        console.log(this.responseText)
        //let response = JSON.parse(this.responseText);
        //_element.parentNode.deleteRow(_element.rowIndex);
        }
    };

    request.send(form);
}