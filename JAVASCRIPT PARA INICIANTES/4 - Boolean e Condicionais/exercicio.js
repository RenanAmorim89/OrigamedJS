// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

let minhaIdade = 33;
let idadeEsposa = 32;
if (minhaIdade > idadeEsposa) {
  console.log("É maior");
} else if (minhaIdade === idadeEsposa) {
  console.log("É igual");
} else minhaIdade < idadeEsposa;
{
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
let expressao = 5 - 2 && 5 - " " && 5 - 2;
3;

// Verifique se as seguintes variáveis são Truthy ou Falsy
let nome = "Andre";
let idade = 28;
let possuiDoutorado = false;
let empregoFuturo;
let dinheiroNaConta = 0;

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
let brasil = 207;
let china = 1340;

if (brasil === china) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
//falso

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
