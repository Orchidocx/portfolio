const skillsBtn = document.getElementById('about-skills-btn');
const educationBtn = document.getElementById('about-education-btn');
const personalBtn = document.getElementById('about-personal-btn');
const aboutBtns = [skillsBtn, educationBtn, personalBtn];
let currentActive = skillsBtn;

function changeActive(target) {
  if(currentActive !== target) {
    currentActive.classList.remove('about-btn-active');
    target.classList.add('about-btn-active');
    currentActive = target;
  }
}

aboutBtns.forEach(btn => btn.addEventListener('click', () => changeActive(btn)));