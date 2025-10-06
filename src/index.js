console.log("Hello wrld")

import "./styles.css";
import {loadPage} from "./homepage.js"

let content = document.getElementById("content");
    content.addEventListener("DOMContentLoaded", loadPage(content))

// WHEN PAGE LOADED TRIGGER HOMEPAGE.JS
// I might need to import every svg