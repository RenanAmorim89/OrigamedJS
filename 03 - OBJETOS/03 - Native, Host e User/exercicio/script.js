// Liste 5 objetos nativos
Object;
String
Array
Function
Number

// Liste 5 objetos do browser
Window
history
Document
HTMLAllCollection
NodeList

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if(typeof window.onafterprint !== 'undefined'){
  console.log('Existe')

}

if(typeof document.adoptNode !== 'undefined'){
  console.log('Existe')
}else{
  console.log('Não Existe')
}