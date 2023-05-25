// function areaQuadrado(lado){
//   return lado * lado
// }

// function somar (n1 , n2){
//   return n1 + n2
// }

// console.log(somar(3 ,3))
// console.log(somar.length)
// console.log(somar.name)

// function darOi(nome, idade){
//   console.log('oi pra você ' + nome + ' sua idade é ' + idade)
// }

// darOi.call({}, 'Renan ', 33)

// function descricaoCarro(velocidade){
//   console.log(this)
//   console.log(this.marca + ' ' + this.ano + ' ' + velocidade)
// }

// descricaoCarro.call({marca: 'Honda', ano: 2015}, 100)

// const carros = ['Ford', 'Fiat', 'VW']

// const frutas = ['Banana', 'Pêra', 'Uva']

// carros.forEach((item)=>{
//   console.log(item)
// })

// function Dom(seletor){
//   this.element = document.querySelector(seletor)
// }

// Dom.prototype.ativo = function(classe){
//   this.element.classes.add(classe)
// }

// const li = {
//   element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(li, 'ativar')

const frutas = ['Banana', 'Pêra', 'Uva']

Array.prototype.pop.call(frutas)
// isso é o mesmo que frutas.pop()
frutas.pop()

const arrayLike = {
  0: 'Item 1',
  1: 'Item 2',
  2: 'Item 3',
  length: 3
}

const li = document,querySelectorAll('li')

const filtro = Array.prototype.filter.call(li, (item)=>{
  return item.classList.contains('ativo')
})

console.log(filtro)

console.log(li)

const numeros = [33, 23, 434, 54, 45, 888, 256]

Math.max.apply(null,numeros)

const $ = document.querySelectorAll.bind(document, 'li')

console.log($('li'))

const carro = {
  marca: 'ford',
  ano: 2018,
  acelerar: function(acelerando, tempo){
    return `${this.marca} acelerou ${acelerando} em ${tempo}` 
  }
}

