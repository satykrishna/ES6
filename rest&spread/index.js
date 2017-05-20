'use strict';
// //rest operator: NOT WORKING IN NODEJS
// const addNumbers=(... numbers)=> {
//  return  numbers.reduce((sum, each)=>sum+each, 0);
// }

// const addNumbers=(numbers)=> {
//  return  numbers.reduce((sum, each)=>sum+each, 0);
// }

// console.log(addNumbers(1, 2, 3, 4, 5));


//spread operator

const defaultColors = ['red', 'green'];

const userFavColors = ['orange', 'yellow'];

const spreadOperator = [...defaultColors, ...userFavColors];

console.log(spreadOperator);


const validateShoppingList = (...items)=>{
    if(!items.find('milk')) {
        items=['milk', ...items];
    }
}


validateShoppingList('oranges', 'bread');



const MathLibrary = {
    "calculateProduct"(...rest) {
        console.log('DEPRECATED!!! USE MUL METHOD INSTEAD')
        return this.multiply(...rest);
    },

    "multiply"(a, b) {
        return a*b;
    }

}