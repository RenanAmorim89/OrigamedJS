/*
OUTERHTML, INNERHTML E INNERTEXT
Propriedades que retornam uma string contendo o html ou texto. 
É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.
*/

const menu = document.querySelector("menu");

menu.outerHTML; // todo html do elemento
menu.innerHTML; // html inteiro
menu.innerText; // texto sem as tags

menu.innerText = "<p> Texto </p>"; // a tag vai como texto
menu.innerHTML = "<p> Texto </p>"; // a tag é renderizada

/*
TRASVERSING
Como navegar pelo DOM, utilizando suas propriedades e métodos.
*/

const lista = document.querySelector(".animais-lista");
lista.parentElement; // pai
lista.hasPointerCapture.parentElement; // pai do pai
lista.previousElementSibling; // elementoa acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; //primeiro filho
lista.children[--lista.children.length]; // Ultimo filho

lista.querySelectorAll("li"); // todas as LI's
lista.querySelector("li:last-child"); //ultimo filho

/*
ELEMENT VS NODE
Element's represetam um elemento html, ou seja, uma tag. 
Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.
*/
const lista1 = document.querySelector(".animais-lista");

lista1.previousElementSibling; // elento acima
lista1.previousSibling; // node acima

lista1.firstChild; // primeiro node child
lista1.childNodes; // todos os nodes child
// Geralmente estamos atras de um elemento e não de qualquer node em si.

/*
MANIPULANDO ELEMENTOS
É possível mover elementos no dom com métodos de Node.

*/
const lista2 = document.querySelector(".animais-lista");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");

contato.appendChild(lista2); // mode a lista para o final de contato
contato.insertBefore(lista2); // insere a lista antes de titulo
contato.removeChild(lista2); // remove titulo de contato
contato.replaceChild(lista2, titulo); // substitui titulo por lista

/*
NOVOS ELEMENTOS
Podemos criar novos elementos com o método createElement()
*/
const animais = document.querySelector(".animais");

const novoh1 = document.createElement("h1");
novoh1.innerText = "Novo Titulo";
novoh1.classList.add("titulo");

animais.appendChild(novoh1);

/*
CLONAR ELEMENTOS
Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, 
é necessário utilizar o método cloneNode()
*/
const titulo3 = document.querySelector("h1");
const titulo4 = document.querySelector("h1");
const novoTitulo = titulo3;
// titulo3, titulo4 e novoTitulo são iguais

const cloneTitulo = titulo3.cloneNode(true);
const contato1 = document.querySelector(".contato");
contato1.appendChild(cloneTitulo);
// true sinaliza para incluir os filhos
