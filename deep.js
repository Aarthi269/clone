const users = [
    { name: "Alice", email: "alice@example.com", age: 25, role: "admin" },
    { name: "Bob", email: "bob@example.com", age: 30, role: "user" },
];

const products = [
    { name: "Laptop", inStock: true, price: 999, onSale: false },
    { name: "Mouse", inStock: true, price: 25, onSale: true },
    { name: "Keyboard", inStock: false, price: 75, onSale: false },
];

function doesValueExist(array, value) {
    return array.includes(value);
}

function findUserByEmail(users, email) {
    return users.find(user => user.email === email);
}

function areAllItemsInStock(products) {
    return products.every(product => product.inStock);
}

function logEachItemWithIndex(array) {
    array.forEach((item, index) => {
        console.log(`${index}: ${item}`);
    });
}

function getUsersAboveAge(users, age) {
    return users.filter(user => user.age > age);
}

function capitalizeWords(words) {
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}

function sumCartTotal(products) {
    return products.reduce((total, product) => total + product.price, 0);
}

function getProductNames(products) {
    return products.map(product => product.name);
}

function isAnyProductOnSale(products) {
    return products.some(product => product.onSale);
}

function getUsersByRole(users, role) {
    return users.filter(user => user.role === role);
}

console.log(doesValueExist(["apple", "banana"], "banana")); 
console.log(findUserByEmail(users, "alice@example.com")); 
console.log(areAllItemsInStock(products)); 
logEachItemWithIndex(["JS", "HTML", "CSS"]);

console.log(getUsersAboveAge(users, 26)); 
console.log(capitalizeWords(["hello", "world"])); 
console.log(sumCartTotal(products)); 
console.log(getProductNames(products)); 
console.log(isAnyProductOnSale(products)); 
console.log(getUsersByRole(users, "admin"));
