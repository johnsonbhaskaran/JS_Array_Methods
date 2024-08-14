// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>27 JS Array Methods</h1>`;
console.log('');

const out1 = Array(10);
console.log(JSON.stringify(out1));
console.log('');

const out2 = Array.from('johnson');
console.log(out2);
console.log('');

const out3 = Array.from(Array(10), (_, i) => i + 1);
console.log(out3);
console.log('');

const arr = [1, 2, 4];
const str = 'John Doe';
console.log(Array.isArray(arr));
console.log(Array.isArray(str));
console.log('');

console.log(arr.at(2));
console.log('');

const out4 = arr.concat(5);
console.log(out4);
console.log('');

const out5 = arr.every((item) => item <= 3);
console.log(out5);
console.log('');

const out6 = arr.some((item) => (item = 2));
console.log(out6);
console.log('');

const newArr = out4.concat(arr);
newArr.fill('abc', 0, 3);
console.log(newArr);
console.log('');

const arr1to100 = Array.from(Array(100), (_, i) => i + 1);
console.log(arr1to100);
const evenArrFilter = arr1to100.filter((item) => item % 2 === 0);
console.log(evenArrFilter);
console.log('');

const people = ['amir', 'john', 'sam', 'harry'];
// console.log(people.find("r"));
console.log(people.find((item) => item.endsWith('r')));
console.log('');

const employees = [
  { id: 1, name: 'John', dob: 1999 },
  { id: 2, name: 'Doe', dob: 2001 },
  { id: 3, name: 'Marry', dob: 2001 },
  { id: 4, name: 'Larry', dob: 1990 },
];
console.log(employees.findIndex((item) => item.dob === 2001));
console.log('');

const multiDimenArr = [1, 3, [3, 5, 6], [2, 65, [9, 30]]];
const flatDepth2 = multiDimenArr.flat(2);
console.log(flatDepth2);
console.log('');

flatDepth2.forEach((item, i, arr) => (arr[i] = item * 10));
console.log(flatDepth2);
console.log('');

console.log(flatDepth2.lastIndexOf(30));
console.log('');

console.log(flatDepth2.map((item) => item / 2));
console.log('');

console.log(flatDepth2.reduce((prev, current, i, arr) => prev + current, 0));
console.log('');

console.log(
  flatDepth2.reduceRight((prev, current, i, arr) => prev + current, 0)
);
console.log('');

const arrx = [1, 5, 3, 2000, 25];
console.log(arrx.reverse());
console.log('');

const alphabets = ['a', 'b', 'c', 'd'];
console.log(alphabets.slice(1, 3));
console.log(alphabets.slice(0));
console.log(alphabets.slice(0, -1));
console.log('');

console.log(alphabets);
alphabets.splice(2, 0, 'elem1', 'elem2');
console.log(alphabets);
alphabets.splice(2, 1, 'elem3');
console.log(alphabets);
alphabets.splice(2, 2);
console.log(alphabets);
console.log('');

console.log(alphabets.includes('Tea'));
console.log('');

const numbers = [1, 10, 5, 2, 9, 4];
numbers.sort();
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);
console.log('');

console.log(employees);
employees.sort((a, b) => a.dob - b.dob);
console.log(employees);
console.log('');

console.log(people);
people.push('Sushma');
console.log(people);
people[1] = 'Abdul';
console.log(people);
people.pop();
people.pop();
console.log(people);
console.log('');

console.log(people);
people.shift();
console.log(people);
console.log('');

console.log(people);
people.unshift('add new at start');
console.log(people);
console.log('');

// React JS Interview
// 01
function func1() {
  return 2;
}

function func2() {
  return 4;
}

let a = (func1(), func2());

let b = (2, 4, 7);

console.log(b);

// 02
const arry = ['one', 'two', 'three'];
const strng = 'Hello';

const res = arry.includes('on');
const anotherVar = arry.includes('onetwo');
const newVar = strng.includes('ll');

console.log(res);
console.log(anotherVar);
console.log(newVar);
console.log('');

// 03
console.log(true == '');
console.log(true == true);
console.log('1' == 1);
console.log('1' === 1);
console.log('');

// 04
let aVar = 10;
let bVar = new Number(10);
let c = 10;

console.log(aVar === bVar);
console.log(typeof bVar);
console.log(aVar == bVar);
console.log('');

//05
console.log(+true); // unary operator
console.log(!'xyz');
console.log('');

// 06

function curryFunction(ab) {
  return function (bb) {
    const mult = ab * bb;
    return function (cb) {
      return mult * cb;
    };
  };
}

console.log(curryFunction(2)(3)(4));

// 07
