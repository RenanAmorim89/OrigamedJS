let pessoa = {
  nome: "Renan",
  idade: 33,
};

/*MÉTODOS
Abreviação de area: function() {} para area() {}, no ES6+
*/
let quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

/*MÉTODOS
Abreviação de area: function() {} para area() {}, no ES6+
Pode ser feito assim:
*/
let triangulo = {
  lados: 3,
  area(lado) {
    return lados * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

Math.PI; // 3.14
Math.random(); // nnúmero aleatório

let pi = Math.PI;
console.log(pi); // 3.14

/*
CRIAR UM OBJETO
Um objeto é criado utilizando as chaves {}
*/
let carro = {};
let pessoa1 = {};
console.log(typeof carro); // object

/*
DOT NOTATION GET
Acesse propriedades de um objeto utilizando o ponto .
*/
let menu = {
  with: 800,
  height: 50,
  backgroundColor: "#84E",
};

let bg = menu.backgroundColor; // '#84E'

/*
DOT NOTATION SET
Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.
*/
menu.backgroundColor = "#000";
console.log(menu.backgroundColor); // '#000

/*
ADICIONAR PROPRIEDADES E MÉTODOS
Basta adicionar um novo nome e definir o valor.
*/

let tamanho = {
  width: 800,
};
tamanho.height = 50;
tamanho.position = "tixed";

/*
PALAVRA-CHAVE THIS
this irá fazer uma referência ao próprio objeto.
*/
let height = 120;
let menu2 = {
  with: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};

menu2.metadeHeight(); // 25
// sem o this seria 60
//this irá retornar o próprio objeto

/*
PROTÓTIPO E HERANÇA
O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
*/

let menu3 = {
  width: 800,
};
menu3.hasOwnProperty("width"); // true
menu3.hasOwnProperty("height"); // false
//hasOwnProperty é um método de Object
