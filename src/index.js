import "./styles.css";
import {loadPage} from "./homepage.js"
console.log("Hello world")

let content = document.getElementById("content");
content.addEventListener("DOMContentLoaded", loadPage(content));

// WHEN PAGE LOADED TRIGGER HOMEPAGE.JS
// I might need to import every svg

function clearPage (content){
    content.innerHTML = "";
}