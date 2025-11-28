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

// SOCIAL MEDIA ICONS
document.querySelector(".contact").addEventListener("click", function (event){
    const target_id = event.target.closest('li').id
    console.log(target_id)

    const links = {
        facebook: "https://www.facebook.com",
        instagram:"https://www.instagram.com/fry.n.fly?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        phone: "tel: +639999999999",
    }

    if (links[target_id]){
        window.open(links[target_id])
    }
})

// Logo clicked
home.addEventListener("click", function(){
    clearPage();
    loadHomePage(content);
})


function eventHandler(event){
    const orderClasses = ["order"]
    if (!event){
        console.log("eventHandler was triggered with a missing event parameter")
    }
    const target = event.target
    
    if (target.classList.contains("menu")){
        displayMenu();
    }

    else if (orderClasses.some((r) => target.classList.contains(r))){
        window.open("https://www.instagram.com/fry.n.fly?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank");
    }

}

function clearPage (){
    content.innerHTML = "";
}

function displayMenu(){
    clearPage();
    loadMenu(content);
}


    