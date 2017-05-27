'use strict';

function* numbers() {
    yield 'value';
}


const generator = numbers();

console.log(generator.next());

console.log(generator.next());


function* shopping() {
    //stuff on the side walk;

    //walking down the side walk;

    //go into the store with cash;

   const stuffFromStore =  yield 'cash';

   const laundromat = yield 'washed clothes';

    //walking back to home;
    return {stuffFromStore, laundromat};
}


//stuff happening on the store

let gen = shopping();

console.log(gen.next());

console.log(gen.next('groceries'));

console.log(gen.next('wash'));


function *colors() {
    yield 'green';
    yield 'red';
    yield 'blue';
}

let colorArr = [];

for(let color of colors()) {
    colorArr.push(color);
}

console.log(colorArr);


let engineeringTeam = {
    'size' : 3,
    'department' : 'Engineering',
    'lead' : 'Jill',
    'manager' : 'Alex',
    'engineer' : 'Dave',
    testingTeam,
    [symbol.iterator] : function*() {
        yield this.lead;
        yield this.manager;
        yield* this.testingTeam;
    }
}


function* teamIterator(team) {
    yield team.manager;
    yield team.lead;
    yield team.engineer;
    yield* testingTeamIterator(team.testingTeam);
}

let names = [];

for(let name of teamIterator(engineeringTeam)) {
    names.push(name);
}

console.log(names);

let testingTeam = {
    'lead' : 'Amenda',
    'tester' : 'Bill',
    [Symbol.iterator] : function* () {
        yield this.lead;
        yield this.tester;
    }
}

function *testingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}


class Comment {

    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    *[Symbol.iterator](){
        for(let child of this.children) {
            yield* child;
        }
    }

}


const children = [
    new Comment('good comment', []),
    new Comment('Bad Comment', []),
    new Comment('meh', [])
]

const tree = new Comment('Great Post!!!', children);

