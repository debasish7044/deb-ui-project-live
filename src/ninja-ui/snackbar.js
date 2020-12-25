import './styles/snackbar.css';

class Snackbar{
  constructor(){
    this.body = document.querySelector('body')
    this.snackBar = document.createElement('div');
  }
  init(){
    this.snackBar.classList.add('snackbar')
    this.body.appendChild(this.snackBar)
   
  }
  message(message){
    this.snackBar.textContent = message;
    this.snackBar.classList.add('active')
    
    setTimeout(() => {
      this.snackBar.textContent = '';
      this.snackBar.classList.remove('active')
    }, 4000);
  }
}


export {Snackbar as default}