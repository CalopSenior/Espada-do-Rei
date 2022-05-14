//variaveis globais
let character_atr = [
    forca = 8,
    forca_bonus = 0,
    destreza = 8,
    destreza_bonus = 0,
    constituicao = 8,
    constituicao_bonus = 0,
    inteligencia = 8,
    inteligencia_bonus = 0,
    sabedoria = 8,
    sabedoria_bonus = 0,
    carisma = 8,
    carisma_bonus = 0,
    pontos_atr = 27
];
let proficiencia_per_nivel = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6];

let nivel = 1;
let xp = 0;
let max_hp = 0;
let hp = 0;
let ca = 8;
let pp = 10;
let proficiencia = 2;
let dado_de_vida = 0;
let armored = false;
let armoring = "";

//definir valores de variaveis
setInterval(()=>{
    forca_bonus = Math.floor((forca-10) / 2);
    destreza_bonus = Math.floor((destreza-10) / 2);
    constituicao_bonus = Math.floor((constituicao-10) / 2);
    inteligencia_bonus = Math.floor((inteligencia-10) / 2);
    sabedoria_bonus = Math.floor((sabedoria-10) / 2);
    carisma_bonus = Math.floor((carisma-10) / 2);
},1)
setInterval(()=>{
    armor_equiped = document.getElementById('armor').value;
    if(armor_equiped != "0"){
        armored = true;
        armoring = armors[armor_equiped];
    }
    else{
        armored = false;
    };
    dado_de_vida = dados_de_vida[classes.indexOf(character_class)];
    max_hp = dado_de_vida + constituicao_bonus;
    if(armored == false){
        ca_bonus = Math.ceil(proficiencia + destreza_bonus / (nivel / 2 + 2));
        ca = 8 + ca_bonus;
    }
    else if(armored == true){
        armor_bonus = parseInt(armor_equiped);
        ca_bonus = Math.ceil((armor_bonus * proficiencia + destreza_bonus) / (proficiencia + 2));
        ca = 8 + ca_bonus;
    }
    if(document.getElementById('shield').checked == true){
        ca += 2;
    }
    pp = 8 + proficiencia + sabedoria_bonus;
    proficiencia = proficiencia_per_nivel[nivel-1];
},1);
setInterval(()=>{
    if(xp == xp_nivel[nivel]){
        nivel++
    };
},1);

//functions
function atributeValueUpdate(type,atr){
    if(type == "+" && pontos_atr > 0){
        if(atr == "for"){
            forca++;
            pontos_atr--;
            if(forca > 20){
                atributeValueUpdate("-","for");
            }
        }
        else if(atr == "des"){
            destreza++;
            pontos_atr--;
            if(destreza > 20){
                atributeValueUpdate("-","des");
            }
        }
        else if(atr == "cons"){
            constituicao++;
            pontos_atr--;
            if(constituicao > 20){
                atributeValueUpdate("-","cons");
            }
        }
        else if(atr == "int"){
            inteligencia++;
            pontos_atr--;
            if(inteligencia > 20){
                atributeValueUpdate("-","inte");
            }
        }
        else if(atr == "sab"){
            sabedoria++;
            pontos_atr--;
            if(sabedoria > 20){
                atributeValueUpdate("-","sab");
            }
        }
        else if(atr == "car"){
            carisma++;
            pontos_atr--;
            if(carisma > 20){
                atributeValueUpdate("-","car");
            }
        }
    };
    if(type == "-" && pontos_atr < 75){
        if(atr == "for"){
            forca--;
            pontos_atr++;
            if(forca < 0){
                atributeValueUpdate("+","for");
            }
        }
        else if(atr == "des"){
            destreza--;
            pontos_atr++;
            if(destreza < 0){
                atributeValueUpdate("+","des");
            }
        }
        else if(atr == "cons"){
            constituicao--;
            pontos_atr++;
            if(constituicao < 0){
                atributeValueUpdate("+","cons");
            }
        }
        else if(atr == "int"){
            inteligencia--;
            pontos_atr++;
            if(inteligencia < 0){
                atributeValueUpdate("+","int");
            }
        }
        else if(atr == "sab"){
            sabedoria--;
            pontos_atr++;
            if(sabedoria < 0){
                atributeValueUpdate("+","sab");
            }
        }
        else if(atr == "car"){
            carisma--;
            pontos_atr++;
            if(carisma < 0){
                atributeValueUpdate("+","car");
            }
        }
    };
};

function sortATR(type){
    atributos = ['for','des','cons','int','sab','car'];
    if(type == "sort"){
        for(i=0; pontos_atr!=0; i++){
            atributo = atributos[Math.floor(Math.random() * atributos.length)];
            atributeValueUpdate("+",atributo);    
        };
    };
    if(type == "reset"){
        for(i=0; pontos_atr!=27; i++){
            forca = 8;
            destreza = 8;
            constituicao = 8;
            inteligencia = 8;
            sabedoria = 8;
            carisma = 8;
            pontos_atr = 27;
        };
    };
    if(type == "zerar"){
        forca = 0;
        destreza = 0;
        constituicao = 0;
        inteligencia = 0;
        sabedoria = 0;
        carisma = 0;
        pontos_atr = 75;
    };
    if(type == "all+"){
        for(i=0; i<atributos.length; i++){
            atributo = atributos[i];
            atributeValueUpdate("+",atributo);
        };
    };
    if(type == "all-"){
        for(i=0; i<atributos.length; i++){
            atributo = atributos[i];
            atributeValueUpdate("-",atributo);
        };
    };
};