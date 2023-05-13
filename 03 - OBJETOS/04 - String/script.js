const comida = 'Pizza'
const agua = new String('Água')

console.log(comida.length)

const frase = 'A melhor comida'
console.log(frase[frase.length - 1])
 console.log(frase.charAt(frase.length - 1))

 const frase1 = 'A melhor linguagem é';
 const linguagem = 'javaScript'

 const fraseFinal = frase1 + linguagem
 // ou
 const fraseFinal2 = frase1.concat(linguagem, '!!')


 const fruta = 'Banana'
 const listaFrutas = 'Melancia, Banana, Laranja'

 cosole.log(listaFrutas.includes(fruta))// true
 fruta.includes(listaFrutas)

 cosole.log(fruta.startsWith('Ba'))
 cosole.log(fruta.endsWith('na'))

 const transacao1 = 'Deposito de Cliente';
 const transacao2 = 'Deposito de Fornecedor'
 const transacao3 = 'Taxa de Camisas'

 cosole.log(transacao1.slice(0, 3))

 cosole.log(fruta.indexOf('B'))
 cosole.log(fruta.lastIndexOf('n'))

 const preco = 'R$ 99,00'

 const listaPrecos = ['R$ 99','R$ 199', 'R$ 12000'];

 listaPrecos.forEach((item)=>{
  cosole.log(item.padStart(10, '-'))
 })

 const frase2 = 'ta'
 frase2.repeat(5)// tatatatata

 let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
 listaItens = listaItens.replace(/[ ]+/g, ', ')

 const arrayLista = listaItens.split(', ')

 const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';

 const htmlArray = htmlText.split('div')
 const novoHtml = htmlArray.join('section')

 cosole.log(htmlText)
 cosole.log(htmlArray)
 console.log(novoHtml)

 const frutasArray = ['Banana', 'Melancia', 'Laranja']

 const sexo1 = 'Feminino'
 const sexo2 = 'feminino'
 const sexo3 = 'FEMININO'

 cosole.log(sexo1.toLocaleLowerCase() === 'feminino')

 const valor = ' R$ 23.00 '
 valor.trim(); // '23.00'
 valor.trimStart();//'23.00 '
 valor.trimEnd();// ' 23.00'

