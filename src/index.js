
import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tabs';
import Snackbar from './ninja-ui/snackbar';

const tooltip = new Tooltip (document.querySelector('.tooltip'))
tooltip.init();


const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown)
  instance.init();
})


const tabs = new Tabs (document.querySelector('.tabs'))
tabs.init();



const popup = new Snackbar();
popup.init();

const button = document.querySelector('.snackbar-trigger')

button.addEventListener('click', () => {
  popup.message('I have been Clicked :)')
})











