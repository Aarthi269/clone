const users = [
    { name: "Alice", email: "alice@example.com", age: 25, role: "admin" },
    { name: "Bob", email: "bob@example.com", age: 30, role: "user" },
];

const products = [
    { name: "Laptop", inStock: true, price: 999, onSale: false },
    { name: "Mouse", inStock: true, price: 25, onSale: true },
    { name: "Keyboard", inStock: false, price: 75, onSale: false },
];

// Function definitions
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

// Function calls
console.log(doesValueExist(["apple", "banana"], "banana")); // true
console.log(findUserByEmail(users, "alice@example.com")); // { name: "Alice", ... }
console.log(areAllItemsInStock(products)); // false
logEachItemWithIndex(["JS", "HTML", "CSS"]);

console.log(getUsersAboveAge(users, 26)); // [ { name: "Bob", ... } ]
console.log(capitalizeWords(["hello", "world"])); // ["Hello", "World"]
console.log(sumCartTotal(products)); // 999 + 25 + 75 = 1099
console.log(getProductNames(products)); // ["Laptop", "Mouse", "Keyboard"]
console.log(isAnyProductOnSale(products)); // true
console.log(getUsersByRole(users, "admin")); // [ { name: "Alice", ... } ]
