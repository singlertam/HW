// Задание 1

const numbers = [1, 5, 4, 10, 0, 3];

for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] === 10) break;
}

// Задание 2

const numbersTwo = [1, 5, 4, 10, 0, 3];

console.log(numbersTwo.indexOf(4));

// Задание 3

const numbersThree = [1, 3, 5, 10, 20];

numbersThreeFiltered = numbersThree.join(' ');

console.log(numbersThreeFiltered);

// Задание 4 

const bigArray = [];
const quantity = 3;

for (i = 0; i < quantity; i++) {
    const innerArray = [];
    for (el = 0; el < quantity; el++) {
        innerArray.push(1);
    }
    bigArray.push(innerArray);
}

console.log(bigArray);

// Задание 5 

const taskFive = [1, 1, 1];
const addNumbers = 3;

for (i = 0; i < addNumbers; i++) {
    taskFive.push(2);
}

console.log(taskFive);

// Задание 6 

const strangeArray = [9, 8, 7, 'a', 6, 5];

newArray = strangeArray.sort().filter(item => typeof item === 'number');

console.log(newArray);

// Задание 7 

// const guess = [9, 8, 7, 6, 5];

// const find = (userAnswer) => {
//     let answer = prompt(userAnswer);
//     let userNumber = parseInt(answer);

//     if(guess.includes(userNumber)) {
//         alert('Угадал');
//     } else {
//         alert('Не угадал')
//     }
// }

// find('Угадайте число');

// Задание 8

let string = 'abcdef';
let newString = string.split('').reverse().join('');

console.log(newString);

// Задание 9 

const twoArray = [
    [1, 2, 3],
    [4, 5, 6]
];

const newTwoArray = [].concat(...twoArray);

console.log(newTwoArray);


// Задание 10

const random = [7, 4, 9, 2, 5, 1, 8];

for (i = 0; i < random.length - 1; i++) {
    let count = random[i] + random[i + 1];
    console.log(count);
}


// Задание 11

const square = [6, 4, 7, 2, 9, 8];
let newSquare = square.map(item => item ** 2);

console.log(newSquare);

// Задание 12

const words = ['слово', '', 'слог', 'длинное предложение', 'буква'];

const checkLength = () => {
    let count = words.map(item => item.length);
    console.log(count);
} 

checkLength();

// Задание 13

const negative = [2, -3, 9, 4, -7, 5, -4, -1];

const getNegative = () => {
    let processed = negative.filter(item => item < 0);
    console.log(processed);
};

getNegative();

// Задание 14

const randomValue = [];

for (i = 0; i < 10; i++) {
    let add = Math.random() * 10;
    add = Math.floor(add);
    randomValue.push(add);
}

console.log(randomValue);

let newRandomValue = randomValue.filter(item => item % 2 === 0);

console.log(newRandomValue);

// Задание 15 

const average = [];

for (i = 0; i < 6; i++) {
    let add = Math.floor(Math.random() * 10);
    average.push(add);
}

let processed = average.reduce(getAverage = (sum, initial) => {
    return sum + initial;
});

console.log(average);
console.log(processed);

newAverage = processed / average.length;

console.log(newAverage);