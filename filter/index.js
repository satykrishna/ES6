'use strict';

let products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price : 1 },
    { name: 'bannana', type: 'fruit', quantity: 10, price : 15 },
    { name: 'celery', type: 'vegetable', quantity: 30, price : 3 },
    { name: 'orange', type: 'fruit', quantity: 3, price : 5 }
]


let fruits = products.filter(function(each) {
    return each.type==='fruit';
})


let veggies = products.filter(each=>each.type==='vegetable');

let customSearch = products.filter(each=>each.type==='vegetable'&& each.price < 10 && each.quantity > 2);

console.log(`Fruits : ${fruits} `);

console.log(`Veggies : ${veggies}`);

console.log(`${customSearch}`);

let  numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

function filterGreaterThan50(num) {
    return num.filter(eachNum=>eachNum>50);
}

let users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

function filterUsers(users) {
    return users.filter(each=>each.admin===true);
}


function reject(num, checkFunc) {
    return num.filter(each=>!checkFunc(each));
} 


