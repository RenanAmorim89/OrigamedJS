// const pessoa = new object({
//   nome: 'Renan'
// })

// console.log(pessoa.nome)

// const carro ={
//   init(marca){
//     this.marca = marca;
//   },
//   rodas: 4,
//   acelerar(){
//     return `${this.marca} + acelerou as ${this.rodas} rodas`;
//   },
  
//   buzinar(){
//     return this.marca + ' buzinou'
//   }
// }
// const honda = object.create(carro).init('Honda')

// console.log(honda.acelerar())

// const ferrari = object.create(carro).init('Ferrari')
// console.log(ferrari.acelerar())

// const funcaoAutomovel = {
//   acelerar(){
//     return 'acelerou'
//   },
//   buzinar(){
//     return 'buzinou'
//   }
// }

// const moto = {
//   rodas: 2,
//   capacete: true
// }

// Object.assign(moto, funcaoAutomovel)

// console.log(moto)

Object.defineProperties(moto, {
  rodas:{
    get(){
      return this._rodas
    },
    set(valor){
      this._rodas = valor * 4 + ' rodas'
    }
  }
})

console.log(moto.rodas = 2)