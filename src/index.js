import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/main.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/about.css";

import loadHomePage from "./pages/home.js";
import loadMenuPage from "./pages/menu.js";
import loadAboutPage from "./pages/about.js"; 

// Manages active tab styling 
function setActiveTab(buttonId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    if (tab.id === buttonId) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}

// Tab switching logic
function addNavEvents() {
  document.querySelector('#home-btn').addEventListener('click', () => {
    loadHomePage();
    setActiveTab('home-btn');
  });

  document.querySelector('#menu-btn').addEventListener('click', () => {
    loadMenuPage();
    setActiveTab('menu-btn');
  });

  document.querySelector('#about-btn').addEventListener('click', () => {
    loadAboutPage();
    setActiveTab('about-btn');
  });
}

// Initial Page Load
function init() {
    addNavEvents();
    loadHomePage();
}

init();