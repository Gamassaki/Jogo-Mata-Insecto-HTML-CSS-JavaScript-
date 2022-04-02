var altura = 0;
var largura = 0;

function areaDeJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
}
areaDeJogo();
var mata = 0;
var direcao = 0;
var imgAlt =0;
var tamanho = 0;
var escala =0;
var vida =0;
var tempo = 30;
var criar = 0;

var nivel = window.location.search

if(nivel == '?normal'){
    criar = 500;
}
if(nivel == '?insectesida'){
    criar = 350;
}
if(nivel == '?dificil'){
    criar = 220;
}
if(nivel == '?casa_assombrada'){
    criar = 150;
}


function cono(){
    clearInterval(conometro);
    var conometro = setInterval(function(){
        document.getElementById("cronometro1").innerHTML = tempo;
        tempo--;
        if(tempo < 0){
            window.location.href = "vitoria.html";
        }
    }, 1000);
    
}
function insectoAleatorio(){
    clearInterval(deslocamento);
    var y = Math.floor(Math.random()*altura)-250;
    var x = Math.floor(Math.random()*largura)-250;
    var i=0;

    x= x < 0 ? 0 : x;
    y = y < 0 ? 0 :y;

    if(i == 0 || i== 3 || i== 3){
        x= x < 0 ? 200 : x;
    }
    if(i == 0 || i== 1 || i== 6){
        y = y < 0 ? 200 :y;
    }

    if(document.getElementById("isec")){
        document.getElementById("isec").remove();
        vida ++;
        document.getElementById("v"+vida).src = "img/coracao_vazio.png";
        if(vida > 2){
            window.location.href = "derrota.html";
        }
    }

    var insecto = document.createElement("img");
    insecto.src = "img/i"+imgAlt+".png";
    insecto.className = "insecto" + tamanho + " escala" +escala;
    insecto.style.position = "absolute";
    insecto.id = "isec";
    insecto.onclick = function(){
        clearInterval(deslocamento);
        clearTimeout(matar);

        insecto.src = "img/m"+mata+".png";
        insecto.className = "insecto";

        var matar = setTimeout(function(){
            insecto.remove();
            mata = Math.floor(Math.random()*4);
            direcao = Math.floor(Math.random()*8);
            imgAlt = Math.floor(Math.random()*6);
            tamanho = Math.floor(Math.random()*2);
            escala = Math.floor(Math.random()*2);
            insectoAleatorio();
        },200)
    }
    
    if(direcao==1){
        insecto.style.right = x + "px";
        insecto.style.top = y + "px";
    }
    else if(direcao==2){
        insecto.style.right = x + "px";
        insecto.style.bottom = y + "px";
    }
    else if(direcao==3){
        insecto.style.left = x + "px";
        insecto.style.bottom = y + "px";
    }
    else if(direcao==4){
        insecto.style.right = x + "px";
        insecto.style.top = y + "px";
    }
    else if(direcao==5){
        insecto.style.left = x + "px"; 
        insecto.style.top = y + "px";
    }
    else if(direcao==6){
        insecto.style.top = y + "px"; 
        insecto.style.left = x + "px";
    }
    else if(direcao==7){
        insecto.style.bottom = y + "px"; 
        insecto.style.left = x + "px";
    }
    else{
        insecto.style.left = x + "px";
        insecto.style.top = y + "px";
    }
    
    document.body.appendChild(insecto);
   
    var deslocamento = setInterval(function(){
        i++;
        x +=25;
        y +=25;
        switch(direcao){
            case 0:
                insecto.style.left = x + "px";
                insecto.style.top = y + "px";  
                break;
            case 1:
                insecto.style.right = x + "px";
                insecto.style.top = y + "px";    
                break;
            case 2:
                insecto.style.right = x + "px";
                insecto.style.bottom = y + "px";  
                break;
            case 3:
                insecto.style.left = x + "px";
                insecto.style.bottom = y + "px";  
                break;
            case 4:
                insecto.style.right = x + "px"; 
                break;
            case 5:
                insecto.style.left = x + "px"; 
                break;
            case 6:
                insecto.style.top = y + "px"; 
                break;
            case 7:
                insecto.style.bottom = y + "px"; 
                break;
        }

        if(i==8){
            mata = Math.floor(Math.random()*4);
            direcao = Math.floor(Math.random()*8);
            imgAlt = Math.floor(Math.random()*6);
            tamanho = Math.floor(Math.random()*2);
            escala = Math.floor(Math.random()*2);
            insectoAleatorio();
        }
    }, criar);
        

}

function fundo(){
    var x = Math.floor(Math.random()*6);
    document.getElementById("fundo").className = "fundo" + x;
}