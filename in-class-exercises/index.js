// Exercise 1

console.log('Hello, World!');

// Exercise 2

let name = 'Kayla';
console.log(name);

// Exercise 3

function calculateArea(length, width) {
    let area = length * width;
    console.log(area);
}

calculateArea(4, 8);

// Exercise 4

function checkEvenOrOdd(num) {
    if (num % 2 == 0) {
        console.log(num + " is even")
    } else {
        console.log(num + " is odd")
    };
}

checkEvenOrOdd(11);
checkEvenOrOdd(4);

// Exercise 5

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Exercise 6

const username = prompt('Enter your name: ');

console.log('Hello, ' + username + '!');

// Exercise 7

function calculateFactorial(num) {
    let product = 1;
    while (num >= 1) {
        product *= num;
        num--;
    }
    console.log(product);
}

calculateFactorial(4);

// Exercise 8

function isLeapYear(year) {
    if (year % 100 == 0 && year % 400 !== 0) {
        console.log(year + ' is not a leap year');
    } else if (year % 4 == 0) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

isLeapYear(2000); // true - 2000 is a leap year
isLeapYear(1700); // false - 1700 is not a leap year
isLeapYear(2015); // false - 2015 is not a leap year
isLeapYear(2016); // true - 2016 is a leap year

// Exercise 9

function calculateSum() {
    let sum = 0;
    let num = 1;

    while (num <= 100) {
        sum += num;
        num++;
    }

    console.log(sum);
}

calculateSum();

// Exercise 10

const num1 = parseInt(prompt('Enter a number: '));
const num2 = parseInt(prompt('Enter a number: '));

console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2));
console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2));
console.log(num1 + ' * ' + num2 + ' = ' + (num1 * num2));
console.log(num1 + ' / ' + num2 + ' = ' + (num1 / num2));

// Exercise 11

const myString = 'hello';
const myNum = 42;
const myBoolean = true;
const empty = null;
const whoAmI = undefined;
const myDogs = {
    dog1: 'Chico Bean',
    dog2: 'Lillie'
};
const letters = ['a', 'b', 'c'];
let oops;

// Exercise 12

let foodItems = [
    {name: 'smoothie',
    price: 4.25},
    {name: 'smokedGouda',
    price: 3.20},
    {name: 'bobaTea',
    price: 3.75}
]

const foodList = document.getElementById('foodList');

for (let i = 0; i < foodItems.length; i++) {
    let itemName = foodItems[i].name;
    let li = document.createElement('li');
    li.innerHTML = itemName;
    foodList.append(li);
}

// Exercise 13

function arrayOfMultiples(num, length) {
    let array = [];

    for (let i = 1; i <= length; i++) {
        let multiple = num * i;
        array.push(multiple);
    }

    console.log(array);
}

arrayOfMultiples(7, 5);
arrayOfMultiples(12, 10);
arrayOfMultiples(17, 6);

// Exercise 14

function typeOfNumber(num) {
    if (num == 0) {
        console.log('zero')
    } else if (num % 2 == 0) {
        console.log('even')
    } else {
        console.log('odd')
    }
}

typeOfNumber(15);
typeOfNumber(8);
typeOfNumber(0);

// Exercise 15

function multiply(num) {
    let multiples = [];

    for (let i = 1; i <= 10; i++) {
        multiples.push(num * i);
    }

    console.table(multiples);
}

multiply(4);

// Exercise 16

function isPrime(num) {
    let isPrime = true;
    
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
        }
    }

    console.log(isPrime);
}

isPrime(2); // true
isPrime(15); // false
isPrime(13); // true
