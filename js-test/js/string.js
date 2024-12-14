const messege = "I Love JavaScript"
console.log(messege.toUpperCase());
//переводить всі символи в великий регістер
console.log(messege.toLowerCase());
//переводить всі символи в малий регістер
const small = messege.toLowerCase();
console.log(small)

const newString = "Привіт, це керівник сайту -точноНеСпамИВірусКрапкаКом-"
console.log(newString.includes("це керівник"))
//перевіряє чи містить певні символи
const index = messege.indexOf("a");
console.log(index)
//каже число де знаход елемент у рядка
const wordIndex = messege.indexOf("Love")
console.log(wordIndex)

//якщо вказано сивол якого немає в рядку то результат -1
let indexTrim = "       люблю кавун      "
console.log(indexTrim.length)
const indexTrimNew = indexTrim.trim();
console.log(indexTrimNew.length)
//метод trim обрізає пробіли на початку та кінці рядка

//startsWith, чи починаєтя рядок на певний символ
console.log(messege.startsWith('I'))
console.log(messege.startsWith('Love', 2))
console.log(messege.startsWith('Java', 4))
//endsWith, чи закінчуєтся рядок на певний символ
console.log(messege.endsWith('t'))
console.log(messege.endsWith('A'))

const str = "hello guys"
console.log(str.length)
console.log(str.padStart(13, "."))
//padStart додає елементи якщо їх за мало до початку
console.log(str.padEnd(19, "by"))
//padEnd додає елементи якщо їх за мало докінця

const myName = "Ostap"
console.log(myName.charAt(0))
console.log(myName.replace("O", "@"))

console.dir(String)