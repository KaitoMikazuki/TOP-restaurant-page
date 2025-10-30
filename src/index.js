import "./styles.css";
import {loadHomePage} from "./homepage.js"
import {loadMenu} from "./menu.js"
console.log("Hello world")

const content = document.getElementById("content");
const home = document.getElementById("logo");

// onLoad
document.addEventListener("DOMContentLoaded", function(){
    loadHomePage(content);
    document.body.addEventListener("click", eventHandler)
});

// Logo clicked
home.addEventListener("click", function(){
    clearPage();
    loadHomePage(content);
})


const orderClasses = ["order"]
function eventHandler(event){
    if (!event){
        console.log("eventHandler was triggered with a missing event parameter")
    }
    const target = event.target
    
    if (target.classList.contains("menu")){
        displayMenu();
    }

    else if (orderClasses.some((r) => target.classList.contains(r))){
        window.open("https://www.instagram.com/fry.n.fly?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==")
    }

}

function clearPage (){
    content.innerHTML = "";
}

function displayMenu(){
    clearPage();
    loadMenu(content);
}


    