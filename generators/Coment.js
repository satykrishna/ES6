'use strict';

class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    *[Symbol.iterator]() {
        yield this.content;
        for(let eachChild of this.children) {
            yield* eachChild;
        }
    }
}


const children = [
    new Comment('Good Comment', []),
    new Comment('Bad Comment', []),
    new Comment('Worst Comment', []) 
]


const tree = new Comment('Great Post!!!!' , children);

console.log(tree);

const values=[];

for(let val of tree) {
    values.push(val);
} 


console.log(values);