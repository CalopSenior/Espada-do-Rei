const motivações = ['Liberdade','Vingança','Redescobrimento','Conquistar alguém','Se tornar importante','Ser reconhecido por suas habilidade','Entrar para uma guilda','Ser referência no que faz','Viver a vida da maneira mais leve possível','Viver a vida da maneira mais radical possível','Beber até cair','Morrer em batalha','Ser influente','Ser imortal','Se provar digno para sua divindade','Se casar com a filha do rei','Acabar com o mau','Brigar com qualquer um','Defender sua terra natal','Descobrir algo revolucionário','Entender o propósito da vida','Cumprir uma promessa feita a alguém','Encontrar um item roubado de sua família','Se tornar rei','Apagar alguma coisa do seu passado','Quitar suas dívidas de jogo'];
const qualidades = ['Confiabilidade','Criatividade','Tolerância','Amorosidade','Sinceridade','Foco','Extroversão','Disciplina','Flexibilidade','Honestidade','Honra','Gratidão','Humildade','Valentia','Otimismo','Determinação','Pontualidade','Persistênvia','Prudência','Resiliência','Calma','Maturidade','Respeito','Altruísmo','Zelo','Tenacidade','Organização','Bom ouvinte'];
const defeitos = ['Teimosia','Agressividade','Desequilibrado','Procrastinação','Arrogância','Sinismo','Indiferênça','Preconceito','Crueldade','Egoísmo','Mentiroso','Covardia','Malícia','Avareza','Negligência','Irresponsabilidade','Inflexibilidade','Apatia','Atrevimento','Possessivo','Passividade','Inpaciência','Distração','Falso','Irritadiço','Deslealdade','Desonestidade','Preguiça'];
const equip = ['Adaga','Azagaia','Bordão','Foice curta','Lança','Maça','Besta leve','Alabarda','Cimitarra','Espada','Machado de batalha','Rapieira', 'Rede'];
const raças = ['Aarakocra','Aasimar Caído','Aasimar Protetor','Aasimar Flagelo','Duergar','Anão da Montanha','Anão da Colina','Anão Marca da Proteção','Bugbear','Centauro','Dhampir','Draconato Metálico','Draconato Cromático','Draconato','Drow','Elfo de Eladrin','Alto Elfo','Elfo Pálido','Elfo do Mar','Elfo de Shadar-Kai','Elfo da Floresta','Elfo da Marca Negra','Fada','Firbolg','Genasi do Ar','Genasi da Terra','Genasi do Fogo','Genasi da Água','Githyanki','Githzerai','Gnomo da Floresta','Gnomo das Rochas','Svirfneblin','Goblin','Goliath','Grung','Halfling de Pés Leves','Halfling Robusto','Halfling Marca da Cura','Halfling Marca da Hospitalidade','Halfing de Lótus','Haregon','Hexblood','Híbrido Simic','Hobgoblin','Hollow One','Humano','Humano Variante','Humano Marca do Encontro','Humano Marca da Pegada','Humano Marca da Passagem','Humano Marca da Sentinela','Kalashtar','Kenku','Kobold','Leonino','Homem Lagarto','Locathah','Loxodonte','Meio-Elfo','Meio-Elfo Marca da Tempestade','Marca da Dedicação','Meio-Orque','Meio-Orque Marca do Encontro','Minotauro','Orque','Orque de Eberron','Orque de Exandria','Reborn','Shifter','Tabaxi','Tielfling Infernal','Tielfling Abissal','Tortle','Tritão','Vedalken','Verdan','Warforged','Yuan-Ti'];
const classes = ['Artíficer','Bárbaro','Bardo','Bruxo','Clérigo','Druida','Feiticeiro','Guardião','Guerreiro','Ladino','Mago','Monge','Patrulheiro'];
const dados_de_vida = [8, 12, 8, 8, 10, 10, 8, 10, 10, 8, 6, 10, 10];
const frases = [
  "Nada é melhor do que beber com um irmão.",
  "Minha fé me guiará nos confins da escuridão.",
  "Não me rendi nem as tentações do inferno, nada mais me abala.",
  "Eu morri e não posso mais renascer.",
  "Comecei no fundo, mas um dia alcançarei o céu.",
  "É melhor beber rum quente do que dividi-lo.",
  "A fé move o mundo.",
  "A magia não é uma arma, é uma ferramente.",
  "Ocasionalmente nós caímos, mas sempre que levantarmos festejaremos.",
  "A melhor maneira de começar um dia é pelo desejum!",
  "Porcos costumam gritar quando morrem, por isso morrerei calado, eu não sou um porco!",
  "A vida não é uma apresentação, ela tá mais para uma tela em branco onde pinto com o sangue dos meus inimigos.",
  "Chore agora, pois no inferno nossos corpos secarão.",
  "Não há espaço para perdedores no céu, por isso eu sempre ganho.",
  "Se for para morrer que eu morra pro mais forte!",
  "Não se pode confiar nem na sua própria sombra.",
  "Falhar não é razão para desistir, falhar só significa que você tentou.",
  "Nenhuma tentativa desesperada de sucesso supera o pensamento metódico",
  "Uma rígida conduta e uma rotina ordeira são o meu luxo.",
  "Não se leve pela aparência, muita das vezes nos enganamos",
  "Meus vícios são submissos à minha razão, que quase sempre manda nas minhas emoções.",
  "Suas coisas não. Nossas coisas!",
  "Nunca deixe a escuridão dominar sua mente.",
  "A única vez que errei foi quando pensei estar errado.",
  "Nada jamais será mais bonito do que o brilho de uma estrela, e é lá que eu vou morar quando morrer",
  "Todo mundo um dia já errou, mas eu não sou todo mundo.",
  "Toda vida é preciosa! Inclusive a sua.",
  "Não é porque nos odiamos que não podemos beber juntos!",
  "A luz do Sol me guia no tortuoso caminho da glória",
  "Para se ter orgulho do que faz tem que fazer tudo que envolve aquilo que fazes",
  "Inevitavelmente o fim chegará, um rato morre, uma planta morre, dragões morrem. Quem sou eu para alterar o fluxo da vida.",
  "Achar é margem para erros.",
  "Não negue a vitória ou negará a si",
  "Constantes não existem, existem criaturas medíocres que não vivem o suficiente para ver as variáveis mudaram.",
  "Tudo é mutável, inclusive o eterno.",
  "Não se esforce para ser melhor que os outros... Ao menos não enquanto eu viver. Isso seria frívolo!",
  "Remoer o passado é medo do futuro, temer o futuro é trazer um presente inseguro, um presente inseguro cria um passado amargo. Um ciclo de derrota."
];
const dietas = [
    dieta_0 = [
        "repolho", " feijão", " pão", " peixe", " cerveja."
    ],
    dieta_1 = [
        "repolho", " arroz", " carne", " água."
    ],
    dieta_2 = [
        "arroz", " carne", " peixe", " água."
    ],
    dieta_3 = [
        "aveia", " pão com centeio", " frango e carne", " vinho."
    ],
    dieta_4 = [
        "pão com centeio", " castanhas", " peixe", " água."
    ],
    dieta_5 = [
        "feijão", " repolho", " ovo", " carne", " cerveja."
    ],
    dieta_6 = [
        "pão", " castanha", " ovo e peixe", " água."
    ],
    dieta_7 = [
        "pão", " carne e ovo", " frutas", " cerveja."
    ],
    dieta_8 = [
        "pão", " frutas", " carne, peixe e frango", " água."
    ],
    dieta_9 = [
        "pão de centeio", " aveia", " macarrão", " cerveja."
    ],
];
const armors = ["Sem Armadura","Armadura de Couro (Leve)","Armadura de Couro Batido (Leve)","Armadura Acolchoada (Leve)", "Gibão de Peles (Médio)", "Camisão de Malha (Médio)", "Meia-Armadura (Médio)","Cota de Anéis (Pesada)", "Cota de Malha (Pesada)", "Armadura de Placas (Pesada)"]
const xp_nivel = [,300,900,2700,6500,14000,23000,34000,48000,64000,85000,100000,120000,140000,165000,195000,225000,265000,305000,355000,355000];