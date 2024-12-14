// const friends = ["Yura", "Ruslan", "Marta"];
// console.log(friends)

// const friend = friends[1]
// console.log(friend)

// console.log(friends[2])

// const product = ["Apple", "Carrot", "Bananas"];
// // console.log(product[4])

// const lastIndexItem = product.length - 1
// const lastElement = product[lastIndexItem]
// console.log(lastElement)
// product.push("Tomato", "Lemon");
// console.log(product[product.length - 1])

//ітерація по масиву
// const animals = ["dog", "cat", "parrot"];
// const newAnimals = [];
// for(let i = 0; i < animals.length; i += 1) {
// const text = `${animals[i]} is my friend`
// newAnimals.push(text)

// }

// console.log(newAnimals)

// const numbers = [2, 3, 7]
// let sum = 0
// for(let i = 0; i < numbers.length; i += 1) {
//  sum += numbers[i]
// }
// console.log(sum)

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// const wholeArrey = [];
// let sum1 = 0;
// let sum2 = 0;

// for (let = i; i < array1.length ; 1++) {
//     sum1 +=  array1[i]
//     for (let y = 0; y < array2.length; 1++) {
//         sum2 += array2[y]
//     }
// }  НЕ ВДАЛЕ

// const numbers = [51, 18, 13, 24, 7, 85, 19]
// let smallestNumber = Math.min(numbers.length);
// console.log(smallestNumber)  ПОГАНА ВІДПОВІДь

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (let i = 0; i < cart.length; i++) {
//     total = total + cart[i]
// }
// console.log(total)

// const arr1 = [1, 5, "4", "hello"];
// const arr2 = [true, 2, {}, ["a"], 222];

// let ar1 = 0;

// for (let i = 0; i < arr1.length; i++) {
//   if (i === 1) {
//     ar1 = ar1 + arr1[1];
//   }
// }

// // console.log(ar1);

// for (let i = 0; i < arr2.length; i++) {
//   if (i === 1) {
//     ar1 = ar1 + arr2[1];
//   }
// }

// console.log(ar1);

// console.log(ar2);

// let sum = ar1 + ar2;

// console.log(sum)































//ARRAY METODS

const array = ['Mango', 'eight', 'Ruslan', 'Right', 'blanket']

// метод indexOf шукає індекс елемента який ми задаємо у масиві
const friendIndexOf = array.indexOf('eight')
console.log(friendIndexOf)

//метод includes перевіряє чи є елемент у масиві та перевіряє true чи false
const isRuslanMan = array.includes('Ruslan')
console.log(isRuslanMan)

// метод push додай елемент у кінець масиву
console.log(array)

array.push('898123')
console.log(array)

console.log(array.push('null'))
console.log(array)


// метод pop видаляє останій елемент масиву
array.pop() 
console.log(array)

// метод shift видаляє елемент на початку масива
array.shift()
console.log(array)

// метод unshiftдодає елемент на початку масива
array.unshift('Banana')
console.log(array)



// метод slice вирізає елементи списку та робить їх окремим масивом; також може зробити копію масива

const slice = array.slice(0, 4);
console.log(slice)

const copyArray = array.slice()
console.log(copyArray)

// метод splice, може додавати видаляти та заміняти елемент у масиві
const IT = ['html', 'css', 'js', 'c++', 'java']
//видаляють елементи за допомогою цього метода
let splice = IT.splice(1, 2)// 1 це індека з якого місця видаляти предмети а 2 це к-сть елементів які треба видалити
console.log(IT)
//додаємо за допомогою цього метода
let addSplice = IT.splice(1, 0, "phyton")
console.log(IT)
//замінюємо за допомогою цього метода
let switchSplice = IT.splice(1, 1, 'node.js')
console.log(IT)

// метод contact обєднує кілька масивів в 1
const num = [1, 2, 3, 65, 765, 8765, 345]
const bum =[7, 9, 2543, 98, 2 ]

const gk = num.concat(bum)
console.log(gk)