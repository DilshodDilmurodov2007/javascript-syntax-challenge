// toLocaleString() => helps to format numbers
// 123456.789 => 123,456.789

let number = 123456.789
number.toLocaleString("en-US") 
// console.log(number) // 123,456.789

let number2 = 123456.789
number2.toLocaleString("en-US", {style:'currency', currency:'USD'})
console.log(number2); // $123,456.79
