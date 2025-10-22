import kynan from "./assets/Kynan's best.png"
import jantayo from "./assets/jan tayo.png"
import potatol from "./assets/potatol's paborito.png"

const FoodItem = (name, price, id, description, imageCode) => ({name, price, id, description, imageCode})

const menu_items = []
menu_items.push(FoodItem("Jan Tayo!", 139, 1, "Crispy tenders and golden waffles coated in savory garlic parmesan, paired with tangy-sweet curry ketchup for a bold fusion twist.", jantayo));
menu_items.push(FoodItem("Potatol's Paborito", 139, 2, "A perfect balance of sweet and salty soy garlic glaze, complemented by creamy garlic mayo for rich, umami comfort.", potatol));
menu_items.push(FoodItem("Kynan's Best", 139, 3, "Spicy Buffalo heat meets melted cheesy goodness — a classic combo that’s bold, creamy, and irresistibly messy.", kynan));
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

    const divWrapper = document.createElement("div");
    divWrapper.classList.add("purchase")

    const price = document.createElement("span");
    price.textContent = `₱${foodItem.price}`;

    const button = document.createElement("button");
    button.textContent = "ORDER NOW";

    divWrapper.append(price, button);

    card.append(img, header, description, divWrapper);
    return card
}