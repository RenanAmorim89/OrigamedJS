// Retorne no console todas as imagens do site
const imgAll = document.querySelectorAll("img");
console.log(imgAll);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgImagem);

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector(".animais-descricao h2");
console.log(h2);
//Outra forma

const animais = document.querySelector(".animais-descricao");
const h2Animais = animais.querySelector("h2");

// Selecione o último p do site
const todosParagrafos = document.querySelectorAll("p");
console.log(todosParagrafos[todosParagrafos.length - 1]);
