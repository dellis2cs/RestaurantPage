export const load = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const heroText = document.createElement("h1");
  heroText.classList.add("heroText");
  heroText.textContent = "Bob's Burger Bar";
  content.appendChild(heroText);

  //First card
  let card = document.createElement("div");
  card.classList.add("card");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  h2.textContent = "Welcome to Bob's";
  p.textContent =
    "We are a family owned 50's style burger diner committed to the service of our wonderful customers who have helped us grow to the company we are today";
  card.appendChild(h2);
  card.appendChild(p);
  content.appendChild(card);

  //second card
  card = document.createElement("div");
  card.classList.add("card");
  h2 = document.createElement("h2");
  p = document.createElement("p");
  h2.textContent = "Our mission";
  p.textContent =
    "Here at Bob's we are committed to fighting back against animal cruelty. So, we have opened an animal rescue foundation that is open  to any animals no matter the size where we will rehabilitate, match with foster families, even help with medical treatment";
  card.appendChild(h2);
  card.appendChild(p);
  content.appendChild(card);

  //third card
  card = document.createElement("div");
  card.classList.add("card");
  h2 = document.createElement("h2");
  p = document.createElement("p");
  h2.textContent = "Hours";
  p.textContent = "Sunday: 8am - 8pm";
  card.appendChild(h2);
  card.appendChild(p);
  p = document.createElement("p");
  p.textContent = "Monday: 6am - 6pm";
  card.appendChild(p);
  p = document.createElement("p");
  p.textContent = "Tuesday: 6am - 6pm";
  card.appendChild(p);
  p = document.createElement("p");
  p.textContent = "Wednesday: 6am - 6pm";
  card.appendChild(p);
  p = document.createElement("p");
  p.textContent = "Thursday: 6am - 10pm";
  card.appendChild(p);
  p = document.createElement("p");
  p.textContent = "Friday: 6am - 10pm";
  card.appendChild(p);
  p = document.createElement("p");
  p.textContent = "Saturday: 8am - 10pm";
  card.appendChild(p);
  content.appendChild(card);
};
