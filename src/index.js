import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/home.css";
import "./styles/menu.css";

import loadHomePage from "./pages/home.js";
import loadMenuPage from "./pages/menu.js";

// Tab switching logic
function addNavEvents() {
  document.querySelector('#home-btn').addEventListener('click', () => {
    loadHomePage();
  });

  document.querySelector('#menu-btn').addEventListener('click', () => {
    loadMenuPage();
  });

  document.querySelector('#about-btn').addEventListener('click', () => {
    // loadContact();
  });
}

// Initial Page Load
function init() {
    addNavEvents();
    loadHomePage();
}

init();