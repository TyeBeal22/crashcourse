
console.log("hello");

// Tye's practice;

var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);



// var age = prompt('What is your age');
//document.getElementById('age').innerHTML = age;

// Numbers

var num1 = 10;
num1++;

num1--
console.log(num1);
console.log(num1 % 4);


// Increment by any number

num1 += 20;
console.log(num1);

/* functions
 Call the function
*/
function fun(){
    console.log('this is a function')

}

fun();

/*
var name = prompt('What is your name?');
function greeting(yourName){
    var result = "Hello " + yourName;
    console.log(result);
}


 greeting(name);
*/

// How do arguments work in functions?

function sumNumbers (a, b){
    var result = a + b;
    console.log(a + b);

}
sumNumbers(2, 5);

/* while

var num = 0;

while (num < 100) {
    num += 1;
    console.log(num);
}

*/


for (let num = 0; num <= 100; num++) {
    console.log(num);
}

// Data Types

let yourAge = 18; //number
let yourName = 'Bob'; // string
let name = {first: "jane", last: "Doe"}; //object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random; // undefined
let nothing = null; // value null


// Strings

let fruit = 'apple';
let moreFruits = 'grapes\banana';

console.log(fruit.length);
console.log(fruit.indexOf('q'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('pple','ss'));

console.log(fruit.split('l'));

// arrays

let fruits = ['orange','apple','peach'];
let fruitz = new Array('orange', 'apple', 'peach');

console.log(fruits[1]);  //access value

fruits[0] = "pear";
console.log(fruits); // change value

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}


// array methods
console.log("to String", fruits.toString());
console.log(fruits.join('*'));
console.log(fruits, fruits.pop(), fruits);
console.log(fruits.push('blackberries'), fruits);
fruits[4] = 'new fruit';
fruits.shift();
console.log(fruits)
fruits.unshift('kiwi');
console.log(fruits)
let vegetables = ['asparagus','tomato', 'brocolli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 2));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());
let someNumbers = [5, 10, 2, 25, 3, 255];
console.log(someNumbers.sort(function(a, b){return a-b})) // lowest to high
console.log(someNumbers.sort(function(a, b){return b-a})) // highest to low

let emptyArray = new Array();
for (let num = 0; num < 10; num ++){
    emptyArray.push(num);
}
console.log(emptyArray);
// objects in Javascript
// dictionaries in python

let student = {first: 'Tye', last: 'Beal', 
age: 30, height: 165,
studentInfo: function (){
    return this.first + '\n' + this.last;
}
};
// this is the equivalent to self in python
// console.log(student.first);
// console.log(student.last);
// student.first = 'Markel' // change value
// console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

// conditionals, control flows, if else
// && And || or
// var age = prompt('what is your age?')
// if ((age >= 18) && (age <= 35)) {
 //   status = 'target demo';
 //   console.log(status);
// } else {
  //  status = 'not my audience';
//    console.log(status);
// }

// Switch statements
// if every day was a week day

switch (6) {
    case 0: text = "weekend";
    break;
    case 5: text = "weekend";
    break;
    case 6: text = "weekend";
    break;
    default: text = "weekday";

}
console.log(text);

