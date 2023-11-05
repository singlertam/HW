// if (a > b) {
//     console.log('Первое число больше');
// } else if (a === b) {
//     console.log('Числа равны');
// } else {
//     console.log('Второе число больше');
// }


// let answer = String(prompt('Зимой и летом одним цветом'));

// answer = answer.toLocaleLowerCase();

// if (answer === 'елка' || answer === 'ёлка' || answer === 'ель') {
//     console.log('угадал!')
// } else {
//     console.log('не угадал')
// }

// let time = String(prompt('Который час?'));


// if (time >= 40 && time <= 60) {
//     console.log('Можешь идти');
// } else {
//     console.log('Неудачное время!')
// }

// (time >= 40 && time <= 60) ? console.log('Можешь идти') : console.log('Неудачное время!');

// let day = String(prompt('Введите день недели'));

// switch (day) {
//     case 'понедельник':
//         console.log('Первый день недели');
//         break;
//     case 'вторник':
//         console.log('Второй день недели');
//         break;
//     case 'среда':
//         console.log('Третий день недели');
//         break;
//     case 'четверг':
//         console.log('Четвертый день недели');
//         break;
//     default:
//         console.log('Вы ввели неправильное значение!');
//         break;
// }

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