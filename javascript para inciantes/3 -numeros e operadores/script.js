//Números
let idade = 33;
let gols = 1000;
let pi = 3.14; //Ponto  para decimal
let exp = 2e10; //20000000000
// Precisão para ate 15 digitos

//Operadores aritimeticos
let soma = 100 + 50; // 150
let subtracao = 100 - 50; // 50
let multiplicacao = 100 * 2; // 200
let divisao = 100 / 2; // 50
let expoente = 2 ** 4; // 16
let modulo = 14 % 5; // 4
// OBS: lembrado que somar em string serve para concatenar

// Operadores Aritiméticos (STRINGS)
let soma1 = "100" + 50; // 10050
let subtracao1 = "100" - 50; // 50
let multiplicacao1 = "100" * "2"; // 200
let divisao1 = " Comprei 10" / 2; // NaN (Not a Number)
// É possover verificar se uma variável é NaN ou não com a função (isNaN())

//NAN = NOT A NUMBER
let numero = 80;
let unidade = "kg";
let peso = numero + unidade; // '80kg'
let pesoPorDois = peso / 2; // NaN (Not a Number)

//A ORDEM IMPORTA
//Começa por multiplicação e divisão, depois por soma e subtração.
let total1 = 20 + 5 * 2; // 30
let total2 = (20 + 5) * 2; // 50
let total3 = (20 / 2) * 5; // 50
let total4 = 10 + 10 * 2 + 20 / 2; // 40
//Parênteses para priorizar uma expressão

//OPERADORES ARITMÉTICOS UNÁRIOS
let incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

let incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
//Mesma coisa para o decremento --x

//OPERADORES ARITMÉTICOS UNÁRIOS
//O + e - tenta transformar o valor seguinte em número
let frase = "Isso é um teste";
+frase; // NaN
-frase; //NaN

let idade1 = "33" + idade1; // 33 (número)
-idade1; // -33(número)
console.log(+idade1 + 5); // 38

let possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
//O - antes de um número torna ele negativo
