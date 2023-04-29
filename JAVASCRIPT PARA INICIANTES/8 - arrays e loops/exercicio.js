// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let anoBrasilGanhouCopa = [1959, 1962, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (let i = 0; i < anoBrasilGanhouCopa.length; i++) {}
console.log(`O brasil ganhou a copa de $ {anoBrasilGanhouCopa[i]}`);

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
let frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFruta = frutas[frutas.length - 1];
