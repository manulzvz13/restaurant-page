export default function loadAboutPage() {
  const content = document.querySelector("#content");

  const aboutpage = document.createElement("div");
  aboutpage.className = "about";

  // Clear previous content (optional, for tab switching)
  content.innerHTML = "";

  // The classic
  const contactContainer = document.createElement("div");
  contactContainer.className = "contactContainer";

  const contactHeading = document.createElement("h1");
  contactHeading.textContent = "Where to find us?";

  const description = document.createElement("p");
  description.className = "description"
  description.textContent = "At XXX XXX XXX location from Monday to Friday";

  contactContainer.appendChild(contactHeading);
  contactContainer.appendChild(description);


  aboutpage.appendChild(contactContainer);

  content.appendChild(aboutpage);
}

