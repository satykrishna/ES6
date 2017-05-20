'use strict';

let numbers = [10, 20, 30];

let sum = 0;

sum = numbers.reduce((sum, number) => sum - number, 0);

console.log(sum);


let primaryColors = [
    { 'color': 'red' },
    { 'color': 'blue' },
    { 'color': 'yellow' }
]


let colorArray = primaryColors.reduce((acc, ele) => {
    console.log(acc);
    acc.push(ele.color);
    return acc;
}, []);

console.log(colorArray);




function isBalancedString(str) {
    let isBalanced = str.split("").reduce((prev, each) => {
        if (prev < 0) return prev;
        if (each === '(') return ++prev;
        else if (each === ')') return --prev;
        else return prev;
    }, 0);
    if (isBalanced === 0) {
        console.log(`${str} is a balanced`);
    } else {
        console.log(`${str} is not balanced`);
    }
}

isBalancedString("((((");
isBalancedString(")(");
isBalancedString("()(()()())");


let nums = [1, 2, 2, 1, 2, 1, 2];

let noDups = nums.reduce((acc, ele) => {
 if(!acc.find(ele)){
     acc.push(ele);
 } 
 return acc;
}, []);