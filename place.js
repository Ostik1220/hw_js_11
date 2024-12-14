//1
const bankAccount = {
  ownerName: "Katya",
  accountNumber: 698872,
  balance: 1000,
  deposit(X) {
    this.balance = this.balance + +X;
  },
  withdraw(X) {
    this.balance = this.balance - +X;
  },
};
const question = confirm(
  "на вашому рахунку 1000грн, нажміть |OK| якщо хочете поповнити і |скасувати| якщо хочете зняти"
);
if (question === true) {
  const money = prompt("Скільки грошей хочете додати");

  if (isNaN(money) || money === "") {
    alert("Спробуйте ще раз: введіть коректну суму.");
  } else {
    bankAccount.deposit(Number(money));
    alert(
      `На вашому рахунку ${bankAccount.balance}. Дякуємо, що користуєтеся нашим сервісом.`
    );
  }
} else {
  const money = prompt("Скільки грошей хочете зняти");

  if (isNaN(money) || money === "") {
    alert("Спробуйте ще раз, введіть число");
  } else if (Number(money) >= 1000) {
    alert(
      "На рахунку 0 грн. Ви досягли ліміту і не можете більше знімати гроші."
    );
  } else {
    bankAccount.withdraw(Number(money));
    alert(
      `На вашому рахунку ${bankAccount.balance}. Дякуємо, що користуєтеся нашим сервісом.`
    );
  }
}

//2
const temperature = +prompt(
  "яка у вас температура(тільки додатнє або відємне число)"
);
let fact = "";
const weather = {
  temperature,
  humidity: "20%",
  windSpeed: "10 км/год",
  trueOrFalse() {
    if (temperature >= 0) {
      fact = true;
    } else {
      fact = false;
    }
  },
};
weather.trueOrFalse();

if (fact === false) {
  alert("температура нижче 0 градусів Цельсія");
} else {
  alert("температура вища або рівна 0 градусів Цельсія");
}

//3

const user = {
  name: "Danylo",
  password: "2007",
  email: "danylo.drymalyk@gmail.com",
  login(b, c) {
    if (b === this.password && c === this.email) {
      alert("вітаю, ви Данило");
    } else if (b !== this.password && c === this.email) {
      alert("не правильний пароль, підозріло");
    } else if (b === this.password && c !== this.email) {
      alert("не правильний емеіл, дуже підозріло");
    } else if (b !== this.password && c !== this.email) {
      alert("Ви не Данило, самозванець!");
    }
    return;
  },
};
let emailCheck = "";
let passwordCheck = "";
const questionAsk = confirm(`Ви ${user.name}??`);
if (questionAsk === false) {
  alert("А ну.... папа тоді");
} else {
  emailCheck = prompt("Доведіть, ведіть свій емеїл");
  passwordCheck = prompt("хм а пароль");
  user.login(passwordCheck, emailCheck);
}

//4
const rating = +prompt("Який рейтинг ви дасте фільму |elf| ");
const movie = {
  title: "elf",
  director: "Джон Фавро",
  year: "2004",
  rating,
  checkRating() {
    if (this.rating <= 8) {
      return false;
    } else {
      return true;
    }
  },
  changeColor(callback) {
    if (callback === true) {
      this.color = "green";
    } else {
      this.color = "black";
    }
    return this.changeColor;
  },
};
movie.changeColor(movie.checkRating());
alert(`колір фільму ${movie.color}`);
