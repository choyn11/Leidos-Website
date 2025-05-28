const menu = document.querySelector('#Sun');
const menuLinks = document.querySelector('.navigationContainer');

menu.addEventListener('click', function() {
  menuLinks.classList.toggle('active');
});
