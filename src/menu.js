export const menuLoad = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const heroText = document.createElement("h1");
  heroText.classList.add("heroText");
  heroText.textContent = "Menu";
  content.appendChild(heroText);

  //first menu item
  let card = document.createElement("div");
  card.classList.add("card");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  h2.textContent = "Smash Burger";
  p.textContent =
    "A wagyu beef burger made from the finest beef in the land of OOO";
  card.appendChild(h2);
  card.appendChild(p);
  content.appendChild(card);

  //second menu item
  card = document.createElement("div");
  card.classList.add("card");
  h2 = document.createElement("h2");
  p = document.createElement("p");
  h2.textContent = "Bob's signature";
  p.textContent = "A 90,000 pound hamburger made inside of a burning star ";
  card.appendChild(h2);
  card.appendChild(p);
  content.appendChild(card);
};
