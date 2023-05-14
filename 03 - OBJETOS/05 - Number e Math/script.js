console.log(Number.isNaN('re'))

console.log(Number.isInteger(20))
console.log(Number.isInteger(20.6))

console.log(parseFloat('2315521235'))
console.log(parseFloat('100 reis'))
console.log(parseInt('2315521235.99'))


const preco = 10.32323
console.log(+preco.toFixed())

let valor = 48.49
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(valor)

const aleatoria = Math.floor(Math.random() * 10)
console.log(aleatoria)