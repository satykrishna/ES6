'use strict';

let expense = {
    'type': 'Business',
    'amount': '$45 USD'
}


//ES5 way
// let type = expense.type;
// let amount = expense.amount;

// let {amount} = expense;
// let {type} = expense;

let { amount, type } = expense;
console.log(amount, type);


//Destructuring Arguments object

var saveFiled = {
    'extension': 'jpeg',
    'name': 'repost',
    'size': 14949
}


// function fileSummary(file) {
//     return `FILE : ${file.name}.${file.extension}  is of size ${file.size}`
// }

function fileSummary({ name, extension, size }, { color }) {
    return `COLOR : ${color} FILE : ${name}.${extension}  is of size ${size}`
}


fileSummary(saveFiled, { color: 'red' });

//Destructuring arrays

const companies = [
    'Google',
    'Facebook',
    'Uber'
];

let [name, name2, name3, name4] = companies;

//name = Google, name2=Facebook, name3=Uber, name4=undefined

const { length } = companies //give length of the array company, i.e., the property length on the array

let [first, ...rest] = companies;

//first = Google, rest = Facebook, Uber


// Destructuring arrays and objects at the same time


companies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Menlo Park' },
    { name: 'Uber', location: 'San Fransisco' }
]

const [{ location }] = companies; //output location:'Mountain View'


const google = {
    'locations': ['NY', 'AZ', 'TX', 'GA']
}

let { locations: [loc] } = google; //output loc : NY


//USE CASE OF DESTRUCTURING objects
function signUp({ username, password, email, dateofBirth, city }) {
    //craete new user
}


let user = {
    'username': 'satya',
    'password': 'krishna',
    'email': 'email@address.com',
    'dateofBirth': '01/3/2000',
    'city': 'NYC'
}

signUp(user);


//USE CASE OF DESTRUCTURING arrays

const points = [
    [4, 5],
    [10, 1],
    [0, 40]
]

// show [{x: 4, y: 5}, {x:10, y:1}]

let xy = points.map(([x, y]) =>{return {x, y}});


const profile = {
    title: 'Engineer',
    department: 'Engineering'
};

function isEngineer({ title, department }) {
    return title === 'Engineer' && department === 'Engineering';
}

const classes = [
    ['Chemistry', '9AM', 'Mr. Darnick'],
    ['Physics', '10:15AM', 'Mrs. Lithun'],
    ['Math', '11:30AM', 'Mrs. Vitalis']
];

function classMap([subject, time, teacher]) {
    return { subject, time, teacher };
}

let classAsObject = classes.map(([subject, time, teacher]) => {
    return { subject, time, teacher }
});


let numbers = [1, 2, 3];

function double(num, ...arr) {
    if (!arr) return [];
    return [num * 2, ...double(rest)];
}