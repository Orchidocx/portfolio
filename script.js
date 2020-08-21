// Constants
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';
const MEDIA_SMALL = 600;
let isSmallMode = false;

const toggleIcon = document.getElementById('toggle-icon');
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const navAboutFull = document.getElementById('nav-about-full');
const navAboutMin = document.getElementById('nav-about-min');
const navProjectFull = document.getElementById('nav-project-full');
const navProjectMin = document.getElementById('nav-project-min');
const navContactFull = document.getElementById('nav-contact-full');
const navContactMin = document.getElementById('nav-contact-min');
const navFullList = [navAboutFull, navProjectFull, navContactFull];
const navMinList = [navAboutMin, navProjectMin, navContactMin];

// Sticky Nav
window.onscroll = () => {stickyNav()};

const nav = document.getElementById('nav');
let sticky = window.innerHeight;

function stickyNav() {
  if(window.pageYOffset >= sticky) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

function updateSticky() {
  sticky = window.innerHeight;
}

// Dark/Light Mode Switch
function switchTheme(evt)  {
  if(evt.target.checked) {
    toggleMode(DARK_THEME);
  } else {
    toggleMode(LIGHT_THEME);
  }
}

function toggleMode(color) {
  const isLight = 'light' === color;
  document.documentElement.setAttribute('data-theme', color);
  (isLight) ?
    toggleIcon.children[0].classList.replace('fa-moon', 'fa-sun') :
    toggleIcon.children[0].classList.replace('fa-sun', 'fa-moon');
  (isLight) ? toggleSwitch.checked=false : toggleSwitch.checked=true;
  localStorage.setItem('theme', color);
}

// Toggle Hidden Attributes
function adjustHiddenMode(element, isHidden) {
  element.hidden = !isHidden;
}

// Check media size
function adjustScreenMode() {
  if(window.innerWidth <= MEDIA_SMALL) {
    isSmallMode = true;
  } else {
    isSmallMode = false;
  }
  navMinList.forEach(element => {
    adjustHiddenMode(element, isSmallMode);
  });
  navFullList.forEach(element => {
    adjustHiddenMode(element, !isSmallMode);
  });
}
adjustScreenMode();
// Event Listeners
toggleSwitch.addEventListener('change', switchTheme);
window.addEventListener('resize', () => {
  adjustScreenMode();
  updateSticky();
})

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  toggleMode(currentTheme);
}