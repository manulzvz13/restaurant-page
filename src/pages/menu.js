// In menu.js
import { pizzaSVG } from '../assets/svg/pizza.js';
import { friesSVG } from '../assets/svg/fries.js';
import { cokeSVG } from '../assets/svg/coke.js';

// Helper function to create a menu item div
function createMenuItem(title, descriptionText, svgContent) {
  const itemDiv = document.createElement("div");
  itemDiv.className = "menu-item";

  const itemTitle = document.createElement("h1");
  itemTitle.textContent = title;

  const itemDescription = document.createElement("p");
  itemDescription.className = "description";
  itemDescription.textContent = descriptionText;

  const itemImgDiv = document.createElement("div");
  itemImgDiv.className = "menuImg";
  itemImgDiv.innerHTML = svgContent; // Inject the SVG string

  itemDiv.appendChild(itemTitle);
  itemDiv.appendChild(itemDescription);
  itemDiv.appendChild(itemImgDiv); // Append the SVG div

  return itemDiv;
}

export default function loadMenuPage() {
  const content = document.querySelector("#content");
  content.innerHTML = ""; // Clear previous content

  const menupage = document.createElement("div");
  menupage.className = "menu"; // This will be the main container for menu items

  menupage.appendChild(createMenuItem(
    "The Pizza",
    "The best, the classic pepperoni pizza, all you have ever wished in a pizza",
    pizzaSVG
  ));
  menupage.appendChild(createMenuItem(
    "The fries",
    "The fries you want to eat when you are not hungry",
    friesSVG
  ));
  menupage.appendChild(createMenuItem(
    "The coke",
    "The coke you were waiting for all your life",
    cokeSVG
  ));

  content.appendChild(menupage);
}