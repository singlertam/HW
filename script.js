// Задание 1

// let i = 0;

// while (i < 2) {
//     console.log('Привет!');
//     i++;
// }

// Задание 2

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// Задание 3

// for (let i = 7; i <= 22; i++) {
//     console.log(i);
// }

// Задание 4

// let salary = {
//     "Коля" : "200",
//     "Вася" : "300",
//     "Петя" : "400"
// };

// for (let key in salary) {
//     console.log(`${key} — зарплата ${salary[key]} долларов.`)
// }

// Задание 5

// let n = 1000;
// let num = 0;

// do {
//     n = n / 2;
//     num++;
// } while (n >= 50);

// console.log("Полученное число:", n);
// console.log("Количество итераций:", num);

// Задание 6 

let firstFriday = 5;

for (let date = firstFriday; date <= 31; date += 7) {
    console.log(`Сегодня пятница, ${date}-е число. Необходимо подготовить отчет.`);
}