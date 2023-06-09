/*
STRING
É a construtora de strings, toda string possui 
as propriedades e métodos do prototype de String.
*/
const comida = 'Pizza'
const liquido = new String('Agua')
const ano = new String(2023)

/*
STR.LENGTH
Propriedade com o total de caracteres da string.
*/
const comida1 = 'Pizza'
const frase = 'A melhor comida'
 comida1.length; //5
 frase.length;// 15

 comida[0]// P
 frase[0]// A
 frase[frase.length -1]//a

 /*
 STR.CHARAT(N)
Retorna o caracter de acordo com o index de (n).
 */
const linguagem = 'JavaScript';
linguagem.charAt(0)// J
linguagem.charAt(2)// v
linguagem.charAt(linguagem.length - 1)// t

/*
STR.CONCAT(STR2, STR3, ...)
Concatena as strings e retorna o resultado.
*/
const frase3 = 'A melhor linguagem é ';
const linguagem1 = 'JavaScript'

const fraseCompleta = frase.concat(linguagem1, '!!')

/*
STR.INCLUDES(SEARCH, POSITION)
Procura pela string exata dentro de outra string. 
A procura é case sensitive.
*/
const fruta = 'Banana'
const listaFruta = 'Melancia, Banana, Laranja'

listaFruta.includes(fruta)// true
fruta.includes(listaFruta)// false

/*
STR.ENDSWITH(SEARCH) E STR.STARTSWITH(SEARCH)
Procura pela string exata dentro de outra string. 
A procura é case sensitive.
*/
const fruta1 = 'Banana'
fruta1.endsWith('nana')// true
fruta1.startsWith('Ba')// true
fruta1.startsWith('na')// false

/*
STR.SLICE(START, END)
Corta a string de acordo com os valores de start e end.
*/
const transacao1 = 'Deposito cliente'
const transacao2 = 'Deposito fornecedor'
const transacao3 = 'Taxa de camisas'

transacao1.slice(0, 3)// Dep
transacao2.slice(0, 3)// Dep
transacao3.slice(0, 3)// Tax

transacao1.slice(12)// cliente
transacao1.slice(-4)// ente
transacao1.slice(3, 6)// osi

/*
STR.SUBSTRING(START, END)
Corta a string de acordo com os valores de start e end. 
Não funcionar com valores negativos como o slice.
*/
const linguagem2 = 'JavaScript'
linguagem2.substring(3 ,4)// aS
linguagem2.substring(0, 4)//java
linguagem2.substring(4)// Script
linguagem2.substring(-3)// JavaScript

/*
STR.INDEXOF(SEARCH) E STR.LASTINDEXOF(SEARCH)
Retorna o index da string, assim que achar o primeiro resultado ele já retorna. 
No caso do lastIndexOf ele retorna o último resultado.
*/
const instrumento = 'Guitarra'
instrumento.indexOf('r')// 5
instrumento.lastIndexOf('r')// 6
instrumento.indexOf('ta')// 3

/*
STR.PADSTART(N, STR) E STR.PADEND(N, STR)
Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, 
se passarmos n = 10, ela passará a ter 10 caracteres. 
O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
*/
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000']

listaPrecos.forEach((preco)=>{
  console.log(preco.padStart(10, '.'))
})

listaPrecos[0].padStart(10, '.')//.....R$ 99
listaPrecos[0].padEnd(10, '.')// R$ 99.....

//STR.REPEAT(N)
//Repete a string (n) vezes.

const frase4 = 'Ta';

frase.repeat(5); // TaTaTaTaTa

/*
STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. 
Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.
*/

let listaItens = 'Camisas Bones Calças Bermudas Vestidos Saias'

listaItens = listaItens.replace(/[ ]+/g, ', ')

let preco = 'R$ 1200,43'
preco = preco.replace(',', '.'); // 'R$ 1200.43'

/*
STR.SPLIT(PADRAO)
Divide a string de acordo com o padrão passado e retorna uma array.
*/
const listaItens4 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens4.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

/*STR.TOLOWERCASE() E STR.TOUPPERCASE()
Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.
*/
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true

/*STR.TRIM(), STR.TRIMSTART(), STR.TRIMEND()
Remove espaço em branco do início ou final de uma string.
*/ 

const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'