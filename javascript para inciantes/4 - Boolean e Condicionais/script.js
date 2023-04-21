let possuiGraduação = false;

if (possuiGraduação) {
  console.log("É verdadeiro");
} else {
  console.log("É falso");
}
// retorna Possui Graduação e não executa o else

let possuiPet = true;
let possuiDog = true;

if (possuiPet) {
  console.log("É verdadeito");
} else if (possuiDog) {
  console.log("Pssui Dog");
} else {
  console.log("Não possui nada");
}

let nome = "Renan";
if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

if (!possuiGraduação) {
  console.log(possuiGraduação);
  console.log("Não possui graduação");
}

let x = 10;
console.log(x !== 11);

if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

let condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log("Verdadeiro", condicional);
} else {
  console.log("Falso");
}

let condicional2 = 5 - 10 || (5 - 5 && 10 - 2);
console.log(condicional2);

let corFavorita = "Verde";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu");
    break;

  case "Amarelo":
    console.log("Olhe para o sol");
    break;

  case "Azul":
    console.log("Olhe para a floresta");
    break;
  default:
    console.log("Feche os olhos.");
}
