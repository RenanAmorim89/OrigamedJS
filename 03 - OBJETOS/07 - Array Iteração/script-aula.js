/*[].FOREACH()
[].forEach(callback(itemAtual, index, array)) a função de callback é executada para 
cada item da array. Ela possui três argumentos, 
itemAtual (valor do item da array), index (index do valor na array) e array (array original).
*/
const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function(item, index, arrray){
  console.log(item.toUpperCase());
});

//com arrow function
carros.forEach((item, index, arrray) =>{
  console.log(item.toUpperCase());
})
//o metodo sempre retorna undefined

//Arrow  Function
const li = document.querySelectorAll('li');
li.forEach(i => i.classList.add('ativa'));

li.forEach(function(item){
  item.classList.add('ativa');  
})

//Modificando a array original

//modificando a array original
//o terceiro argumento do callback é uma referencia direta e se modificado irá também modificar a array original.

const carros2 = ['Ford', 'Fiat', 'Honda'];
carros2.forEach((item, index, array)=>{
  array[index] = 'Carro' + item;
})
carros2; // ['CarroFord', 'CarroFiat', 'CarroHonda']
//é melhor utilizar o map para isso

/*
[].MAP()
[].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, 
retorna uma nova array com valores atualizados de acordo com o return de cada iteração.
*/
const carros3 = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros3.map((item)=>{
  return 'Carro' + item;
})

carros3; // ['Ford', 'Fiat', 'Honda']
newCarros; // ['CarroFord', 'CarroFiat', 'CarroHonda']

/*
VALOR RETORNADO
Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de 
qualquer função que não possui o return, será undefined.
*/
const carros4 = ['Ford', 'Fiat', 'Honda'];
const newCarros4 = carros4.map((item)=>{
  const novoValor = 'Carro' + item
})

newCarros4; // [undefined, undefined, undefined]  

/*
ARROW FUNCTION E [].MAP()
Uma Arrow Function de linha única e sem chaves irá retornar 
o valor após a fat arrow =>.
*/
const numeros = [2, 4, 6, 8, 10, 12, 14]
const numerosX3 = numeros.map(n => n * 3);

numerosX3; //[6, 12, 18, 24, 30, 36, 42]

/*
[].MAP() COM OBJETOS
Map pode ser muito útil para interagirmos com uma array de objetos,
onde desejamos isolar um valor único de cada objeto.
*/
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min)
// [15, 10, 20, 25]

const puxarNomes = aula => aula.nome;
const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

/*
[].REDUCE()
[].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array.
Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.
Na primeira iteração esse valor é o valorInicial que passamos como segundo argumento do reduce(), nas próximas iterações ele é o retorno da iteração anterior.
*/
const aulas2 = [10, 25, 30];  
const total1 = aulas2.reduce((acumulador, atual)=>{ 
return acumulador + atual
})
total1; //65

const total2 = aulas2.reduce((acc, cur) => acc + cur, 100)
total2; //165

/*
REDUCE PASSO A PASSO 1
O primeiro parâmetro do callback é o valor do segundo argumento 
passado no reduce(callback, inicial) durante a primeira iteração. Nas iterações 
seguintes este valor passa a ser o retornado pela anterior
*/
const aulas = [10, 25, 30];

// 1
aulas.reduce((0, 10) => {
  return 0 + 10;
}, 0); // retorna 10

// 2
aulas.reduce((10, 25) => {
  return 10 + 25;
}, 0); // retorna 35

// 3
aulas.reduce((35, 30) => {
  return 35 + 30;
}, 0); // retorna 65

/*
REDUCE PASSO A PASSO 2
Se não definirmos o valor inicial do acumulador, ele irá pular a primeira iteração e começara a partir da segunda. 
Neste caso o valor do acumulador será o valor do item da primeira iteração.
*/
const aulas = [10, 25, 30];

// 1
aulas.reduce((10, 25) => {
  return 10 + 25;
}) // retorna 35

// 2
aulas.reduce((35, 30) => {
  return 35 + 30;
}) // retorna 65

//MAIOR VALOR COM [].REDUCE()
const numeros4 = [10, 25, 60, 5, 35, 10];
const maiorValor = numeros4.reduce((anterior, atual)=>{
  return anterior < atual ? atual : anterior
})

maiorValor; //60

//PODEMOS RETORNAR OUTROS VALORES
const aulas4 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas4.reduce((acumulador, atual, index) => {
  acumulador[index] = atual4.nome;
  return acumulador;
}, {})

//passo a passo redulce
// passo a passo metodo reduce
// 1
aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
  {}[0] = 'HTML 1';
  return {0: 'HTML 1'};
}, {})

// 2
aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
  {0: 'HTML 1'}[1] = 'HTML 2';
  return {0: 'HTML 1', 1: 'HTML 2'};
}, {})

// 3
aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
  {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
  return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
}, {})

// 4
aulas.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
  {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
  return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
}, {})

// [].REDUCERIGHT()
// Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.

const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva


// [].SOME()
// [].some(), se pelo menos um return da iteração for truthy, ele retorna true.

const frutas = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas.some((fruta) => {
  return fruta === 'Uva';
}); // true

function maiorQue100(numero) {
  return numero > 100;
}
const numeros = [0, 43, 22, 88, 101, 2];
const temMaior = numeros.some(maiorQue100); // true

// [].EVERY()
// [].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

const frutas = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas.every((fruta) => {
  return fruta; // false
});

const numeros = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every(x => x > 3); // true

// [].FIND() E [].FINDINDEX()
// [].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.

const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas.findIndex((fruta) => {
  return fruta === 'Uva'; 
}); // 2

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.find(x => x > 45); // 88
COPIAR
// [].FILTER()
// [].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.

const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas.filter((fruta) => {
  return fruta; 
}); // ['Banana', 'Uva', 'Maçã']

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.filter(x => x > 45); // [88, 101]
COPIAR
FILTER EM OBJETOS
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulasMaiores = aulas.filter((aula) => { 
  return aula.min > 15;
});
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]