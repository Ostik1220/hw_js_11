// // приведення до булю на прикладі Boolean(value)
// const resalt = Boolean(0);
// console.log(resalt)

// const result = Boolean(1);
// console.log(result)

// //логічне ТА(оператор &&)
// //серед умов шукає останнє true та повертає його якщо не зустрів false
// //якшо зустріне фолс і повертає його
// console.log(0 && 5 && "str")
// console.log(15 && "bizzare" && null)
// console.log("false" && false && 1)


// // логічне АБО(оператор ||)
// //шукає перше Тру та вертає йог, якщо побачило Фолс то пропускає і шукає Тру
// //якщо всюди Фолс то вернится останій фолс
// console.log(0 || false || 5867)
// console.log("" || "bizzare" || undefined)
// console.log(0 || false || null)

// console.log(5 > 3 && 2 < 3 && "test")
// console.log(undefined === 0 || 0 === "0" && 5)

// // const subscribe = prompt("який у вас тип підписки: free, pro, vip?");
// // let hasAccses = subscribe === "pro" || subscribe === "vip";
// // console.log(hasAccses) 
// const IsFriend = confirm("Користувач є вашим другом")
// const IsOnline = confirm("Користувач є в мережі")
// const check = IsOnline === false && IsFriend === false
// console.log(check)

//логічний оператор if виконує умову коду якщо true
// const userAge = Number(prompt("скільки вам років"))
// if (userAge > 18){
//     alert("ви дорослий")
// } else {
//     alert("Ви ще малі")
// }

// логічний оператор else if 
// if (0 < userAge && userAge < 18){
//     alert("ви ще малі")
// } else if (18 <= userAge && userAge < 60) {
//     alert("ви дорослий")
// } else if (60 <= userAge && userAge < 100) {
//     alert("ви старенький")
// } else {
//     alert("Значить так, || ти кажеш правельний вік, || ми шукаємо тебе по ІП ")
// }

// let balance = Number(prompt("Скільки у вас грн???"))
// const payment = Number(prompt("За скільки ви хочете купити мої прекрасні тапки?"))
// alert(`коштує ${payment}. Перевіряємо баланц`)
// // if (payment <= balance){
// //     balance -= payment;
// //     alert(`ДЯкую за покупку, на рахунку ${balance} grn`)
// // } else {
// //     alert("недостатньо коштів, гуляй лісом")
// // }

// //тернарний оператор 
// //умова ? те що буде при true : те що буде при false  
// payment <= balance ?  alert(`ДЯкую за покупку, на рахунку ${balance} grn`) : alert(`недостатньо коштів`)

// let jsName = prompt("Яка “офіційна” назва JavaScript?")
// if (jsName === "ECMAScript"){
//     alert("Правильно")
// } else {
//     alert("Ви не знаєте? ECMAScript!")
// }

// jsName === "ECMAScript" ? alert("Правильно") :  alert("Ви не знаєте? ECMAScript!")

let payment  = Number(prompt("Скільки ви витратили золотих на покупки в магазині?"))
const totalTimes =  Number (prompt('скільки раз ви закуплялися?'))
let discount;
if (totalTimes >= 100 && totalTimes < 1000) {
    discount = 2;
} else if (totalTimes >= 1000 && totalTimes < 5000) {
    discount = 5;
} else if (totalTimes >= 5000) {
    discount = 10;
}
alert(`Оформляемо замовлення на суму ${payment} зі знижкою ${discount}%`)
payment = payment / 100 * discount
alert(`Ну ви потратили ${payment}`)