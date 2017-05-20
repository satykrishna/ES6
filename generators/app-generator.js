'use strict';

var colors = require('./generators').colors;

const myColors = [];

for (let color of colors()) {
    myColors.push(color);
}

console.log(myColors);


const testingTeam = {
    'lead' : 'Amanda',
    'tester' : 'Bill',
    [Symbol.iterator] : function* () {
        yield this.lead;
        yield this.tester;
    }
}

const engineeringTeam = {
    testingTeam,
    'size' : 3,
    'department' : 'Engineering',
    'lead' : 'Alex',
    'engineer' : 'Dave',
    'manager' : 'ArunKumar',
    [Symbol.iterator] : function*() {
        yield this.lead;
        yield this.engineer;
        yield this.manager;
        yield* this.testingTeam;
    }
};
 


var teamIterator = require('./generators').TeamIterator;

const names=[];

for (let name of teamIterator(engineeringTeam)) {
    names.push(name);
}

console.log(names);