let nome = "Renan"; // String
let idade = 33; // Number
let possuiFaculdade = true; // Boolean
let time; // Undefined
let comida = null; // Null
let simbolo = Symbol(); // Symbol
let novoObjeto = {}; // Object

// Verificar tipo de dado
let nome1 = "Renan";
console.log(typeof nome1);
// OBS: typeof null retorna objeto

//String Você pode somar uma string e assim concatenar as palavras.
let nome2 = "Renan";
let sobrenome = "Amorim";
let nomeCompleto = nome2 + "" + sobrenome;

//STRING Você pode somar números com strings, o resultado final é sempre uma string.
let gols = 1000;
let frase = "Romario fez " + gols + "gols";

//ASPAS DUPLAS, SIMPLES E TEMPLATE STRING
// 'JavaScript é "super" fácil';
// "JavaScript é 'super' fácil";
// "JavaScript é \"super\" fácil";
// `JavaScript é "super" fácil"`;
// "JavaScript é "super" fácil"; // Inválido

//TEMPLATE STRING
let gols1 = 1000;
let frase1 = "Romario fez " + gols + "gols";
let frase2 = `Romario fez ${gols1} gols`; //TEMPLATE STRING
//Você deve passar expressões / variáveis dentro de ${}
console.log(frase2);
