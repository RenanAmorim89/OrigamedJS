function Pessoa(nome, idade){
  this.nome = nome
  this.idade = idade
}

// console.log(Pessoa)

Pessoa.prototype.andar = function(){
  return this.nome + " Pessoa andou"
}

Pessoa.prototype.nadou = function(){
  return this.nome + ' Pessoa nadou'
}
const renan = new Pessoa('Renan', 33)

const pais = 'Brasil'
const cidade = new String('Maringa')

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo']

const lista = document.querySelectorAll('li')
//transforma em um array
  const listaArray = Array.prototype.slice.call(lista)
  const listaArray2 = Array.from(lista)

  const Carro ={
    marca: 'Forde',
    preco: 2000.,
    andar(){
      return true
    }
  }