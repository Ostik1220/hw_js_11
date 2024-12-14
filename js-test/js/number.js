//оператор остачі віділення
console.log(20 / 17)
console.log(20 % 17)
//"20 / 17 виходить НЕ ціле число 
//19 / 17 теж не ділится націло
//18 / 17 теж не ділится націло
//17 / 17 вже ділится націло і виходить ціле число 1 
// шукаємо остачу від ділення 20 - 17 = 3

// попробуємо з 12 і 5
//12 і 5 не ціле
//11 і 5 не ціле
//10 і 5 вже ціле
//знайдемо остачу 12 - 10 = 2 -- остача від ділення

let number = 3;
console.log(number)
//number = number + 5;
number += 5; //це те саме що рядок вище
console.log(number)

number -= 4;
console.log(number);

number /= 2;
console.log(number);

number *= 4;
console.log(number);

number **= 2;
console.log(number);

number %= 6;
console.log(number);

let sum = 2; 
sum ++ ;// те саме що sum += 1
console.log(sum)

// оператори строгої та не строгої рівності
// == не сувора рівність, тільки порівнює начення та може їх приводити до буля (true or false)
// === сувора рівність, порівнює значення та їх типи
console.log ("2" == 2) //вийде true, тому ми не хочемо юзати == щоб отримувати точне значення для порівняння
console.log ("2" === 2) // буде  falls оскільки різні типи даних
console.log (false == 0)
console.log (false === 0)
console.log (false == 1)
console.log (false === 1)
console.log (2 !== 3);
console.log (2 !== 2);
console.log (!true) //! - це не, щось заперечує: !true = false, !false = true


console.log("20" + 1)
console.log("20" + true)

Number//- це конструктор який може привести будь який тим данних до числа та зберігає в собі методи для роботи з числами
console.log(Number("10"))

const num = "5";
const uptNumber = Number(num)
console.log(typeof uptNumber)
console.log(typeof num)
console.log(Number(true))
console.log(Number(false))
console.log(Number("top")) //отримуємо NaN (not an number)
const test = Number("top")
console.log (Number.isNaN(test))

const width = "150px"
console.log(Number.parseInt(width))
const height = "300.5px"
console.log(Number.parseFloat(height))
//parseInt - ціле число
//parseFloat - не ціле

const salary = 16000.80349
const roundSalary = salary.toFixed(2)
console.log(Number(roundSalary))


console.log(0.1 + 0.2) //буде похібка 0.30000000000000004, щоб позбутися похібки ми можем всі доданки поділити на 10 чи на 100
console.log((0.1*10 + 0.2*10) / 10) //тут все добре
console.log(0.2 + 0.2) // тут чогось все ок

//класс Math це містить в собі різні методи для роботи з числами
console.log(Math)
const minNum = Math.min(8, 190237, 6, 78, 200)
const maxNum = Math.max(40, 6, 1280, 34, 7896666777888876, 176869)
console.log(minNum)
console.log(maxNum)

const textPow = 2 ** 2
console.log(textPow)

console.log (Math.pow(3, 3)) //степінь
console.log (Math.round(3.55567)) //заукруглення
console.log (Math.round(3.15567))
console.log (Math.floor(3.918)) // заукруг завжди в менш
console.log (Math.ceil(3.111)) // заукруг завжди в більш
console.log (Math.round(Math.random() * (30 - 15) + 15)) 