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

// Задание 1

let a = 'привет, мой дорогой друг!';
console.log(a.toUpperCase());

// Задание 2 

const presence = (array, str) => {
    array.forEach(element => {
        if(element.toLowerCase().startsWith(str.toLowerCase())) {
            console.log(element);
        }
    });
}

presence(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');

// Задание 3 

let number = 32.58884;
console.log(Math.floor(number), Math.ceil(number), Math.round(number));

// Задание 4 

const numbers =  [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbers), Math.max(...numbers));

// Задание 5 

const randomNumber = () => {
    return Math.random() * 10;
}

console.log(randomNumber());

// Задание 6

const random = (int) => {
    const arr = [];
    for(i = 0; arr.length < Math.floor(int / 2); i++) {
        arr.push(Math.floor(Math.random() * (int + 1)));
    }
    return arr;
}

console.log(random(15));

// Задание 7 

const twoValues = (a, b) => {
    let min = Math.ceil(a);
    let max = Math.floor(b); 

    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(twoValues(5, 12));

// Задание 8

console.log(new Date());

// Задание 9

let currentDate = new Date();
let future = new Date(currentDate);

future.setDate(currentDate.getDate() + 73);

console.log(future);

// Задние 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", 
"Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();
let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] +
" " + myDate.getFullYear() + " - это " + days[myDate.getDay()];
let time = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() +
":" + myDate.getSeconds();

console.log(fullDate);
console.log(time);

// Задание 11

const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

const guess = () => {
    let newWords = words.sort(() => Math.random() - 0.5);
    alert(newWords);

    let question1 = prompt('Чему равнялся первый элемент массива?');
    let question2 = prompt('Чему равнялся последний элемент массива?');
    if((question1.toLowerCase() === words[0].toLowerCase())
        && (question2.toLowerCase() === words[words.length - 1].toLowerCase()))
    {
        alert("Congratulations!!!")
    } else if((question1.toLowerCase() === words[0].toLowerCase()) 
        || (question2.toLowerCase() === words[words.length - 1].toLowerCase()))
    {
        alert("Вы были близки к победе!");
    } else {
        alert("К сожалению, вы ответили неправильно!");
    }
}
