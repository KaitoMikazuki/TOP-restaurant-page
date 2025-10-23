import "./styles.css";
import {loadHomePage} from "./homepage.js"
import {loadMenu} from "./menu.js"
console.log("Hello world")

const content = document.getElementById("content");
const home = document.getElementById("logo");
const menu = document.getElementById("menu");

content.addEventListener("DOMContentLoaded", loadHomePage(content));

// Logo clicked
home.addEventListener("click", function(){
    clearPage(content);
    loadHomePage(content);
})

menu.addEventListener('click', function(){
    clearPage(content);
    loadMenu(content);
})


// WHEN PAGE LOADED TRIGGER HOMEPAGE.JS
// I might need to import every svg

function clearPage (content){
    content.innerHTML = "";
}