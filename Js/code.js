
function myFunction() {
  let inputNickname = document.querySelector("#nick");
  let btnPlay = document.querySelector("#but");

  if(inputNickname.value==""){
    alert('Campo de nickname vazio');
  }
  else{
    let newText = document.createTextNode(`Seja bem vindo ao Se vira nos 30 The Game, ${inputNickname.value}!`);

    let h2 = document.querySelector('#saudacao');
    h2.innerHTML="";
    h2.appendChild(newText);


  };
  
  
  //document.getElementById("MeusDados").innerHTML = inputNickname;

  
  /*h1.content.appendChild(newText);


  if(inputNickname.value = ""){
    document.querySelector('#but').hide(); 
  }*/
} 

/*function onclick(){
  let inputNickname = document.querySelector("#nick");
  let btnPlay = document.querySelector("#but");
  if(inputNickname==""){
    alert('Campo de nickname vazio');
  }
  else{

  }
}*/
//let botaoOk = document.querySelector("#btn"); 
//botaoOk.onclick = myFunction;


/*
function Comprar1(){
  document.getElementById("myText").innerHTML = parseInt(saldo);

  const NewSaldo = parseInt(saldo) - parseInt(1000);
   
  document.getElementById("myText").innerHTML = parseInt(NewSaldo);

  

  if (saldo > 0){
    alert('Seu saldo atual é: ' + parseInt(NewSaldo) );
  }
  else if (saldo < 999){
      alert(' Saldo Insuficiente')
  }

  
}
 
function Comprar2(){
  const NewSaldo2 = parseInt(NewSaldo) - parseInt(10000);
   
  document.getElementById("myText").innerHTML =  parseInt(NewSaldo2);

  if (NewSaldo2 > 0){
    alert('Seu saldo atual é: ' + parseInt(NewSaldo2) );
  }
  else if (NewSaldo2 < 9999){
      alert(' Saldo Insuficiente')
  }
  
}

function Comprar3(){
  const NewSaldo3 = parseInt(NewSaldo2) - parseInt(10000); 

  document.getElementById("myText").innerHTML =  parseInt(NewSaldo3);

  if (NewSaldo3 > 0){
    alert('Seu saldo atual é: ' + parseInt(NewSaldo) );
  }
  else if (NewSaldo3 < 99999){
      alert(' Saldo Insuficiente')
  }
  
}

function Ganhar(){
  document.getElementById("myText").innerHTML = parseInt(saldo);

  const NewSaldo = parseInt(saldo) + parseInt(1);
   
  document.getElementById("myText").innerHTML = parseInt(NewSaldo);

  

  if (saldo > 0){
    alert('Seu saldo atual é: ' + parseInt(NewSaldo) );
  }
  else if (saldo < 999){
      alert(' Saldo Insuficiente')
  }

  
}

function Ganhar2(){
  document.getElementById("myText").innerHTML = parseInt(saldo);

  const NewSaldo = parseInt(saldo) + parseInt(1000);
   
  document.getElementById("myText").innerHTML = parseInt(NewSaldo);

  

  if (saldo > 0){
    alert('Seu saldo atual é: ' + parseInt(NewSaldo) );
  }
  else if (saldo < 999){
      alert(' Saldo Insuficiente')
  }

  
}

function continhas(){
  alert('Atividade 3: Soma e Média');

var valor1 = prompt('Digite um valor: ');
var valor2 = prompt('Digite outro valor: ');
var valor3 = prompt('Digite outro valor: ');
var valor4 = prompt('Digite outro valor: ');
const SOMA = parseInt(valor1) + parseInt(valor2) + parseInt(valor3) + parseInt(valor4) ;
const MEDIA = (parseInt(valor1) + parseInt(valor2) + parseInt(valor3) + parseInt(valor4)) / 4 ;
alert( 'Soma: ' + SOMA );
alert( 'Média: ' + MEDIA );




}

function multiplicacao () {
  alert("Calculadora de multiplicação");
  const val1 = prompt("Digite um número: ");
  const val2 = prompt("Digite outro número: ");
  var val3 = parseInt(val1) * parseInt(val2);
  document.getElementById("myText").innerHTML = parseInt(val3);
  alert(parseInt(val3));
}

function potencia () {
  alert("Calculadora de potência");
  const base = prompt("Digite o número base: ");
  const expoente = prompt("Digite o expoente: ");
  var eleva = Math.pow( parseInt(base), parseInt(expoente));
  document.getElementById("myText").innerHTML = parseInt(eleva);
  alert(parseInt(eleva));
}*/
    // .length que usa pra contar  as letras da variável or count
/*
const result = prompt('Digite o valor da compra que você quer realizar: ')
const SaldoAtual = parseInt(saldo) - parseInt(result);

if (saldo > 0){
  alert('Seu saldo atual é: ' + SaldoAtual );
}
else if (saldo < 1){
    alert(' Saldo Insuficiente')
}

alert('Atividade 2');

var n1 = prompt('Informe um número inteiro: ');
var n2 = prompt('Informe outro número inteiro: ');
var sinal = prompt('Informe o caractére da operação (“+”, “-”, “*” ou “/”): ');

const Resultado = parseFloat(n1) + parseFloat(sinal) + parseFloat(n2) ;

if( sinal = '+'){
  parseInt(n1) +  parseInt(n2)
}
else if( sinal = '-'){
  parseInt(n1) -  parseInt(n2)
}
else if( sinal = '/'){
  parseInt(n1) /  parseInt(n2)
}
else if( sinal = '*'){
  parseInt(n1) *  parseInt(n2)
}

alert(Resultado);





alert('Atividade 3');

var valor1 = prompt('Digite um valor: ');
var valor2 = prompt('Digite outro valor: ');
var valor3 = prompt('Digite outro valor: ');
var valor4 = prompt('Digite outro valor: ');
const SOMA = parseInt(valor1) + parseInt(valor2) + parseInt(valor3) + parseInt(valor4) ;
const MEDIA = (parseInt(valor1) + parseInt(valor2) + parseInt(valor3) + parseInt(valor4)) / 4 ;
alert( 'Soma: ' + SOMA );
alert( 'Média: ' + MEDIA );

*/


/*
// tentativa de experimentar uns trem
var contador = document.querySelector('.badge');

document.querySelector('button').addEventListener('click', function(){
  var numero = parseInt(contador.textContent) + 10;
  contador.textContent = numero;
});*/ 