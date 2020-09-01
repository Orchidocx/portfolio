const skillsBtn = document.getElementById('about-skills-btn');
const educationBtn = document.getElementById('about-education-btn');
const personalBtn = document.getElementById('about-personal-btn');
const aboutBtns = [skillsBtn, educationBtn, personalBtn];
const aboutInfo = document.getElementById('about-info');
let currentActive = skillsBtn;

// Show different content depending on which button clicked
function changeActive(target) {
  if(currentActive !== target) {
    const prevIndx = parseInt(currentActive.value);
    const targetIndx = parseInt(target.value);
    aboutInfo.children[prevIndx].hidden = true;
    aboutInfo.children[targetIndx].hidden = false;
    currentActive.classList.remove('about-btn-active');
    target.classList.add('about-btn-active');
    currentActive = target;
  }
}
aboutBtns.forEach(btn => btn.addEventListener('click', () => changeActive(btn)));