import "./styles.css";
import {loadHomePage} from "./homepage.js"
import {loadMenu} from "./menu.js"
console.log("Hello world")

let content = document.getElementById("content");
content.addEventListener("DOMContentLoaded", loadHomePage(content));

// WHEN PAGE LOADED TRIGGER HOMEPAGE.JS
// I might need to import every svg

function clearPage (content){
    content.innerHTML = "";
}