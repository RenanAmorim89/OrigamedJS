const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-content section')
tabContent[0].classList.add('ativo')


if(tabContent.length && tabContent.length){
  function activeTab(index){
    tabContent.forEach((section)=>{
      section.classList.remove('ativo')
    })
    tabContent[index].classList.add('ativo')
  }

  tabMenu.forEach((itemMenu, index)=>{
    itemMenu.addEventListener('click',()=>{
      activeTab(index)

    })
  })
}