// constructors = special method for defining properties or methods of an object
// it only works with the function method (not arrow function)
function Fruit(name, color, isFresh=false, rate=0) {
    this.name = name,
    this.color = color,
    this.isFresh = isFresh,
    this.rate = rate
};

const fruit = new Fruit("Apple", "red", true, 10);
// console.log(fruit);

// mapping
function Student(index, name) {
    this.index = index,
    this.name = name
}
const students = ["Sam", "Bob", "Lily", "Sarah", "Kevin"];
const modified_data = students.map((name, index) => {
    return new Student(index, name)
})

// console.log(modified_data)


// value = "hello, world!"
function countLetters(value) {
    let map = {}
    for(let char of value) { // of when iterating over a string, in when arrays
        map[char] = (map[char] || 0) + 1 // map[char] ("letter") 's values is equal to the value of map[char]
    }
    return map
}

// console.log(countLetters("hello, how are you? doing good? how have you been?"))

// when we write methods in constructors, it is gonna be wasteful that 
// it creates a copy of the same method over. So, it allocates a lot of memory

// to solve this we have a prototype method:

function SayHello(name, surname) {
    this.name = name,
    this.surname = surname,
    this.hello = function() {
        return `Hi, I am ${this.name+" "+this.surname}`
    }
}

const person1 = new SayHello("Dan", "Sonntag")
const person2 = new SayHello("Carl", "Ratner")
const person3 = new SayHello("Jason", "Peters")

console.log([person1, person2, person3].map((p) => {
    // return p.hello()
    return ''
}))

// instead we can use prototype
function sayHello_2(name, surname) {
    this.name = name,
    this.surname = surname
}
sayHello_2.prototype.hello = function() {
    return `Hi, I am ${this.name+" "+this.surname}`
}

const person_1 = new sayHello_2("Dan", "Sonntag")
const person_2 = new sayHello_2("Carl", "Ratner")
const person_3 = new sayHello_2("Jason", "Peters")

// console.log([person_1, person_2, person_3]) 
/* 
[
  sayHello_2 { name: 'Dan', surname: 'Sonntag' },
  sayHello_2 { name: 'Carl', surname: 'Ratner' },
  sayHello_2 { name: 'Jason', surname: 'Peters' }
] 
  */

console.log([person_1, person_2, person_3].map(p => p.hello()))
