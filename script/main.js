let burger = document.querySelector('#nav-btn');
let menu = document.querySelector('.topbar__nav');
burger.addEventListener('click', navAction)

function navAction() {
  menu.classList.toggle('topbar__nav--hidden');
  
  if( menu.classList.contains('topbar__nav--hidden')) {
    burger.innerHTML = '&#9776;';
  } else {
    burger.innerHTML = '&#10006;';
  }
}