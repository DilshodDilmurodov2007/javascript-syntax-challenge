const mark = document.getElementById("mark")
function show() {
    const values = [
    document.getElementById("hour"),
    document.getElementById("minute"),
    document.getElementById("second"),
    document.getElementById("millisecond"),
];
const times = [
    new Date().getHours(),
    new Date().getMinutes(),
    new Date().getSeconds(),
    new Date().getMilliseconds()
]
     mark.textContent = times[0] > 12 ? "PM" : "AM"
     times.forEach((t, i) => {
         if( times[0] > 12 ) {times[0] = times[0] - 12}
         values[i].textContent = t < 10 ? "0"+t : t
        })
}
setInterval(show, 1)