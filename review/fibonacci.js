// 1 1 2 3 5 8 13 21 34

function fb(howMany) {
    let a = 0;
    let b = 1;
    for(let i=0; i<howMany; i++) {
        [a, b] = [b, a+b]
        console.log(a);
    }
}; // fb(10)

// 1 1 2 3 5 8 13 21 34
function fibonacci() {
let arr = [];
function fibo(lessThan) {
    let a = 0, b = 1;
    while(true) {
        [a,b] = [b, a + b]
        arr.push(a)
        if(b > lessThan) {
            break
        }
    }
    return a
};
function getArr() {
    return arr
}

return { fibo, getArr }
}

const {fibo, getArr} = fibonacci()
fibo(34)
console.log(getArr());
