// alert('Hello World');
/*
console.log('Hello Console!');
*/

// const a = 10;
// let b = 14;

// console.log(a, b);

// a = 7;
// b = 7;

// console.log(b);

// const number = 10;
const string = 'musaka';
const bool = true;

// console.log(number + ' => ' + typeof number);
// console.log(string + ' => ' + typeof string);
// console.log(bool + ' => ' + typeof bool);

const a = 45;
const b = 6;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-34));

console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.round(4.5));

console.log(Math.pow(2, 10));
console.log(Math.sqrt(25));

console.log(Math.min(5, 10, -7, 1000, 3));
console.log(Math.max(5, 10, -7, 1000, 3));

console.log(Math.random());

const random = Math.floor(Math.random() * 10) + 1;
console.log(random);

const array = [5, 'lasagna', true, [1, 2, 3]];
const colors = {
    red: '#FF0000',
    blue: '#0000FF',
    green: '#00FF00',
    pinkish: '#FAC',
};

console.log(array);
console.log(colors);

console.log(array.length);
console.log(array[0]);
console.log(array[1]);
console.log(array[array.length - 1]);

array.push(1);
array.pop();
array.unshift(7);
array.shift();

console.log(colors.red);
console.log(colors['pinkish']);

// if (condition) {
//     operation;
//     operation;
// }
// else if (other_condition) {
//     some_other_operation;
// }
// else {
//     other_operation;
//     other_operation;
// }

const number = 10;
// if (a === b) {}
// if (a > b) {}
// if (a >= b) {}
// if (a < b) {}
// if (a <= b) {}
// if (a !== b) {}
//
// if (a_bool && b_bool) {}
// if (a_bool || b_bool) {}
// if (!b_bool) {}
if (number % 2 === 0) {
    console.log('Even');
}
else {
    console.log('Odd');
}

let i = 0;
while (i < 11) {
    console.log(i);
    i++
}

i = 0;
do {
    console.log(i);
    i++
} while (i < 11);

for (i = 0; i < 11; i++) {
    console.log(i);
}

i = 5;

// All three = same
i = i + 1;
i += 1;
i++;

// 2 ** 3
