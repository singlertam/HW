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

// Задание 1

// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];

// people.sort((p1, p2) => p1.age - p2.age);

// console.log(people);

// Задание 2  

function isPositive(num) {
    return num > 0;
};

function isMale(person) {
    return person.gender === 'male';
};

function filter(people, ruleFunction) {
    const processed = [];
  
    for (i = 0; i < people.length; i++) {
        if (ruleFunction(people[i])) {
            processed.push(people[i]);
        }
    }

    return processed;
};

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));

// Задание 3

const showTime = () => {
    let timerId = setInterval(() => {
        const currentTime = new Date();
        console.log(currentTime);
    }, 1000 * 3);

    setTimeout(() => {
        clearInterval(timerId);
        console.log('30 секунд прошло');
    }, 1000 * 30)
}

showTime();

// Задание 4

function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

// Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
			if(cb) { 	cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));

