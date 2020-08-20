// document.documentElement.setAttribute('data-theme', 'dark');
window.onscroll = () => {stickyNav()};

const nav = document.getElementById('nav');
const sticky = nav.offsetTop;

function stickyNav() {
  if(window.pageYOffset >= sticky) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}