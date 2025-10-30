const video_attributes = ["playsinline", "preload", "autoplay", "loop"]
import videoUrl from './assets/potatol.mp4'
import imageUrl from './assets/poatol.png'

export function loadHomePage(content) {
    console.log("homepage.js loaded")
    console.log(content)
    if (!Document){
        alert("loadPage function does not recognize a document");
        return 1
    }
    // Homepage is nested under content
    const homepage = document.createElement("div");
    homepage.classList.add("homepage");
    content.appendChild(homepage);

    // Hero  is nested inside homepage
    const hero = document.createElement("div");
    hero.classList.add("hero");
    homepage.appendChild(hero);
    
    // This section is nested inside hero - left side
    const header = document.createElement("h1");
    header.textContent = "MAPAPALIPAD KA SA SARAP!";

    const text = document.createElement("p");
    text.textContent = "For only ₱139, you can indulge in our very own JAN TAYO, POTATOL’S PABORITO, and KYNAN’S BEST—layered to perfection and coated with iconic international flavors! See you there! 🍗🍟🪽";

    const coa = document.createElement("div");
    coa.classList.add("coa");
        const button = document.createElement("button");
        button.classList.add("button");
        button.classList.add("order")
        button.textContent = "Pre-order";

        const menu = document.createElement("button");
        menu.textContent = "View Menu";
        menu.classList.add("menu")
        coa.append(button, menu);
    hero.append(header, text, coa);

    // This section is nested inside hero - right side
    const img = document.createElement("img");
    img.setAttribute("src",imageUrl)
    homepage.append(img);

    // Video which is under hero
    const video = document.createElement("video");
    video.muted = true;
    video.setAttribute("src", videoUrl);
    addAttributes(video_attributes, video);
    content.appendChild(video);        
}

function addAttributes(attributesList, video){
    attributesList.forEach((attribute) => video.setAttribute(attribute, ""));
}