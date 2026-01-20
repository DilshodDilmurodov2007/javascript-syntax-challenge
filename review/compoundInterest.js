// C = P (1 + n / 100) ^ y
// P -> Previous Value
// n -> interest rate
//  y -> years in total

let Button = document.getElementById("button")
function compoundInterest(Prev, rate, years) {
    let result = Prev * Math.pow((1 + (rate / 100)), years)
    return result
}
function buttonFunc() {
    let PrevInput = document.getElementById("prevInput").value
    let RateInput = document.getElementById("rateInput").value
    let YearsInput = document.getElementById("yearsInput").value
    let text = document.getElementById("text")
    if (!PrevInput) console.error("PrevInput can't be empty")
    else if (!RateInput) { RateInput = 0 }
    else if (!YearsInput) { RateInput = 0 }
    text.textContent = compoundInterest(PrevInput, RateInput, YearsInput)
    .toFixed(2)
}

Button.addEventListener("click", buttonFunc)