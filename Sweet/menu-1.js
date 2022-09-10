

const recipemenu = document.querySelectorAll(".js-menu");

function toggle() {
  const content = this.nextElementSibling;
  this.classList.toggle("is-active");
  content.classList.toggle("is-open");
}

for (let i = 0; i < recipemenu.length; i++) {
  recipemenu[i].addEventListener("click", toggle);
}


// Header //
let menu = document.querySelector('#icon img');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  navbar.classList.toggle('active');
}


  