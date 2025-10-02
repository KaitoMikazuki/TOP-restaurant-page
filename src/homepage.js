export function loadPage() {
    console.log("homepage.js loaded")
    if (!Document){
        alert("loadPage function does not recognize a document");
        return 1
    }
    let homepage = document.createElement("div");
    homepage.classList.add("homepage");
    content.appendChild(homepage);



}