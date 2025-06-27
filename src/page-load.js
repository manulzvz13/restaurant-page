import pizzaBanner from './assets/img/pizza-banner.jpg';

export default function loadHomePage() {
  const content = document.querySelector("#content");

  const homepage = document.createElement("div");
  homepage.className = "homepage";

  const banner = document.createElement("div");
  banner.className = "banner";

  // Clear previous content (optional, for tab switching)
  content.innerHTML = "";

  const img = document.createElement("img");
  img.src = pizzaBanner;
  img.alt = "pizza banner";

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Pizza Palace!";

  const description = document.createElement("p");
  description.textContent = "The best pizza in town!";

  banner.appendChild(img);
  banner.appendChild(headline);
  homepage.appendChild(banner);
  homepage.appendChild(description);

  content.appendChild(homepage);
}

