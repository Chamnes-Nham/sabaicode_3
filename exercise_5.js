function filterProductsByQuantity(products) {
    return products.filter(product => product.quantity == 0);
}

const products = [
    { name: "Coca Cola", price: 10, quantity: 5 },
    { name: "Pepsi", price: 20, quantity: 4 },
    { name: "Ize", price: 15, quantity: 0 },
    { name: "CafeCola", price: 25, quantity: 0 }
];

const filteredProducts = filterProductsByQuantity(products);
console.log(filteredProducts);
