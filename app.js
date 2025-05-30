const menu = document.querySelector('#Sun');
const menuLinks = document.querySelector('.navigationContainer');

menu.addEventListener('click', () => {
  if (menuLinks.classList.contains('active')) {
    menuLinks.classList.add('closing');
    menuLinks.addEventListener('animationend', menuClose, {once: true})
  } else {
    menuLinks.classList.add('active');
  }
});

function menuClose() {
  menuLinks.classList.remove('active', 'closing');
}