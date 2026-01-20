// closures = a function defined inside another function
// the inner function has access to the variables 
// and scope of the outer function

// Allow for private variables and state maintenance
// Used frequently in JS frameworks: React, Vue, Angular

function outer() {
    let message = "hello"
    
    function inner() {
        console.log(message)
    }

    inner()
}

message = "bye" // we created a different message variable here
// the message only exists inside the outer func.
// this is called incapsulation

// outer()

function createCounter() {
    let count = 0

    function add() {
        count++;
        console.log(count) 
    };
    function sub() {
        count--;
        console.log(count) 
    }
    function backToZero() {
        count = 0
        console.log(count) 
    }
    function getResult() {
        return count
    }
    return {getResult, add, sub, backToZero}
}

const { add, getResult,count } = createCounter()

// add()
// add()
// add()
// console.log(getResult())

// useState function
// const [value, setValue] = useState("hello")
function useState(value) {
    let val = value;
    function setVal(callback) {
        if(typeof callback === "function") {
            val = callback(val);
        } else {
            val = callback
        }
    };
    function showVal() {
        return val
    }
    return [showVal, setVal]
}

const [hello, setHello] = useState("hello")

// console.log(hello())
// setHello("bye")
// console.log(hello())
