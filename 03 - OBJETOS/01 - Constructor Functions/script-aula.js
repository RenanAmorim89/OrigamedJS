function Carro(marcaAtribuida, precoInicial){
const taxa = 1.2
const precoFinal = precoInicial * taxa
this.marca = marcaAtribuida
this.preco = precoFinal
}

const mazda = new Carro('Mazda', 5000)

//Poderia ser feito dessa forma, para ter acesso
// a taxa.
function Carro2(marca, precoIni){
  this.taxa = 1.2
  const precoFin = precoIni * this.taxa
  this.marca = marca,
  this.preco = precoFin

}
const corcel = new Carro2('Corsel', 2000)