// tempo deccorido em segundos
let tempoSegundos = 1500;
//Chama para a funç~]ao de cada botão
function contorolarTime(idx){

    if(idx === 1){
        tempoSegundos = 1500;
        mostrarTempoTela();
        alterarAtributos('em-foco', 'pomodoro');
        InicioPausa();

    }else if(idx === 2){
        tempoSegundos = 300;
        mostrarTempoTela();
        alterarAtributos('pausa-curta', 'descanso');
        InicioPausa();
    }else if(idx === 3){
        tempoSegundos = 600;
        mostrarTempoTela();
        alterarAtributos('pausa-cigarrin', 'chocharito');
        InicioPausa();
    }

}
//Fim

//Função para alterar os atributos de cada butão - Inicio
function alterarAtributos(classe, imagen){
    mostrarTempoTela();
    const body = document.querySelector('body');
    const logo = document.getElementById('logo');

    body.setAttribute('class', classe);
    logo.setAttribute('src', `images/${imagen}.png`);

    switch(classe){
        case "em-foco":
            frasesAleatorias();
        break;

        case "pausa-curta":
            frasesAleatorias();
        break;

        case "pausa-cigarrin":
            frasesAleatorias();
        break;
    }
    
}
// Fim


// Função para gerar uma frase aleatória para cada botão - Fim
let frases = [
    'Aquilo que não me mata me faz mais forte',
    'Homens convictos são prisioneiros',
    'É preciso ter o caos dentro de si para dar a luz à uma estrela dançante',
    'Às vezes, as pessoas não querem ouvir a verdade porque não querem que suas ilusões sejam destruídas',
    'Torna-te aquilo que és',
    'Começamos a desconfiar das pessoas muito inteligentes quando ficam embaraçadas',
    'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos',
    'Ninguém pode construir para você a ponte sobre a qual você deve cruzar o fluxo da vida. Ninguém pode fazer isso além de você mesmo.',
    'Não é a força, mas sim a constância dos bons resultados que conduz os homens à felicidade',
    'Onde encontro uma criatura viva, encontro também desejo de poder',
    'Toda ambição requer renúncia',
    'Um homem de personalidade forte é insuportável se, além disso, não possuir pelo menos duas outras qualidades: gratidão e asseio',
    'Há sempre alguma loucura no amor. Mas há sempre um pouco de razão na loucura'
]

function frasesAleatorias(){
    let aleatoriaFrase =  Math.floor(Math.random()*(frases.length));
    document.getElementById('Frases').innerHTML = frases[aleatoriaFrase] + " - Nietzsche";
}
//Fim 


// Funções para controle do cronometro

let contador = null;

let tempo =  document.getElementById("tempo");

function decrementarTempo(){
    if(tempoSegundos <= 0){
    alert("Deu o Tempo!!!!");
    zerar();
    return
    }
    tempoSegundos = tempoSegundos - 1;
    mostrarTempoTela();
} 

function InicioPausa(){
    if(contador){
        zerar();
        return;
    }
    contador =  setInterval(decrementarTempo, 1000);
}

function zerar() {
    clearInterval(contador);
    contador = null;
  

    
}

function mostrarTempoTela(){
    const tempoPercorrido = new Date(tempoSegundos * 1000);
    const tempoFormatado = tempoPercorrido.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    tempo.innerHTML = `${tempoFormatado}`
}

mostrarTempoTela();
