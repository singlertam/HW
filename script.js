// Задание 1 

// const checkLeast = (value1, value2) => {
//     let a = parseFloat(prompt(value1));
//     let b = parseFloat(prompt(value2));

//     if (isNaN(a) || isNaN(b)) {
//         console.log("Введите корректные числовые значения");
//         return;
//     }

//     if (a > b) {
//         console.log(`Значение ${a} больше второго`);
//     } else if (a < b) {
//         console.log(`Значение ${b} больше первого`);
//     } else {
//         console.log("Значения равны");
//     }
// }

// checkLeast("Введите два значения для их сравнения");

// Задание 2 

// const checkEven = (request) => {
//     let userNumber = prompt(request);

//     if (isNaN(userNumber)) {
//         console.log("Введите корректное числовое значение");
//         return;
//     }

//     if (userNumber % 2 === 0) {
//         console.log(`Значение ${userNumber} является четным`);
//     } else {
//         console.log(`Значение ${userNumber} является нечетным`);
//     }
// }

// checkEven("Введите значение, чтобы выяснить четное это значение или нечетное");

// Задание 3.1

// const makeSquare = (userAnswer) => {
//     let square = prompt(userAnswer);

//     console.log(square ** 2);
// }

// makeSquare('Введите значение, чтобы возвести в квадрат');

// Задание 3.2

// const returnSquare = (userAnswer) => {
//     let square = prompt(userAnswer);

//     return alert(square ** 2);
// }

// returnSquare('Введите значение, чтобы возвести в квадрат');

// Задание 4 

// const checkAge = (userAnswer) => {
//     let age = prompt(userAnswer);

//     if (age < 0) {
//         alert("Вы ввели неправильное значение");
//     } else if (age > 0 && age < 12) {
//         alert("Привет, друг!");
//     } else {
//         alert("Добро пожаловать!")
//     }
// }

// checkAge("Укажите сколько вам лет?");

// Задание 5 

// const check = (valueOne, valueTwo) => {
//     let a = parseFloat(prompt(valueOne));
//     let b = parseFloat(prompt(valueTwo));
    
//     if (isNaN(a) || isNaN(b)) {
//         return "Одно или оба значения не являются числом";
//     } else {
//         return a * b;
//     }
// }

// console.log(check("Введите значения для проверки"));

// Задание 6 

// const getCube = (request) => {
//     let userNumber = prompt(request);

//     if (isNaN(userNumber)) {
//         return "Переданный параметр не является числом";
//     } else {
//         return userNumber ** 3;
//     }
// };

// console.log(getCube("Введите значение, чтобы возвести его в куб"));

// Задание 7 

// const getArea = function() {
//     const p = 3.14;
//     return `Площадь круга составляет ${p * (this.radius ** 2)}`;
// }

// const getPerimetr = function() {
//     const p = 3.14;
//     return `Периметр круга составляет ${2 * p * this.radius}`;
// }

// const circle1 = {
//     radius: 5,
//     getArea: getArea,
//     getPerimetr: getPerimetr
// }

// const circle2 = {
//     radius: 7,
//     getArea: getArea,
//     getPerimetr: getPerimetr
// }

// console.log(circle1.getArea());
// console.log(circle1.getPerimetr());
// console.log(circle2.getArea());
// console.log(circle2.getPerimetr());

// Задание 8

const seasonsGame = (userAnswer) => {
    let answer = parseInt(prompt(userAnswer));

    if (isNaN(answer) || answer < 1 || answer > 12) {
        return "Вы ввели некорректное значение, попробуйте снова!";
    } else if(answer === 12 || answer === 1 || answer === 2) {
        return "Зима";
    } else if(answer >= 3 && answer <= 5) {
        return "Весна";
    } else if(answer >= 6 && answer <= 8) {
        return "Лето";
    } else if(answer >= 9 && answer <= 11) {
        return ("Осень");
    } 
};
