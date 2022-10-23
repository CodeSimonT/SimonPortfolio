const wrapperMenu = document.querySelector('.wrapper-menu');
const heading = document.querySelector('ul');
const li = document.querySelectorAll("close");
const nav = document.querySelector("ul")



wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
  heading.classList.toggle('active');  
})

nav.addEventListener("click", (e) => {
  if(
    e.target.innerText == "Home" ||
    e.target.innerText == "Service" ||
    e.target.innerText == "Recent Projects" ||
    e.target.innerText == "About Me" ||
    e.target.innerText == "Contact"
  ) {
    wrapperMenu.classList.toggle('open')
    heading.classList.toggle('active')
  }
})