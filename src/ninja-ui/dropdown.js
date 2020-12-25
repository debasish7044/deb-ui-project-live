import './styles/dropdown.css';


class Dropdown {
  constructor(container){
    this.container = container;
    this.trigger = this.container.querySelector('.trigger')
    this.content = this.container.querySelector('.content')
  }
  init(){
    this.trigger.addEventListener('click',() => {
      this.trigger.classList.toggle('active')
      this.content.classList.toggle('active')
    })
  }
}

export {Dropdown as default}


























