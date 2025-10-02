export function loadPage() {
    console.log("homepage.js loaded")
    if (!Document){
        alert("loadPage function does not recognize a document");
        return 1
    }
    const homepage = document.createElement("div");
    homepage.classList.add("homepage");
    content.appendChild(homepage);

    // This section is nested inside homepage
    const hero = document.createElement("div");
    hero.classList.add("hero");
    homepage.appendChild(hero);
    
    // This section is nested inside hero
    const header = document.createElement("h1");
    header.textContent = "MAPAPALIPAD KA SA SARAP!";

    const text = document.createElement("p");
    text.textContent = "For only ₱139, you can indulge in our very own JAN TAYO, POTATOL’S PABORITO, and KYNAN’S BEST—layered to perfection and coated with iconic international flavors! See you there! 🍗🍟🪽";


    const coa = document.createElement("div");
    coa.classList.add("coa");
        let button = document.createElement("button");
        button.classList.add("button")
        button.textContent = "Pre-order";
        let menu = document.createElement("button");
        menu.textContent = "View Menu";
        coa.append(button, menu);

    hero.append(header, text, coa);
    
        
}