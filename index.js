const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};
function displayMenuItems(menu) {
    const menuContainer = document.getElementById("menu");
    menuContainer.innerHTML = "";
    
    for (const [category, items] of Object.entries(menu)) {
            const categoryElement = document.createElement("h2");
            categoryElement.textContent = category;
            menuContainer.appendChild(categoryElement);
            const listElement = document.createElement("ul");

        items.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;

            listItem.addEventListener('click', () => {
                addToOrder(item);
            });

            listElement.appendChild(listItem);
        });
            menuContainer.appendChild(listElement);
        }
};
function addToOrder(itemName) {
    console.log(`${itemName} added to the order.`);

    const orderItemsList = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");

    const listItem = document.createElement("li");
    listItem.textContent = itemName;

    orderItemsList.appendChild(listItem);

    const itemPrices = {
        "Garlic Bread": 30.99,
        "Bruschetta": 24.99,
        "Margherita Pizza": 130.00,
        "Spaghetti Carbonara": 210.00,
        "Tiramisu": 45.00,
        "Cheesecake": 95.97
    };
    const itemPrice = itemPrices[itemName] || 0;

    let currentTotal = parseFloat(orderTotalElement.textContent.replace('Total: $', '')) || 0;
    currentTotal += itemPrice;

    orderTotalElement.textContent = `Total: $${currentTotal.toFixed(2)}`;
}
function initMenuSystem(menu) {

    displayMenuItems(menu);
}
initMenuSystem(menu);