import kynan from "./assets/Kynan's best.png"
import jantayo from "./assets/jan tayo.png"
import potatol from "./assets/potatol's paborito.png"

const FoodItem = (name, price, id, description, imageCode) => ({name, price, id, description, imageCode})

const menu_items = []
menu_items.push(FoodItem("Jan Tayo!", 139, 1, "Garlic Parmesan + Curry Ketchup", jantayo));
menu_items.push(FoodItem("Potatol's Paborito", 139, 2, "Soy Garlic + Garlic Mayonaise", potatol));
menu_items.push(FoodItem("Kynan's Best", 139, 3, "Buffalo + Cheese", kynan));
//I lowkey want to use sheets with this


export function loadMenu(content){
    console.log(`The menu items are the following objects: ${menu_items}`);
    const menu = document.createElement("div");
    menu.classList.add("items")

    for (let i = 0; i < menu_items.length; i++){
        const item = loadCard(menu_items[i]);
        menu.appendChild(item)
    }
    content.append(menu);
}


function loadCard(foodItem){
    const card = document.createElement("div");
    card.classList.add("card");
    
    const img = document.createElement("img");
    img.setAttribute("src", foodItem.imageCode);

    const header = document.createElement("h3");
    header.textContent = foodItem.name;

    const description = document.createElement("p");
    description.textContent = foodItem.description;

    const price = document.createElement("span");
    price.textContent = foodItem.price;

    const button = document.createElement("button");
    button.textContent = "Order now";

    card.append(img, header, description, price, button);
    return card
}