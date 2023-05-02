// Retorne o url da página atual utilizando o objeto window
const paginaAtual = window.location.href;
console.log(paginaAtual);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const primeiroElemento = document.querySelector(".ativo");

// Retorne a linguagem do navegador
const linguagemNavegador = window.navigator.language;
console.log(linguagemNavegador);

// Retorne a largura da janela
const larguraPagina = window.innerWidth;
console.log(larguraPagina);
