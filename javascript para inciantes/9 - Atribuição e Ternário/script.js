//COMENTARIOS
//Servem para explicar o codigo

// Comentário de uma linha

/*
Comentário
com diversas
linhas
*/

// let nome = 'Renan';
/*
Comentar uma linha de código desativa a mesma. 
Não deixe linhas de código comentadas no arquivo final.
*/

//OPERADORES DE ATRIBUIÇÃO
//Podem funcionar como formas abreviadas
let x = 5;
let y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

//OPERADOR TERNÁRIO
//Abreviação de condicionais com if e else
let idade = 20;
let naoPossueDiabetes = false;

let podeBeber;

podeBeber = idade >= 18 && naoPossueDiabetes ? "Pode beber" : "Não Pode beber";

console.log(podeBeber);

/*
Geralmente utilizado quando precisamos atrinuir um
valor para uma variavel, dependendo de uma condição.
*/

// IF ABREVIADO
//Não necessario abrir e fechar as chaves{} quando retornamos
//apenas uma linha de codigo

let possuiFaculdade = true;
if (possuiFaculdade) console.log("Possui Faculdade");
else console.log("Não possui Faculdade");

//ou

if (possuiFaculdade) console.log("Possui Faculdade");
else console.log("Não possui faculdade");
