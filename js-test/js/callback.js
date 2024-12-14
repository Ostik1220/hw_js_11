function sumNum(a, b, c) {
    const result = a + b + c
    return result
}

function makeMessage(sumNum, a, b, c){
    const sum = sumNum(a, b, c);
    const message = "сума числ дорівнює " + sum
    return message
}

console.log(makeMessage(sumNum, 123456789, 987654321, 1 ))
console.log(makeMessage(sumNum, 2, 7, 1 ))