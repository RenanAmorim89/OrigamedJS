/*
function areaQuadrado() {
  console.log("Função ativa");
}

areaQuadrado();
*/

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

let total = 5 * pi(); // 15,7

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}
console.log(imc(78, 1.76));

function corFavorita(cor) {
  if (cor === "Azul") {
    return "Eu gosto do céu";
  } else if (cor === "Verde") {
    return "Eu gosto de Mato";
  } else {
    return "Eu não gosto de cor";
  }
}

addEventListener("click", function () {
  console.log("Oi");
});
// isso é a mesma coisa disso:
function mostraConsole() {
  console.log("oi");
}
addEventListener("click", mostraConsole);

function imc2(peso2, altura2) {
  const imc2 = peso2 / (altura2 * altura2);
  console.log(imc2);
}

imc2(80, 1.76); // |Retorna o imc
//console.log(imc2(80, 1.76)); // retona imc e undefined

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Porfavor preencha com numero";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
terceiraIdade();

function faltaVisitar(paisesVisitados) {
  let totalPaises = 193;

  return `Falta visitar ${totalPaises - paisesVisitados} paises`;
}

faltaVisitar(3);

let profissao = "Vendedor";

function dados() {
  let nome = "Renan";
  let idade = 33;
  function outrosDados() {
    let endereco = "Maringa";
    let idade = 34;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados()); //
outrosDados(); //retorna um erro
