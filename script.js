// Задание 1

// let password = 'world';
// let request = prompt('Введите пароль');

// // if (password === request) {
// //     alert('Пароль введен верно');
// // } else {
// //     alert('Пароль введен неверно');
// // }

// (password === request) ? alert('Пароль введен верно') : alert('Пароль введен неверно');

// // Задание 2 

// let c = 11;

// if (c > 0 && c < 10) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// // Задание 3 

// let d = 5;
// let e = 3;

// if (d > 100 || e > 100) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// // Задание 4 

// let a = '2';
// let b = '3';
// // Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
// alert(parseInt(a) + parseInt(b));

// // Задание 5 

// let monthNumber = 13;

// switch (monthNumber) {
//     case 1:
//     case 2:
//     case 12:
//         console.log('Зима');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('Весна');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('Лето');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('Осень');
//         break;
//     default:
//         сonsole.log('Такого месяца не существует')
// }

// Задание 6

// let evenOrNot = prompt('Пожалуйста, введите любое число');

// let userNumber = parseFloat(evenOrNot);

// if (!isNaN(userNumber)) {
//     if (userNumber % 2 === 0) {
//         alert("Число четное");
//     } else {
//         alert("Число нечетное");
//     }
// } else {
//     alert("Вы ввели некорректное значение. Пожалуйста, введите число.");
// }

// Задание 7 

// let clientOs = 0;

// if (clientOs === 0) {
//     console.log('Установите версию приложения для iOS по ссылке');
// } else if (clientOs === 1) {
//     console.log('Установите версию приложения для Android по ссылке');
// } else {
//     console.log('Неизвестная операционная система');
// }

// Задание 8 

// let clientOs = 0;
// let clientDeviceYear = 2015;

// if (clientDeviceYear < 2015 && clientOs === 0) {
//     console.log('Установите облегченную версию приложения для iOS по ссылке');
// } else if (clientDeviceYear < 2015 && clientOs === 1) {
//     console.log('Установите облегченную версию приложения для Android по ссылке');
// } else {
//     console.log('У вас актуальная операционная система');
// }