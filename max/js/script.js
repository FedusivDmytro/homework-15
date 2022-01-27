// Вивести суму нарахованих відсотків.

const YEARLY_DEPOSITE_RATE = 5;
let monthlyDepositRate = (YEARLY_DEPOSITE_RATE / 12);
let yourDeposit = prompt('Введіть суму депозиту:');
let yourProfit = (((yourDeposit * monthlyDepositRate) * 2) / 100).toFixed(3);

alert(`Сума нарахованих відсотків становить: ${yourProfit}`);