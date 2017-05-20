'use strict';
//more than 1 argument
const add = (a, b)=>a+b;
console.log(`${add(2, 3)}`);

const mul = a=>a*2;

//single argument
console.log(`${mul(2)}`);

//No arguments
const logTime=()=>console.log(new Date());

const log=(a)=>console.log(a);


logTime();


const numbers = [1, 2, 3];

let doubleNumbers=numbers.map(each=>each*2);

log(doubleNumbers);



const team  = {
    'members' : ['Jane', 'Bill'],
    'teamName' : 'Super Squad',
    'teamSummary' : function(){
        return this.members.map(each=>`${each} belong to ${this.teamName}`);
    }
}

log(team.teamSummary());
