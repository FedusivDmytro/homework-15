// Скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

let yourMoney = prompt('Введіть суму грошей:');
let chocolatePrice = prompt('Введіть ціну однієї шоколадки:');
let moneyToChocolateFloat = (yourMoney / chocolatePrice);
let howMuchChocolate = Math.floor(moneyToChocolateFloat);
let yourChange = Math.round((moneyToChocolateFloat - howMuchChocolate) * 10);

alert(`Ви зможете купити ${howMuchChocolate} одиниць шоколаду, і у Вас залишиться ${yourChange} грн здачі.`);

// Запитай у користувача тризначне число і виведи його задом наперед.

let yourNumber = prompt('Введіть тризначне число:');
let firstNumber = 100 * Math.floor(yourNumber % 10);
let secondNumber = 10 * Math.floor((yourNumber % 100) / 10);
let thirdNumber = Math.floor((yourNumber % 1000) / 100);
let reverseNumber = (firstNumber + secondNumber + thirdNumber);

alert(`Число ${yourNumber} задом наперед - ${reverseNumber}`);