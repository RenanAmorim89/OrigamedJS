// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}
function Pessoa1(nome,idade){
  this.nome = nome;
  this.idade = idade;
  this.andar = function(){
    console.log(this.nome + ' andou')
  };
}
const usuario = new Pessoa1('Renan', 33)



// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const João = new Pessoa1('João', 20)
const Maria = new Pessoa1('Maria', 25)
const Bruno = new Pessoa1('Bruno', 15)


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(seletor){
  const elementList  = document.querySelectorAll(seletor)
  this.elementList = elements
  this.addClass = function(classe){
    elementList.forEach((element)=>{
      element.classList.add(classe)
    })
    
  }
  this.removeClass = function(classe){
    elementList.forEach((element)=>{
      element.classList.remove(classe)
    })
  }
}

const lista = new Dom('li')
lista.addClass('teste')
lista.removeClass('teste')

const ul =  new Dom('ul')

