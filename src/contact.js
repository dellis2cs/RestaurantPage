export const contactLoad = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const heroText = document.createElement("h1");
  heroText.classList.add("heroText");
  heroText.textContent = "Contact Us";
  content.appendChild(heroText);

  //first card
  let card = document.createElement("div");
  card.classList.add("card");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  h2.textContent = "Email";
  p.textContent = "Bobsburg@yahoo.com";
  card.appendChild(h2);
  card.appendChild(p);
  content.appendChild(card);

  //second card
  card = document.createElement("div");
  card.classList.add("card");
  h2 = document.createElement("h2");
  p = document.createElement("p");
  h2.textContent = "Phone";
  p.textContent = "123-456-7890";
  card.appendChild(h2);
  card.appendChild(p);
  content.appendChild(card);
};
