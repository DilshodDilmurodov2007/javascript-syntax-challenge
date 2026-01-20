const date = new Date()
// console.log(date);

// the arguments that Date() object accepts:
// Date(year, month, day, hour, minute, second, ms)

// months are from 0-11
const chosenDate = new Date(2007, 4, 30, 12, 30, 0, 0)
// console.log(chosenDate)

// argument in string: (T for time, Z for UTC time)
const specificDate = new Date("2024-05-30T12:30:00Z")
// console.log(specificDate);

// epoch date 
// (milliseconds since when computer thinks time began)
const startingDate = new Date(0)
// console.log(startingDate);

// extracting the values from the Date()

const day = new Date()

const year = day.getFullYear()
const month = day.getMonth()
const monthDate = day.getDate()
const hour = day.getHours()
const minutes = day.getMinutes()
const seconds = day.getSeconds()
const dayOfWeek = day.getDay() // from Sun to Sat (0-6)

// console.log(year, month, monthDate, hour, minutes, seconds, dayOfWeek);


// set the values of the specific date
const specificDay = new Date()

specificDay.setFullYear(2007)
specificDay.setMonth(4)
specificDay.setDate(30)
specificDay.setHours(12)
specificDay.setMinutes(35)

console.log(specificDay);
