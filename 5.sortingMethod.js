// sort() built-in function
// it sorts elements as strings lexecographifically (not alphabetically)
// lexicographically = (alphabet + number + symbol)

// sort with for (numbers)
function sortNumbers(array) {
  let arr = [...array]
  let data = []
  while(arr.length > 0) { // 8 > 0
    let minIndex = 0 // 6
    for(let i=0; i<arr.length; i++) { // 1
        if(arr[minIndex] > arr[i]) {
            minIndex = i
        }
    }
    data.push(arr[minIndex])
    arr.splice(minIndex, 1)
  }
  return data
}
// console.log(sortNumbers([7,3,2,4,9,6,1,8,5]))



// sort()
// it mutates the previous array

function logging(...array) {
    array.forEach(t => console.log(t))
}

// we have different types of arrays
const numbers = [4,1,5,3,2]
const names = ["Dan", "Kirk", "John", "Carl", "Jason"]
const complexArr = names.map((t,idx) => {
    return {name: t, numb: numbers[idx]}
})
// logging(numbers, names, complexArr)

// sort() (default)
function sorted(...array) {
    array.forEach(t => console.log(t.sort()))
}
// sorted(numbers, names)


// with numbers 1. ascending and 2. descending order
const numbers_2 = [...numbers] // get istance copy not to lose the info of the initial array

const ascending = numbers.sort((a,b) => a - b)
const descending = numbers.sort((a,b) => b - a)

// console.log(ascending)
// console.log(numbers_2)

// with objects' properties
const complexArrCopied = [...complexArr]
const topNumb = complexArr.sort((a,b) => a.numb - b.numb)

// console.log(complexArrCopied)
// console.log(topNumb)

// localeCompare() => orders the strings in a lexicographical way
const withNames = complexArrCopied.sort((a,b) => a.name.localeCompare(b.name))

console.log(withNames)

