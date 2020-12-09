const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

const figuras = [
  "1",
  "2",
  "3",
  "4"
];

const figurasImg = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
];

const figurasImgDest = [
  "img/11.jpg",
  "img/22.jpg",
  "img/33.jpg",
  "img/44.jpg",
  "img/101.jpg",
];

function flipEveryCard(){
  flipCard('card1')
  flipCard('card2')
  flipCard('card3')
  flipCard('card4')

}

function flipCard(card) {
  var y=document.getElementById(card);
  y.classList.add('flip');
}

function unFlipCard(card) {
  var y=document.getElementById(card);
  y.classList.remove('flip');
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function randomizeCards(){
  var tamanho = figuras.length; 
  var rand = Math.floor(Math.random() * tamanho); 
  document.getElementById("card1-img").src=figurasImg[rand];
  document.getElementById("card1-ipt").value = rand;

  rand = Math.floor(Math.random() * tamanho); 
  document.getElementById("card2-img").src=figurasImgDest[rand];
  document.getElementById("card2-ipt").value = rand;

  rand = Math.floor(Math.random() * tamanho); 
  document.getElementById("card3-img").src=figurasImgDest[rand];
  document.getElementById("c3-bk").src=figurasImgDest[tamanho];
  document.getElementById("card3-ipt").value = rand;
  
  rand = Math.floor(Math.random() * tamanho); 
  document.getElementById("card4-img").src=figurasImg[rand];
  document.getElementById("card4-ipt").value = rand;
}

function nextRound(){
  //Carta3 recebe o valor da carta 1
  //Carta 4 recebe da carta 3
  //randomiza o c1 e c2 pq são valores novos

  //Armazenar os valores atuais das cartas para uso posterior
  var c2 = document.getElementById("card2-ipt").value;
  //var c3 = document.getElementById("card3-ipt").value;
  var c4 = document.getElementById("card4-ipt").value;

  document.getElementById("card3-ipt").value = c4;
  document.getElementById("card3-img").src=figurasImg[c4];

  document.getElementById("card4-ipt").value = c2;
  document.getElementById("card4-img").src=figurasImg[c2];

  var tamanho = figuras.length; 
  var rand = Math.floor(Math.random() * tamanho); 
  document.getElementById("card1-img").src=figurasImg[rand];
  document.getElementById("card1-ipt").value = rand;

  rand = Math.floor(Math.random() * tamanho); 
  document.getElementById("card2-img").src=figurasImgDest[rand];
  document.getElementById("card2-ipt").value = rand;
}


function crono() {
  var secs = 61;
  function cronometro() {
    secs--;
    document.getElementById("tempo").innerHTML = secs;
    if ( secs == 0)
      clearInterval(id);
      //fim();
      if(document.getElementById("tempo").innerHTML == "0"){
        fim();
      }
      if(document.getElementById("tempo").innerHTML == "55" && document.getElementById("rodada").value == "1"){
        proximo();
      }
    }
   var id = setInterval(cronometro, 1000);
}


function inicio(){
  crono();
  randomizeCards();
 // animacaoRodada();
  document.getElementById("comecar").disabled = "true";
  document.getElementById("comecar").style.visibility = "hidden";
  document.getElementById("btn_sim").style.opacity = "1";
  document.getElementById("btn_sim").disabled = "";
  document.getElementById("btn_nao").style.opacity = "1";
  document.getElementById("btn_nao").disabled = "";
  my_time=setTimeout("flipCard('card2');",1000);
  my_time=setTimeout("flipCard('card3');",1000);
  my_time=setTimeout("flipCard('card4');",1000);
}

function sim(){
  var v1 = document.getElementById("card3-ipt").value;
  var v2 = document.getElementById("card2-ipt").value;
  if (v1 == v2) {
    computaPontuacao();
    proximo();
  }
  else {
    proximo();
  }
}

function nao(){
  var v1 = document.getElementById("card3-ipt").value;
  var v2 = document.getElementById("card2-ipt").value;
  if (v1 != v2) {
    computaPontuacao();
    proximo();
  }
  else {
    proximo();
  }
  
}

function proximo(){
  unFlipCard('card2')
  unFlipCard('card3')
  unFlipCard('card4')
  document.getElementById("rodada").value = 2;
  animacaoRodada();
  my_time=setTimeout('nextRound()',500);
  my_time=setTimeout("flipCard('card2');",1000);
}

function computaPontuacao(){
  var p = parseInt(document.getElementById("pontuacao_ipt").value);
  console.log(p);
  p = p + 1;
  document.getElementById("pontuacao_ipt").value = p;
  document.getElementById("pontuacao").innerHTML= p;
  //alert("acertou!");
}

function fim(){
  my_time=setTimeout("unFlipCard('card1');",1000);
  my_time=setTimeout("unFlipCard('card2');",1000);
  my_time=setTimeout("unFlipCard('card3');",1000);
  my_time=setTimeout("unFlipCard('card4');",1000);
  // unFlipCard('card1')
  // unFlipCard('card2')
  // unFlipCard('card3')
  // unFlipCard('card4')
  document.getElementById("comecar").disabled = "";
  document.getElementById("comecar").style.visibility = "";
  
  document.getElementById("btn_sim").style.opacity = "0.5";
  document.getElementById("btn_nao").style.opacity = "0.5";

  document.getElementById("btn_sim").disabled = "";
  document.getElementById("btn_nao").disabled = "";

  document.getElementById("c3-bk").src="img/10.jpg";
  var p = document.getElementById("pontuacao_ipt").value;
  //alert("Sua pontuação foi de " + p)
  document.getElementById("pontuacao").innerHTML= "0";
  document.getElementById("pontuacao_ipt").value= "0";
  document.getElementById("tempo").innerHTML= "60";
  var partida = document.getElementById("partida").value;
  var body = document.getElementById('modal-bd');
  document.getElementById('modal-bd').innerHTML = document.getElementById('modal-bd').innerHTML + "<p> Rodada " + partida + " --> <strong>" + p + "</strong></p>";
  var link = document.getElementById('btn-modal');
  link.click();

  document.getElementById("partida").value = parseInt(document.getElementById("partida").value) + 1;

}