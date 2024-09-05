import "./styles.css";
import { menuLoad } from "./menu";
import { load } from "./pageLoad";
import { contactLoad } from "./contact";

load();

const home = document.querySelector(".home");
home.addEventListener("click", function () {
  load();
});

const menu = document.querySelector(".menu");
menu.addEventListener("click", function () {
  menuLoad();
});

const contact = document.querySelector(".contact");
contact.addEventListener("click", function () {
  contactLoad();
});
