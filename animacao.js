function animacaoRodada(){
    move1();
    move2();
    move3();
    move4();
    resetarCorreto();
}

function resetarCorreto(){
    my_time=setTimeout('resetar()',400);
}

function move2() {
  var duracao = 4;
  var elem = document.getElementById('card2');
  var left  = elem.clientLeft;
  var top   = 0;
  function deslocamento() {
    top = top + duracao;
    
    elem.style.top  = top + 'px';
    if ( top == 232)
      clearInterval(id);
    }
   // desloca o elemento até 10 segundos
   // aumentando o valor, vai demorar mais para chegar
   var id = setInterval(deslocamento, 1);
}

function move4() {
    var duracao = 4;
  var elem = document.getElementById('card4');

  var right  = 0;
  var top   = 0;

  function deslocamento2() {
    right = right + duracao;
    
    elem.style.right = right + 'px';
    elem.style.top  = top + 'px';
    if ( right == 320)
      clearInterval(id);
    }
   // desloca o elemento até 10 segundos
   // aumentando o valor, vai demorar mais para chegar
   var id = setInterval(deslocamento2, 1);
}

function move1() {
    var duracao = 4;
  var elem = document.getElementById('card1');

  var left  = 0;
  var top   = 0;

  function deslocamento3() {
    left = left + duracao;
    
    elem.style.left = left + 'px';
    elem.style.top  = top + 'px';
    if ( left == 320)
      clearInterval(id);
    }
   // desloca o elemento até 10 segundos
   // aumentando o valor, vai demorar mais para chegar
   var id = setInterval(deslocamento3, 1);
}

function move3() {
  var duracao = 4;
  var elem = document.getElementById('card3');

  var right  = 0;
  var top   = 0;
  var op = 1;
  function deslocamento4() {
    right = right + duracao;
    
    elem.style.right = right + 'px';
    elem.style.top  = top + 'px';

    elem.style.opacity = op;
    elem.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op -= op * 0.1;
    if ( right == 320)
      clearInterval(id);
        
       //resetar();
    }
   // desloca o elemento até 10 segundos
   // aumentando o valor, vai demorar mais para chegar
   var id = setInterval(deslocamento4, 1);
}

function comeback(){
    element = document.getElementById('card1');

    var op = 1.5;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 0.12){
            clearInterval(timer);
            //element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}


function resetar(){

    document.getElementById('card1').style.top = 0 + "px";
    document.getElementById('card1').style.left = 0 + "px";

    document.getElementById('card2').style.top = 0 + "px";
    document.getElementById('card2').style.left = 0 + "px";

    document.getElementById('card3').style.top = 0 + "px";
    document.getElementById('card3').style.left = 0 + "px";

    document.getElementById('card4').style.top = 0 + "px";
    document.getElementById('card4').style.right = 0 + "px";
    document.getElementById('card3').style.opacity = "1";

    processa(1,0,100);
}

function processa(time,initial,end){
    element = document.getElementById('card1');
    if(initial == 0){
            increment = 2;
            //element.style.display = "block";
    }else {
            increment = -2;
    }

    opc = initial;

    intervalo = setInterval(function(){
            if((opc == end)){
                      if(end == 0){
                            element.style.display = "none";
                      }
                      clearInterval(intervalo);
            }else {
                      opc += increment;
                      element.style.opacity = opc/100;
                      element.style.filter = "alpha(opacity="+opc+")";
            }
    },time * 10);
}
