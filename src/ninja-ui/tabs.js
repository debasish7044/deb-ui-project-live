import './styles/tabs.css';


class Tabs{
  constructor(container){
    this.container = container,
    this.triggers = document.querySelectorAll('.trigger');
    this.contents = document.querySelectorAll('.content');
  }

  init(){
    this.triggers.forEach(trigger => {
      trigger.addEventListener('click', event => {
        if(event.target.tagName === "LI"){
          this.toogleTab(event);
          this.toogleContent(event)
        }
      })
    })
  }

  toogleTab(event){
     this.triggers.forEach(trigger => {
       trigger.classList.remove('active')
       event.target.classList.add('active')
     })
  }

  toogleContent(event){
    this.contents.forEach(content => {
      content.classList.remove('active');
    })
    const selector = event.target.getAttribute('data-target');
    const content =  this.container.querySelector(selector);
    
    content.classList.add('active');
    
  }
}


export {Tabs as default}













