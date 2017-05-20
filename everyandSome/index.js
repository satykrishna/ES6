'use strict';

let computers = [
    { 'name': 'Apple', 'ram': 24 },
    { 'name': 'Compaq', 'ram': 4 },
    { 'name': 'Acer', 'ram': 32 }
]

let allComputersCanRunProgram = computers.every(each=>each.ram > 32);

let canSomeComputersCanRunProgram = computers.some(each=>each.ram < 32);


console.log(`${allComputersCanRunProgram } ${canSomeComputersCanRunProgram}`);