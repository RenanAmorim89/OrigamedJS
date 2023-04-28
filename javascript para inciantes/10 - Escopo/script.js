//ESCOPO DE FUNÇÃO
//Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

function mostrarCarro() {
  let carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); //Fusca no console
console.log(carro); //Erro, carro is not definid
//Escopo evita o conflito entre nomes

/*
VARIÁVEL GLOBAL (ERRO)
Declarar variáveis sem a palavra chave var, 
const ou let, cria uma variável que pode ser acessar 
em qualquer escopo (global). Isso é um erro.
*/
function mostrarCarro1() {
  carro1 = "Brasilia";
  console.log(carro1);
}
mostrarCarro1(); //  Brasilia
console.log(carro1); //Brasilia
// 'use strict' impede isso

/*
ESCOPO DE FUNÇÃO (PAI)
Variáveis declaradas no escopo pai da função, 
conseguem ser acessadas pelas funções.
 */
let carro2 = "Corsel";

function mostrarCarro2() {
  let frase = `Meu Carro é um ${carro2}`;
  console.log(frase);
}

mostrarCarro2(); // Meu carro é um Corsel
console.log(carro2); // Corsel

/*
ESCOPO DE BLOCO
Variáveis criadas com var, vazam o bloco. 
Por isso com a introdução do ES6 a melhor forma de 
declarmos uma variável é utilizando const e let, 
pois estas respeitam o escopo de bloco.
*/
if (true) {
  var carro3 = "Belina";
  console.log(carro3);
}
console.log(carro3); // carro

/*
VAR VAZA O BLOCO
Mesmo com a condição falsa, a variável ainda será declarada 
utilizando hoisting e o valor ficará como undefined.
*/
if (false) {
  var carro4 = "Opala";
  console.log(carro4);
}
console.log(carro4); // undefined

//CONST E LET NO LUGAR DE VAR
//A partir de agora vamos utilizar apenas const e let para declarmos variáveis.
if (true) {
  const carro4 = "Comodoro";
  console.log(carro4);
}
console.log(carro4); //erro, carro4 is not definid

//{} CRIA UM BLOCO
//Chaves {} criam um escopo de bloco,
//não confundir com a criação de objetos = {}
{
  var carro5 = "Fusca";
  const ano = 2018;
}
console.log(carro5); // Carro
console.log(ano); // erro ano is not defined

//FOR LOOP
//Ao utilizar var dentro de um forloop, que é um bloco,
//o valor do variável utilizada irá vazar e existir fora do loop.
for (var i = 0; i < 10; i++) {
  console.log(`Numero ${i}`);
}
console.log(i);

//FOR LOOP COM LET
//Com o let evitamos que o número vaze.

for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // i is not defined

//CONST
//Mantém o escopo no bloco, impede a redeclaração e
//impede a modificação do valor da variável, evitando bugs no código.
const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
data = 'Janeiro'; // erro

//LET
//Mantém o escopo no bloco, impede a redeclaração, 
//mas permite a modificação do valor da variável.
let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

let ano = 2020; // erro, redeclarou a variável

