const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

const toggleIcon = document.getElementById('toggle-icon');
const toggleSwitch = document.querySelector('input[type="checkbox"]');

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

// Event Listenerss
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  toggleMode(currentTheme);
}