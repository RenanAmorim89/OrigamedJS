/*
FOREACH
Constantemente vamos selecionar uma lista de itens do dom. 
A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
*/

const imgs1 = document.querySelectorAll("img");

imgs1.forEach(function (img, index, array) {
  // console.log(img, index, array);
});

/*PARÂMETROS DO FOREACH
O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. 
Esse função pode receber três parâmetros: valorAtual, index e array;
 */
const imgs = document.querySelectorAll("img");

// // imgs.forEach(function (valorAtual, index, array) {
//   console.log(item); // o item atual no loop
//   console.log(index); // o número do index
//   console.log(array); // a Array completa
// });

/*
FOREACH E ARRAY
forEach é um método de Array, alguns objetos array-like possuem este método. 
Caso não possua, o ideal é transformá-los em uma array.
*/
const titulos = document.getElementsByClassName("titulo");
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function (item) {
//   // console.log(item);
// });

/*
ARROW FUNCTION
Sintaxe curta em relação a function expression. 
Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.
*/
const imgs2 = document.querySelectorAll("img");

imgs2.forEach((item, index, array) => {
  console.log(item);
});

//PARÂMETROS E PARÊNTESES
const imgs3 = document.querySelectorAll("img");

//prametro unico, não precisa de parentese
imgs3.forEach((item) => {
  console.log(item);
});

//Multiplos parametros precisam de parenteses
imgs4.forEach((item, index) => {
  console.log(item, index);
});

//sem paramatro precisa dos parenteses, mesmo vazio
let i = 0;
imgs4.forEach(() => {
  console.log(i++);
});
