// destructuring = extracting values from arrays and objects
// Always use the semi colons writing a code!!!

// 1. Swap the values of 2 variables
let a = "First";
let b = "Second";

[a, b] = [b, a];

// console.log(a, b); // Second First


// 2. Swap the values of an array

const colors = ["red", "blue", "green", "pink"];
[colors[0], colors[colors.length-1]] = [colors[colors.length -1], colors[0]];

// console.log(colors); // [ 'pink', 'blue', 'green', 'red' ]

// 3. Assign the values of an array to variables
const colors_2 = ["red", "blue", "green", "pink"];
const [first, second, ...rest] = colors_2;

// console.log(first, second, rest); // "red" "blue" ["green", "pink"]

// 4. Extract the values of an object
const Person_1 = {
    firstName: "Dan",
    lastName: "Best",
    age: 18,
}
const Person_2 = {
    firstName: "Kirk",
    lastName: "Best",
    age: 42,
    job: "Househubby"
}

const {firstName, lastName, age, job="Unemployed"} = Person_1
console.log(firstName, lastName, age, job);

// Destructuring in function parameters
function showCredentials({username, password, sent_code}) {
    console.log(`Here are your credentials: username: ${username}, 
        password: ${password}, 
        sent_code: ${sent_code}`);
}

showCredentials({
    username: "DanBest",
    password: "danbest2007",
    sent_code: crypto.randomUUID()
})

// Destructuring:
// when swapping the values of 2 variables
// when swapping the values of arrays
// when assigning the values of arrays to variables
// when extracting values of an object
// when destructuring in function parameters