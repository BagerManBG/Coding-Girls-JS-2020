function sum1(a, b) {
    return a + b;
}

const sum2 = function (a, b) {
    return a + b;
};

const sum3 = (a, b) => {
    return a + b;
};

// console.log(typeof sum2); // function
console.log(sum1(3, 5));
console.log(sum2(3, 5));
console.log(sum3(3, 5));

/*
const pow2 = (number) => {
    return number ** 2;
};
*/
const pow2 = number => number ** 2;

console.log(pow2(25));

const sort = array_param => {
    array_param.sort();
    // return array_param;
};

let array_var = [23, 1, 4, -6, 0];
console.log(array_var);
/*array_var = */sort(array_var);
console.log(array_var);

let array_one = [];
let array_two = array_one;

console.log(array_one, array_two);
array_two.push(100);
console.log(array_one, array_two);

let x = 5;
if (true) {
    let x = 5;
    console.log(x);
    x = 10;
}
console.log(x);

for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i);

let j;
for (j = 0; j < 10; j++) {
    console.log(j);
}
console.log(j);

const person = {
    fName: 'John',
    lName: 'Doe',
    age: 34,
    call_1: function () {
        console.log(`Hi my name is ${person.fName} ${person.lName}, and I am ${person.age} years old`);
    },
    call_2: function () {
        console.log(`Hi my name is ${this.fName} ${this.lName}, and I am ${this.age} years old`);
    },
    // #3 Will not work
    call_3: () => {
        console.log(`Hi my name is ${this.fName} ${this.lName}, and I am ${this.age} years old`);
    }
};

person.call_1();
person.call_2();
person.call_3();

const fibonacci = (n, arr = [1, 1], i = 2) => {
    if (n < 1)
        return;

    switch (n) {
        case 1:
            return [1];
            // break;
        case 2:
            return [1, 1];
        // default:
    }

    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    i++;

    if (i === n)
        return arr;

    return fibonacci(n, arr, i);
};

const result = fibonacci(10);
console.log(result);

// Task 8: https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php
const is_happy = number => {
    const start_number = number;
    while (number >= 10) {
        const number_digits = Array.from(String(number));

        // for in
        // for of (cannot be used in objects)
        for (const index in number_digits) {
            number_digits[index] = number_digits[index] ** 2;
        }

        number = 0;
        for (const digit of number_digits) {
            number += digit;
        }
    }

    return number === 1 ? start_number : 'sad';
};

const lucky = [];
let i = 10;
while (lucky.length < 50) {
    const result = is_happy(i);
    i++;

    if (result !== 'sad')
        lucky.push(result);
}
console.log(lucky);

// Array clone example
const basic_array = [4, 5, 6, 10, 2];
const cloned_array = [];

for (const elem of basic_array) {
    cloned_array.push(elem);
}

