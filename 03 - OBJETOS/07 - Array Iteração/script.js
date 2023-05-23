// const carros =['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) =>{
//     console.log(item, index, array)
// })

// const li = document.querySelectorAll('li');

// li.forEach(i => i.classList.add('ativa'));

// li.forEach(function(item){
//   item.classList.add('ativa');
// })

// const retornoForech = li.forEach(item, index => {
//   item.classList.add('ativa' + index)
  
// });

// const carros = ['Ford', 'Fiat', 'Honda'];

// const novaArray = carros.map((item, index, array)=>{
//   return item.toUpperCase();
// })

// const numeros = [2, 4, 6, 8, 10, 12, 14];

// const numerosX3 = numeros.map(n => n * 3);

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   }
// ]

// const tempoAulas = aulas.map(aula => aula.min);
// console.log(tempoAulas);

// const nomeAulas2 = function(aula){
//   return aula.nome;
// }

// //este codigo faz a mesma coisa que o de cima
// const nomeAulas3 = aula => aula.nome;

// const aulas4 = [10, 25, 30]


// const reduceAulas = aulas4.reduce((acumulador, item,index, array)=>{
//   return acumulador + item
// },0)

// const numeros = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros.reduce((anterior, atual)=>{
//   if(anterior > atual){
//     return anterior;
//   }else{
//     atual
//   }
// },0)

// //este codigo faz a mesma coisa que o de cima
// const maiorNumero2 = numeros.reduce((anterior, atual)=>{
//   return anterior > atual ? anterior : atual;
// },0)

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//   acumulador[index] = atual.nome;
//   return acumulador;
// }, {})


// const frutas = ['Banana', 'Pêra', 'Uva'];

// const temUva = frutas.some((item)=>{
//   return item === 'Uva';
// })

// const every = frutas.every((fruta)=>{
//   return fruta === 'Uva'
// })

// console.log(every)


// console.log(temUva)

// const numeros = [6, 43, 22, 88, 101, 29];

// const maiorQue3 = numeros.every(n => n > 3);

const frutas2 = ['Banana', 'Pêra', 'Uva', ''];

const indexUva = frutas2.findIndex((item)=>{
  return item === 'Uva';
})

const frutas3 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const frutasd3 = frutas3.filter((item)=>{
  return item
})

const aulas = [
  { nome: 'HTML 1',
   min: 15 },
  { nome: 'HTML 2',
    min: 10 },
  { nome: 'CSS 1',
    min: 20 },
  { nome: 'JS 1',
    min: 25 },
]
const maiores15 = aulas.filter((aula)=>{
  return aula.min >=15
})