import {pizzaSVG} from '../assets/svg/pizza.js';
import {friesSVG} from '../assets/svg/fries.js';
import {cokeSVG} from '../assets/svg/coke.js';

export default function loadMenuPage() {
  const content = document.querySelector("#content");

  const menupage = document.createElement("div");
  menupage.className = "menu";

  // Clear previous content (optional, for tab switching)
  content.innerHTML = "";

  // The classic
  const menuItem = document.createElement("div");
  menuItem.className = "menu-item";

  const menuPrincipal = document.createElement("h1");
  menuPrincipal.textContent = "The Pizza";

  const description = document.createElement("p");
  description.className = "description"
  description.textContent = "The best, the classic pepperoni pizza, all you have ever wished in a pizza";

  const menuImg = document.createElement("div");
  menuImg.className = "menuImg";
  menuImg.innerHTML = pizzaSVG;

  // The fries
  const menuItemTwo = document.createElement("div");
  menuItemTwo.className = "menu-item";

  const menuPrincipalTwo = document.createElement("h1");
  menuPrincipalTwo.textContent = "The fries";

  const descriptionTwo = document.createElement("p");
  descriptionTwo.className = "description"
  descriptionTwo.textContent = "The fries you want to eat when you are not hungry";

  const menuImgTwo = document.createElement("div");
  menuImgTwo.className = "menuImg";
  menuImgTwo.innerHTML = friesSVG;

  // The coke
  const menuItemThree = document.createElement("div");
  menuItemThree.className = "menu-item";

  const menuPrincipalThree = document.createElement("h1");
  menuPrincipalThree.textContent = "The coke";

  const descriptionThree = document.createElement("p");
  descriptionThree.className = "description"
  descriptionThree.textContent = "The coke you were waiting for all your life";

  const menuImgThree = document.createElement("div");
  menuImgThree.className = "menuImg";
  menuImgThree.innerHTML = cokeSVG;

  menuItem.appendChild(menuPrincipal);
  menuItem.appendChild(description);
  menuItem.appendChild(menuImg);
  menuItemTwo.appendChild(menuPrincipalTwo);
  menuItemTwo.appendChild(descriptionTwo);
  menuItemTwo.appendChild(menuImgTwo);
  menuItemThree.appendChild(menuPrincipalThree);
  menuItemThree.appendChild(descriptionThree);
  menuItemThree.appendChild(menuImgThree);

  menupage.appendChild(menuItem);
  menupage.appendChild(menuItemTwo);
  menupage.appendChild(menuItemThree);

  content.appendChild(menupage);
}

