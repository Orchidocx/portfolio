// Constants
// const LIGHT_THEME = 'light';
// const DARK_THEME = 'dark';
const MEDIA_SMALL = 600;
let isSmallMode = false;

const navAboutFull = document.getElementById('nav-about-full');
const navAboutMin = document.getElementById('nav-about-min');
const navProjectFull = document.getElementById('nav-project-full');
const navProjectMin = document.getElementById('nav-project-min');
const navContactFull = document.getElementById('nav-contact-full');
const navContactMin = document.getElementById('nav-contact-min');
const navFullList = [navAboutFull, navProjectFull, navContactFull];
const navMinList = [navAboutMin, navProjectMin, navContactMin];

// const nav = document.getElementById('nav');

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
window.addEventListener('resize', () => {
  adjustScreenMode();
})

