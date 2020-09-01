// Constants
const MEDIA_SMALL = 600;
let isSmallMode = false;

const navsMax = document.getElementsByClassName('nav-max');
const navsMin = document.getElementsByClassName('nav-min');

// Toggle Hidden Attributes
function adjustHiddenMode(element, isHidden) { element.hidden = !isHidden; }

// Check media size
function adjustScreenMode() {
  if(window.innerWidth <= MEDIA_SMALL) { isSmallMode = true;} 
  else { isSmallMode = false; }
  for(const element of navsMin) adjustHiddenMode(element, isSmallMode);
  for(const element of navsMax) adjustHiddenMode(element, !isSmallMode);
}

window.addEventListener('resize', adjustScreenMode);

