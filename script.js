// Toggle the active class on the navbar when the menu button is clicked
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => 
{
  navbar.classList.toggle('active');
}
