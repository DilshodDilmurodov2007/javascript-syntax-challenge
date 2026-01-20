// setTimeout() => function in JavaScript that allows you to schedule the execution of a function
// after an amount of time (milliseconds)
// setTimeout(callback, delay)

function sayHello() {
    console.log("Hello")
}
// setTimeout(sayHello, 3000) // with functions

// setTimeout(function(){console.log("Hello2")}, 3000) // with anonymous function

// setTimeout(()=> console.log("Hello3"), 3000) // with arrow function

// to clear the timeout, we use clearTimeout(timeoutId)
let timer;
function start() {
   timer = setTimeout(sayHello, 3000)
}
function stopp(response) {
    if (response.toLowerCase() === "yes") {
        clearTimeout(timer)
    }
}
start()
stopp("Yes")
