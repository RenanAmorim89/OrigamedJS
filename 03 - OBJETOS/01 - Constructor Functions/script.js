/*
OBJETOS
Criar um objeto é simples, basta definirmos uma variável e 
iniciar a definição do seu valor com chaves {}. 
Mas e se precisarmos criar um novo objeto, com as mesmas 
características do anterior? É possível com o Object.create, 
mas veremos ele mais tarde.
*/

const carro = {
  marca: 'Marca',
  preco: 0,
}

const honda = carro;
honda.carro = 'honda';
honda.preco = 4000;

const fiat = carro;
fiat.carro = 'Fiat';
fiat.preco = '3000'

//Carro, fiat e honda apontam para o mesmo objeto

/*
CONSTRUCTOR FUNCTIONS

Para isso existem as Constructor Functions, 
ou seja, Funções Construtoras que são 
responsáveis por construir novos objetos 
sempre que chamamos a mesma.
*/
function Carro(){
  this.marca = 'Marca';
  this.preco = 0;
}

const honda1 = new Carro();
honda1.marca = 'Honda'
honda1.preco = 4000

const fiat1 = new Carro()
fiat1.marca = 'Fiat';
fiat1.preco = 3000;
//Usar Pascal Case, ou seja começar com a letra maiúscula.

/*
NEW KEYWORD

A palavra chave new é responsável por criar 
um novo objeto baseado na função que 
passarmos a frente dela.
*/
const honda2 = new Carro()
// 1 Cria um novo objeto
honda2 = {}

// 2 Define o prototipo
honda2.prototype = Carro.prototype

// 3 Aponta a variavel this para o objeto
this.honda2

// 4 Executa a função, substituindo this pelo objeto
honda2.marca = 'Marca'
honda2.preco = 0

// 5 Retorna o novo objeto
return: 'Marca',
preco: 0


/*
PARÂMETROS E ARGUMENTOS

Podemos passar argumentos que serão 
utilizados no momento da criação do objeto.
*/

function Carro1(marca, preco){
  this.marca = marca;
  this.preco = preco;
}

const honda3 = new Carro1('Honda', 4000)
const fiat = new Carro1('Fiat', 3000)

/*
CONSTRUCTOR FUNCTION REAL
Um objeto criado com uma Constructor, 
não irá influenciar em outro objeto criado 
com a mesma Constructor.
*/
function Dom(){
  this.seletor = 'li'
  const element = document.querySelector(this.seletor)
  this.ativo = function(){
    element.classList.add('ativo')
  };
}

const lista = new Dom()
lista.seletor = 'ul'
lista.ativo()

const lastLi = new Dom()
lastLi.seletor = 'li:last_child'
lastLi.ativo()

//LEMBRE-SE DE USAR PARÂMETROS
function Dom1(seletor){
  const element = document.querySelector(seletor)
  this.ativo = function(classe){
    element.classList.add(classe)
  }
}
const lista = new Dom1('ul')
lista.ativo('ativo')

const lastLi1 = new Dom1('li:last-child')
lastLi1.ativo('ativo')