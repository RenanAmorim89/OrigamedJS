/*
TUDO É OBJETO
Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
*/
let nome = "Renan";

nome.length; // 5
nome.charAt(1); //'e'
nome.replace("nan", "nato"); //Renato
nome; // 'Renan'
let nomeMinusculo = nome.toLowerCase(); // 'renan'
//Uma string herda propriedades e métodos do construtor String()

//NÚMEROS
let altura = 1.76;
altura.toString(); // '1.76'
altura.toFixed(); // '2'
//Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos

//FUNÇÕES
function areaQuadrado(lado) {
  return lado * lado;
}
areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1, retorna um argumanto

//ELEMENTOS DO DOM
let btn = document.querySelector(".btn");
btn.classList.add("azul"); // adiciona a class azul
btn.innerText; // 'Clique'
btn.addEventListener("click", function () {
  console.log("Clicou");
});
//Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.
