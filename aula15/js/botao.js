function botao () {
    capturando = document.getElementById('botaos').value;
    
    clean();

    if(capturando == "IA" | capturando == "ia" | capturando == "Ia"){
        var Texto = document.getElementById("IA");
        Texto.style.background = "red";
        Texto.style.color = "white";
    }else if(capturando == "Matemática" | capturando == "Matematica" | capturando == "matematica" | capturando == "MATEMÁTICA" | capturando == "MATEMATICA" ) {
        var Texto = document.getElementById("matematica");
        Texto.style.background = "red";
        Texto.style.color = "white";
    }else if(capturando == "Estrutura de dados" | capturando == "ESTRUTURA DE DADOS" | capturando == "Estrutura" | capturando == "estrutura de dados" ){
        var Texto = document.getElementById("Estrutura");
        Texto.style.background = "red";
        Texto.style.color = "white";
    }else if (capturando == "Framework 2" |capturando == "FRAMEWORK 2" | capturando == "framework" ){
        var Texto = document.getElementById("Framework");
        Texto.style.background = "red";
        Texto.style.color = "white";
    }else if ((capturando == "Empreendedorismo" |capturando == "EMPREENDEDORISMO" | capturando == "empreendedorismo" )){
        var Texto = document.getElementById("Empreendedorismo");
        Texto.style.background = "red";
        Texto.style.color = "white";
    }else{
        alert("Valor digitado não foi encontrado.")
    }
    capturando = document.getElementById('botaos').value;
    
    if(capturando == "IA" | capturando == "ia" | capturando == "Ia"){
        var Texto = document.getElementById("IAs");
        Texto.style.background = "red";
        Texto.style.color = "white";
    }else if(capturando == "Matemática" | capturando == "Matematica" | capturando == "matematica" | capturando == "MATEMÁTICA" | capturando == "MATEMATICA" ) {
        var Texto = document.getElementById("matematicas");
        Texto.style.background = "red";
        Texto.style.color = "white";

    }else if(capturando == "Estrutura de dados" | capturando == "ESTRUTURA DE DADOS" | capturando == "Estrutura" | capturando == "estrutura de dados" ){
        var Texto = document.getElementById("Estruturas");
        Texto.style.background = "red";
        Texto.style.color = "white";

    }else if (capturando == "Framework 2" |capturando == "FRAMEWORK 2" | capturando == "framework" ){
        var Texto = document.getElementById("Frameworks");
        Texto.style.background = "red";
        Texto.style.color = "white";

    }else if ((capturando == "Empreendedorismo" |capturando == "EMPREENDEDORISMO" | capturando == "empreendedorismo" )){
        var Texto = document.getElementById("Empreendedorismos");
        Texto.style.background = "red";
        Texto.style.color = "white";

    }else{
    }

    document.getElementById('botaos').value = "";

}

function clean()
{
  

    var Texto = document.getElementById("IA");
    Texto.style.background = "white";
    Texto.style.color = "black";

    var Texto1 = document.getElementById("matematica");
    Texto1.style.background = "white";
    Texto1.style.color = "black";

    var Texto2 = document.getElementById("Estrutura");
    Texto2.style.background = "white";
    Texto2.style.color = "black";

    var Texto3 = document.getElementById("Framework");
    Texto3.style.background = "white";
    Texto3.style.color = "black";

    var Texto4 = document.getElementById("Empreendedorismo");
    Texto4.style.background = "white";
    Texto4.style.color = "black";


    var Texto5 = document.getElementById("IAs");
    Texto5.style.background = "white";
    Texto5.style.color = "black";

    var Texto6 = document.getElementById("matematicas");
    Texto6.style.background = "white";
    Texto6.style.color = "black";

    var Texto7 = document.getElementById("Estruturas");
    Texto7.style.background = "white";
    Texto7.style.color = "black";

    var Texto8 = document.getElementById("Frameworks");
    Texto8.style.background = "white";
    Texto8.style.color = "black";

    var Texto9 = document.getElementById("Empreendedorismos");
    Texto.style.background = "white";
    Texto.style.color = "black";
    
}