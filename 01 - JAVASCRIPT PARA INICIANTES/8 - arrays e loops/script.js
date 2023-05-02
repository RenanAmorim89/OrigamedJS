/*
ARRAY
É um grupo de valores geralmente relacionados. 
Servem para guardarmos diferentes valores em uma única variável.
*/
let videoGames = ["Switch", "PS4", "XBOX"];
videoGames[0]; // Switch
videoGames[2]; // Xbox

//MÉTODOS E PROPRIEDADES DE UMA ARRAY
videoGames.pop(); // Remove o ultimo item e retorna ele
videoGames.push("3DS"); // adiciona ao final do array
videoGames.length; // 3
/*
Existem diversos outros métodos, como 
map, 
reduce, 
forEach e mais que veremos mais à frente
*/

/*
FOR LOOP
Fazem algo repetidamente até que uma condição seja atingida.
*/
for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}
/*retorna de 0 a 9 no console
O for loop possui 3 partes, início, condição e incremento
*/

//WHILE LOOP
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
//Retorna de 0 a 9 no console

//ARRAYS E LOOPS
let videoGames1 = ["Switch", "PS4", "XBox", "3DS"];
for (let i = 0; i < videoGames1.length; i++) {
  console.log(videoGames1[i]);
}
//O for loop é o mais comum

//BREAK
//O loop irá parar caso encontro e palavra break
let videoGames2 = ["Switch", "PS4", "XBox", "3DS"];
for (let i = 0; i < videoGames2.length; i++) {
  console.log(videoGames2[i]);
  if (videoGames2[i] === "PS4") {
    break;
  }
}

/*
FOREACH
forEach é um método que executa uma função para cada item 
da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
*/
let frutas = ["banana", "Pera", "Maçã", "Abacaxi", "Uva"];

frutas.forEach(function (fruta, index, array) {
  console.log(fruta, index, array);
});

// O argumento item será atribuído dinamicamente
//Podemos passar os seguintes parâmetros item, index e array

//NÃO SE CONFUNDA COM A SINTAXE
let numero = 0;
let maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}
//Não aconselho escrever da forma acima, mas funciona normalmente.
