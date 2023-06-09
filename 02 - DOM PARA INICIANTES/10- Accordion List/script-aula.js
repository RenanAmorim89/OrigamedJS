function initTabNav(){
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
}
initTabNav()

function initAccordion(){  
  const accordionList = document.querySelectorAll(".js-accordion dt")
  const activeClass = 'ativo'

  if(accordionList){
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)

    function activeAccordion(event){
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }

    accordionList.forEach((item) =>{
      item.addEventListener('click', activeAccordion)
    })
}
}
initAccordion()