// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade){
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
}

Pessoa.prototype.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome} `

}
const renan = new Pessoa('Renan', 'Amorim', 33) 

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

NodeList.prototype
HTMLAllCollection.prototype
Document.prototype
Object.getOwnPropertyDescriptor(NodeList.prototype)
Object.getOwnPropertyDescriptor(HTMLAllCollection.prototype)
Object.getOwnPropertyDescriptor(Document.prototype)
// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;//HTMLLiElement
li.click;// function
li.innerText;//String
li.value;//Number
li.hidden;// Boolean
li.offsetLeft;//Number
li.click();//anderfined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;//String
