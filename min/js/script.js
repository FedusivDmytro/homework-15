// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

let firstNumber = 0.1;
let secondNumber = 0.2;
let sumOfNumbers = (firstNumber + secondNumber).toFixed(1);

console.log(sumOfNumbers);

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних).

let stringNumber = '1';
let regularNumber = 2;
let = sumOfNumbers2 = (+stringNumber + regularNumber);

console.log(sumOfNumbers2);

// Скільки файлів розміром в 820 Мб поміщається на флешку.

const FILE_SIZE = 820;
let flashDriveSizeInGb = prompt('Вкажіть обсяг флешки в Гб:');
let flashDriveSizeInMb = (flashDriveSizeInGb * 1000);
let howMuchFiles = Math.floor(flashDriveSizeInMb / FILE_SIZE);

alert(`На флешку обсягом ${flashDriveSizeInGb}Гб, поміститься ${howMuchFiles} файлів розміров 820Мб.`);