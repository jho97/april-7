const printDigits = (num) => {
    let back = 0;
    let lastDigit;
    while (num) {
        lastDigit = num % 10
        // console.log(lastDigit)
        back = back * 10 + lastDigit
        // console.log(back)
        num = Math.floor(num/10)
        // console.log(num/10)
    }
    return back
}
console.log(printDigits(413))
