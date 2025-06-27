import "./styles.css";
import pizzaBanner from "./assets/img/pizza-banner.jpg";

const content = document.querySelector("#content");
const homepage = document.querySelector(".homepage");

const banner = document.createElement("div");
banner.className = "banner"
homepage.appendChild(banner);

const bannerImg = document.createElement("img");
bannerImg.src = pizzaBanner;
bannerImg.alt = "pizza banner";
banner.appendChild(bannerImg);

const headline = document.createElement("h1");
headline.textContent = "The best pizza in town!";
headline.className = "headline";
banner.appendChild(headline);

const bannerText = document.createElement("p");
bannerText.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum a tenetur placeat reprehenderit ex? Doloribus exercitationem, assumenda quas, quidem, velit debitis obcaecati odit est perspiciatis fugiat quod modi. Labore, ea!";
bannerText.className = "text";
homepage.appendChild(bannerText);



