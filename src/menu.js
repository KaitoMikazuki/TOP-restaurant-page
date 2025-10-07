const FoodItem = function(name, price, id, description){
    let item = {}
    item.name = name;
    item.price = price;
    item.id = id;
    item.description = description;
    return item

}

const menu_items = []
menu_items.push(FoodItem("Jan Tayo!", 139, 1, "Garlic Parmesan + Curry Ketchup"));
menu_items.push(FoodItem("Potatol's Paborito", 139, 2, "Soy Garlic + Garlic Mayonaise"));
menu_items.push(FoodItem("Kynan's Best", 139, 3, "Buffalo + Cheese"));
//I lowkey want to use sheets with this


export function loadMenu(content){
    console.log(menu_items);
}

function loadFood(){

}