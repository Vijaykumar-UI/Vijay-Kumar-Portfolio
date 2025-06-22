const menuBtn = document.getElementById('menu-btn');
  const navbar = document.querySelector('.header .navbar');
  menuBtn.onclick = () => {
    navbar.classList.toggle('active');
  };