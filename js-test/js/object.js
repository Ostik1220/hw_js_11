//  const user = {
//     userName: "Ostik",

//     password: "Coolguy898123",

//     isRegistred: true,

//     age: 14,

//     friends: ["Ruslan", "Yura", "Marta"],

//     location:{
//         country: "Ukraine",
//         city: "Lviv",
//         street: "Honeycave"

//     },
//     showFriends () { //функія
//         return this.userFriends.join("")
//     }

//  }
// console.log(user)
// const userLogin = user.password
// console.log(userLogin)
// const userFriends = user.friends
// console.log(userFriends)
// const userCountry = user.location.country
// console.log(userCountry)

// console.log(user.secondName)//будe undefind бо таккого ключа немає
// user.secondName = "Drymalyk"//так можна додати
// console.log(user.secondName)

// delete user.age; //видаляє значення
// console.log(user.age) // буде undefind

// user.showFriends()
// console.log(user.showFriends())

//practice

// const cat = {
//   name: "Radka",

//   age: 6,

//   gander: "female",

//   showCharacteristics() {
//     return `${this.age}, ${this.name}, ${this.gander}`;
//   },
// };
// console.log(cat.showCharacteristics());

// Створіть масив об'єктів "students", де кожен об'єкт буде
//містити властивості "name", "age", "gender" та "grade".
// Напишіть функцію,яка приймає масив об'єктів "students"
//і повертає середній бал групи.

// const arr = [
//   {
//     name: Alex,
//     gender: male,
//     age: 14,
//     grade: 6,
//   },
//   {
//     name: Max,
//     gender: male,
//     age: 15,
//     grade: 11,
//   },
//   {
//     name: Merry,
//     gender: female,
//     age: 14,
//     grade: 8,
//   },
// ];

// let grade = 0;
// function showStudentsgrade(arr) {
//   for (const student of arr) {
//     grade += arr.grade;
//   }

//   let centralGrade = grade / stu;
//   return centralGrade;
// }

// console.log(showStudentsgrade());

const cart = {
  products: [
    { name: "🍎", price: 50 },
    { name: "🍇", price: 70 },
    { name: "🍋", price: 60 },
    { name: "🍓", price: 110 },
  ],
  getProducts() {
   let messege = "у вашому кошику:";
    for (let i = 0; i < this.products.length; i++) {
        const element = this.products[i];
        messege += element.name
    }
    return messege
  },
  add(product) {
    this.products.push(product)
  },
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};



cart.getProducts()
cart.add({ name: "🍗", price: 120 })
console.log(cart.products)