// nomeie 3 propriedades ou métodos de strings
let name = "Renan";
//charAt;
//concat;
//includes;

// nomeie 5 propriedades ou métodos de elementos do DOM
let btn = document.querySelector(".btn");
btn.addEventListener;
btn.appendChild;
btn.id;
btn.innerHTML;
btn.outerHTML;
// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
// Seleciona o elemento com o ID 'texto'
const elemento = document.getElementById("texto");

// Seleciona o conteúdo do elemento
const conteudo = elemento.innerText;

// Cria um elemento temporário para a seleção
const inputTemporario = document.createElement("input");
inputTemporario.setAttribute("value", conteudo);

// Adiciona o elemento temporário ao DOM
document.body.appendChild(inputTemporario);

// Seleciona o conteúdo do elemento temporário
inputTemporario.select();

// Copia o conteúdo para o clipboard
document.execCommand("copy");

// Remove o elemento temporário
document.body.removeChild(inputTemporario);

// Cria um elemento temporário para a seleção
const inputTemporario = document.createElement("input");

// Adiciona o elemento temporário ao DOM
document.body.appendChild(inputTemporario);

// Seleciona o conteúdo do elemento temporário
inputTemporario.select();

// Cola o conteúdo do clipboard no elemento temporário
document.execCommand("paste");

// Obtém o conteúdo do elemento temporário
const conteudo = inputTemporario.value;

// Remove o elemento temporário
document.body.removeChild(inputTemporario);
