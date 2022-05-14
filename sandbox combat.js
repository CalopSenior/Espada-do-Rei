//variáveis globais


//functions

function setShield(){
    if(document.getElementById('shield').checked == false){
        document.getElementById('shield').setAttribute('checked','checked');
    }
    else if(document.getElementById('shield').checked == true){
        document.getElementById('shield').removeAttribute('checked','')
    };
};