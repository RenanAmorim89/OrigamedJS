const instrumentos = ['Guitarra', 'Baixo', 'Violão']
const precos = [49, 99, 69, 89]

const dados = [new String('Tipo 1'), ['Carro', 'Portas',{cor: 'Azul', preco:2000}],
function andar(nome){console.log(nome)}]

const carros = new Array('Ford', 'Fiat', 'Honda')
carros[2] = 'Ferrari'
carros[3] = 'kia'
carros[20] = 'GM'
console.log(carros.length)

 const li = document.querySelectorAll('li')
 console.log(li)

 const arrayLi = Array.from(li)
 console.log(arrayLi)

 const frutas = ['Banana', 'Pêra', ['Uva Roxa','Uva Verde']]

 console.log(frutas[2][0].length)

 const instrumentos1 = ['Guitarra', 'Baixo', 'Violão']

 instrumentos1.sort()

 const idade = [32, 21, 33, 43, 1, 12, 8]
 console.log(idade)
 console.log(instrumentos1)

 const carros = ['Ford', 'Fiat', 'VW']
 carros.unshift('kia', 'Ferrari')
 carros.push ('Parati', 'Gol')

 console.log(carros)

 console.log(carros.splice(2,0, 'Fusca'))
 console.log(carros )