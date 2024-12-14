//функція це обгортка інструкції коду яка стосуєтся певної дії
// є 2 способи створити фунуйію
//1 оголошення фунуції (function declaration)

// functio назваФункції (парметри){
//     тіло функції
//     return значення яке ми шукаємо
// }

//параметри це змінні в які приходять дані при створені функції

// оголосиме функцію

// function test (){
//     return 'test'
// }

// //викличему функцію
//назваФункції(аргументи)
// аргумнти це конкретні дані які ми передамо при виклику функції

// const messege = test()
// console.log(messege)

// 2 функціональний вираз (function exspretion)

// const test = function(){
//     return 'test'
// }
// console.log(test())

//3 стрілкова функція це новий синтексиз функціонального виразу

// const test = () => {
//     return 'test'
//     //в цій функції ясно повернення бо є return
// }
// console.log(test())

// перепишему стрілкову функцію на функцію з явним поверненням

// const test = () => 'test'


//ПРААААААААААААААААКТИКА

//1) створити функцію яка буде додавати 3 числа

// function sumNum(a, b, c) {
//     const result = a + b + c
//     return result
// }

// console.log(sumNum(13, 24, 35))

//перепишемо на стрілкову функцію

// const sumNum = (a, b, c) =>  a + b + c
// console.log(sumNum(13, 24, 35))

// ---------------------------

//якщо у функцію має  приходити  різна кількість аргументів у параметри то ми можем використати псевдо масив argument

// function sumNum() {
//     // console.log(arguments) у даному псевдомасиві arguments не працюють 
//     //всі методи для роботи масивами
//     // тому ми можемо з псевдомасимв зробити повний масив за допомогою метод Array.from
//     const numbers = Array.from(arguments)
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
        
//     }
//     return sum
// }

// console.log(sumNum(13, 24, 35))
// console.log(sumNum(40, 20, 50, 90))
// console.log(sumNum(1454, 154))