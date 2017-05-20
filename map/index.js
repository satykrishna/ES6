'use strict';

let nums = [1, 2, 3];

let doubleNums = nums.map(num => num * 2);

console.log(doubleNums);


let cars = [
    { model: 'Buick', price: 'cheap' },
    { model: 'Figo', price: 'moderate' },
    { model: 'BMW', price: 'Costly' },
    { model: 'nissan', price: 'expensive' },
]


let prices = cars.map((car)=> {
    return car.price;
});

console.log(prices);

let paints =  [ { color: 'red', company : 'A' }, { color: 'blue', company : 'B' }, { color: 'yellow', company:'c' }];

function pluck (array, property) {
    return array.map(each=>each[property]);
}

console.log(pluck(paints, 'color'));

console.log(pluck(paints, 'company'));