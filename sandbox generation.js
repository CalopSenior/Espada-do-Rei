//variáveis globais


//functions padrão
function basicGenerate(){
    if(character_nome == "" || character_nome == "?"){
        gerarNome();
    };
    if(character_genre == "" || character_genre == "?" && character_nome != "?" && character_nome != ""){
        defineGenre();
    };
    if(character_class == "" || character_class == "?"){
        document.getElementById('character_class').value = classes[Math.floor(Math.random() * classes.length)];
    };
    if(character_race == "" || character_race == "?"){
        document.getElementById('character_race').value = raças[Math.floor(Math.random() * raças.length)];
    };
    setImage(true);
};

function personalityGenerate(){
    if(character_good == "" || character_good == "?"){
        document.getElementById('character_good').value = qualidades[Math.floor(Math.random() * qualidades.length)];
    };
    if(character_bad == "" || character_bad == "?"){
        document.getElementById('character_bad').value = defeitos[Math.floor(Math.random() * defeitos.length)];
    };
    if(character_mot == "" || character_mot == "?"){
        document.getElementById('character_mot').value = motivações[Math.floor(Math.random() * motivações.length)];
    };
    if(character_phrase == "" || character_phrase == "?"){
        document.getElementById('character_phrase').value = frases[Math.floor(Math.random() * frases.length)];
    };
};

//functions auxiliares
function gerarNome(metod){
    const letras_semVogal = ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','z']
    const vogais = ['a','e','i','o','u']
    const letras_R = ['b','c','d','n','t','a','e','i','o','u']
    nome = []
    nomeFinal = ""
      function addLetra(){
        add = letras_semVogal[Math.floor(Math.random() * letras_semVogal.length)]
        if(nome.length <= 1){
          add = add.toUpperCase();
        }
        nome.push(add)
        if(letras_R.indexOf(add) != -1){
          porcentagem = Math.random() * 1
          if(add == "n"){
            porcentagem == porcentagem + 0.12
          }
          if(porcentagem <= 0.13){
            nome.push('r')
          }
        }
        if(nome[nome.length-2] == "e" && add != "y"){
          porcentagem == Math.random() * 1
          if(porcentagem <= 0.10){
            nome.splice(nome.length-1, 1)
            nome.push("y")
          }
        }
      }
      function addVogal(){
        add = vogais[Math.floor(Math.random() * vogais.length)]
        nome.push(add)
        if(vogais.indexOf(add) != -1 ){
          porcentagem = Math.random() * 1
          if(porcentagem <= 0.15 && nome.indexOf(add) >= nome.length-1){
            nome.push(add)
          }
        }
      }
    for(i=0;i<Math.round(Math.random() * 5 + 1);i++){
      addLetra()
      if(nome[i] == "k"){
        nome.push("h")
        addVogal()
      }
      else{addVogal()}
    }
    for(i=0;i<nome.length;i++){
        nomeFinal = nomeFinal + nome[i]
    }

      document.getElementById("character_name").value = nomeFinal;
      defineGenre();
  };

function defineGenre(){
    lastLetter = character_nome[character_nome.length-1];
    pernultimateLetter = character_nome[character_nome.length-2];
    lastSyllable = pernultimateLetter + lastLetter;
    if(lastLetter == 'a' || lastSyllable == 'iz' || lastSyllable == 'le' || lastLetter == 'i' || lastLetter == 'y'){
        document.getElementById('character_genre').value = 'Mulher';
    }
    else{
        document.getElementById('character_genre').value = 'Homem';
    }
};