// const div = document.querySelector('div')
const div = document.querySelector('[data-cor]')

//add data attribute
div.dataset.height = 1000

//remove data attribute
delete div.dataset.width


console.log(div.dataset)