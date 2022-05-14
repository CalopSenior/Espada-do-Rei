//variáveis globais
let character_nome = "";
let character_genre = "";
let character_class = "";
let character_race = "";
let character_good = "";
let character_bad = "";
let character_mot = "";
let character_phrase = "";

//definir variáveis
var verificar = setInterval(()=>{
    character_nome = document.getElementById('character_name').value;
    character_genre = document.getElementById('character_genre').value;
    character_class = document.getElementById('character_class').value;
    character_race = document.getElementById('character_race').value;
    character_good = document.getElementById('character_good').value;
    character_bad = document.getElementById('character_bad').value;
    character_mot = document.getElementById('character_mot').value;
    character_phrase = document.getElementById('character_phrase').value;
},1);
var dietaSet = setInterval(()=>{
    dietSelect = parseInt(document.getElementById('character_diet').value);
    document.getElementById('diet_view').textContent = dietas[dietSelect];
},1)
setInterval(()=>{
    document.getElementById('character_name').value = character_nome;
    document.getElementById('character_genre').value = character_genre;
    document.getElementById('pontos_atr').textContent = pontos_atr;
    document.getElementById('for').value = forca + " (" + forca_bonus + ")";
    document.getElementById('des').value = destreza + " (" + destreza_bonus + ")";
    document.getElementById('cons').value = constituicao + " (" + constituicao_bonus + ")";
    document.getElementById('int').value = inteligencia + " (" + inteligencia_bonus + ")";
    document.getElementById('sab').value = sabedoria + " (" + sabedoria_bonus + ")";
    document.getElementById('car').value = carisma + " (" + carisma_bonus + ")";
    document.getElementById('level').textContent = "nv." + nivel + " - " + xp + "/" + xp_nivel[nivel] + " xp";
    document.getElementById('hp').value = hp + "/" + max_hp;
    document.getElementById('ca').value = ca;
    document.getElementById('pp').value = pp;
    document.getElementById('bonus').value = proficiencia;
    document.getElementById('ca_bonus').textContent = ca_bonus;
},1)

//functions
function start(){
    confirmation = confirm('Uma vez que sejam salvas as informações, elas não podem mais serem mudadas esta run. Deseja salvar os dados?');
    if(confirmation == true){
        clearInterval(verificar);
        clearInterval(dietaSet);
        if(character_genre == 'Homem'){
            alert(character_nome + ', o ' + character_class + ' ' + character_race + ', foi salvo como seu personagem.')
        }
        else{
            alert(character_nome + ', a ' + character_class + ' ' + character_race + ', foi salvo como seu personagem.')
        };
        disabling();
    }
    else{
      alert('Os dados não foram salvos, você ainda pode edita-los')
    };
};

function disabling(){
    a = document.getElementById('character_name');
    a.setAttribute('disabled', 'disabled');
    a = document.getElementById('character_genre');
    a.setAttribute('disabled', 'disabled');
    a = document.getElementById('character_race');
    a.setAttribute('disabled', 'disabled');
    a = document.getElementById('character_class');
    a.setAttribute('disabled', 'disabled');
    a = document.getElementById('character_good');
    a.setAttribute('disabled', 'disabled');
    a = document.getElementById('character_bad');
    a.setAttribute('disabled', 'disabled');
    a = document.getElementById('character_mot');
    a.setAttribute('disabled', 'disabled');
    a = document.getElementById('character_phrase');
    a.setAttribute('disabled', 'disabled');
    a = document.getElementById('character_diet');
    a.setAttribute('disabled', 'disabled');
    a.setAttribute('disabled', 'disabled');
    a = document.getElementById('end');
    a.setAttribute('disabled', 'disabled');

    hp = max_hp;
};

function setImage(autoinput){
    if(autoinput == false){
        link = prompt('Insira o link da imagem aqui');
        document.getElementById('ft_character').src = link;
    }
    else{
        
    }
};

//dice functions

setInterval(()=>{
    modifier_send = parseInt(document.getElementById('modifier').value);
    number_of_rolls_send = document.getElementById('repeat').value;
    if(number_of_rolls_send != "d" && number_of_rolls_send != "D" && number_of_rolls_send != "v" && number_of_rolls_send != "V"){
        number_of_rolls_send = parseInt(number_of_rolls_send);
    }
},1);
function rollDice(face,modifier,number_of_rolls,origin){
    if(face == '?'){
        face = parseInt(prompt('Valor do dado personalizado:'));
        origin += face;
    }
    origin += ": ";
    
    if(face && number_of_rolls){
        if(modifier > -1000 && number_of_rolls > 0){
            results = [];
            result = 0;
            format = "";
            for(i = 0; i < number_of_rolls; i++){
                add = Math.ceil(Math.random () * face);
                add_notEdit = add;
                if(add == face){
                    add = "|" + add + "|";
                };
                results.push(add);    
                result += add_notEdit;
                format += " +" + results[i];
            };
            result += modifier;
            text_result = origin + result + " (" + format + " + Mod. " + modifier + " ).";
            document.getElementById('dice_history').textContent += "\n" + text_result + "\n";
        }
        else if(number_of_rolls == "v" || number_of_rolls == "V"){
            origin = "↑d" + face + ": ";
            n_1 = Math.ceil(Math.random () * face);
            n_2 = Math.ceil(Math.random () * face);
            maior = (n_1 > n_2? n_1 : n_2);
            menor = (n_1 < n_2? n_1 : n_2);
            result = maior + modifier;
            if(maior == face){maior = "|"+maior+"|"};
            text_result = origin + result + " ( " + maior + " e " + menor + " )";
            document.getElementById('dice_history').textContent += "\n" + text_result + "\n";
        }
        else if(number_of_rolls == "d" || number_of_rolls == "D"){
            origin = "↓d:" + face + ": ";
            n_1 = Math.ceil(Math.random () * face);
            n_2 = Math.ceil(Math.random () * face);
            maior = (n_1 > n_2? n_1 : n_2);
            menor = (n_1 < n_2? n_1 : n_2);
            result = menor + modifier;
            if(maior == face){maior = "|"+maior+"|"};
            text_result = origin + result + " ( " + maior + " e " + menor + " )";
            document.getElementById('dice_history').textContent += "\n" + text_result + "\n";
        }
        else{
            alert('Se não houver modificadores ponha 0, se quiser rolar um dado ponha 1 no "Número de Rolagens".')
            console.warn(face, modifier, number_of_rolls, origin, "nível 2")
        }
    }
    else{
        alert('Se não houver modificadores ponha 0, se quiser rolar um dado ponha 1 no "Número de Rolagens".')
        console.warn(face, modifier, number_of_rolls, origin, "nível 1")
    }
};