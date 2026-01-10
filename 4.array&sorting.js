// when we use spread operator inside the loop instead of push(), it is wasteful, less efficient

// filter using for
function filter(array, callback) {
    let newArray = [];
    for(let i = 0; i<array.length; i++) {
        let alteredEl = callback(array[i], i, array)
        if(alteredEl) {
            newArray.push(array[i])
        }
    }
    return newArray
}
const numbers = [1,2,3,4,5,6,7]
const filtered = filter(numbers, (n, idx) => n % 2 === 0)
// console.log(filtered)

// map using for
function map(array, callback) {
    let data = []
    for (let i=0; i<array.length; i++) {
        const alteredElwithFunc = callback(array[i], i, array)
        data.push(alteredElwithFunc)
    }
    return data
}

const numbers_2 = [1,2,3,4,5,6,7]
const mapped = map(numbers_2, (n,idx) => {
    return {n, idx}
})
// console.log(mapped);


// forEach using for
function forEach(array, callback) {
    for(let i=0; i<array.length; i++) {
        callback(array[i], i, array)
    }
}
const numbers_3 = [1,2,3,4,5,6,7]
forEach(numbers_3, (i, idx) => {
    // console.log(i, idx);
})

// find using for
function find(array, callback) {
    for(let i = 0; i<array.length; i++) {
        let el = callback(array[i], i, array) // item, index, array
        if(el) {
            return array[i]
        }
    }
    return undefined
}


// splice => accepts (startingIndex, numberOfElementsToRemoveAfterThat, )
const arr = [0,1,2,3,4]
const excludedItems = arr.splice(0,2)
// console.log(excludedItems, arr);

// reduce
const fruits = [
    {name: "Apple", calories: 123},
    {name: "Banana", calories: 98},
    {name: "Coconut", calories: 67},
    {name: "Cherry", calories: 36},
    {name: "Melon", calories: 220}
]

const maxVal = fruits.reduce((prev, next) => next.calories > prev.calories ? next : prev)
const minVal = fruits.reduce((prev, next) => next.calories < prev.calories ? next : prev)
console.log(minVal);