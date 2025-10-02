console.log("Hello wrld")

import "./styles.css";
import {loadPage} from "./homepage.js"

let contentId = document.getElementById("content");
contentId.addEventListener("DOMContentLoaded", loadPage())

// WHEN PAGE LOADED TRIGGER HOMEPAGE.JS
// I might need to import every svg