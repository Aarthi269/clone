function deepClone(obj, seen = new WeakMap()) {
    if (obj === null || typeof obj !== "object") return obj;

    // Handle circular references
    if (seen.has(obj)) return seen.get(obj);

    // Handle Date
    if (obj instanceof Date) return new Date(obj);

    // Handle Array
    if (Array.isArray(obj)) {
        const arrClone = [];
        seen.set(obj, arrClone);
        obj.forEach((item) => arrClone.push(deepClone(item, seen)));
        return arrClone;
    }

    // Handle Object
    if (obj instanceof Object) {
        const objClone = {};
        seen.set(obj, objClone);
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                objClone[key] = deepClone(obj[key], seen);
            }
        }
        return objClone;
    }

    return obj;
}

// Test case 1: Simple Object
const originalObj = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    },
    hobbies: ["reading", "coding"]
};

const clonedObj = deepClone(originalObj);
clonedObj.address.city = "Los Angeles";
clonedObj.hobbies.push("traveling");

console.log("Original Object:", originalObj);
console.log("Cloned Object:", clonedObj);

// Test case 2: Nested Objects with Arrays and Dates
const complexObj = {
    id: 101,
    name: "Complex Object",
    createdAt: new Date(),
    tasks: [
        { taskId: 1, taskName: "Task 1", dueDate: new Date() },
        { taskId: 2, taskName: "Task 2", dueDate: new Date() }
    ]
};

const clonedComplexObj = deepClone(complexObj);
clonedComplexObj.tasks[0].taskName = "Updated Task 1";
clonedComplexObj.createdAt.setFullYear(2025);
clonedComplexObj.name = "Updated Complex Object";
