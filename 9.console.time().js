// console.time() => tool that allows you to measure the time
// for a section of code or process to execute
// Great for performance bottlenecks

// console.time("forLoop")

// const times = 1000000
// let data = []
// for(let i=0; i<times; i++) {
// }

// console.timeEnd("forLoop")

// or a specific performance of a function
// 1,1,2,3,5,8,13,21
function fib(n) {
    console.time("fib")
    let curr = 0, next=1;
    let data =[]
    for(let i=0; i<n; i++){
        [curr, next] = [next, curr + next];
        data.push(curr)
    }
    console.timeEnd("fib")
    return data.join(" ")
}
console.log(fib(10));
