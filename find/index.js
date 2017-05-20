'use strict';

let users = [
    { 'name': 'Jill' },
    { 'name': 'Bill' },
    { 'name': 'Cill' },
    { 'name': 'Dill' }
]

function filterUser(users, name) {
    return users.filter(each => each.name === name);
}


class Car {
    constructor(model) {
        this.model = model;
    }
}

let posts = [
    { 'id': 1, 'title': 'New Post' },
    { 'id': 2, 'title': 'Old Post' }
]

let comment = {
    'postid': 1,
    'content': 'Great Post'
}

function postForComment(posts, comment) {
    return posts.find(eachPost => eachPost.id === comment.postid);
}

function findWhere(array, criteria) {
   return array.find(function (each) {
        let found = true;
        for (let key in criteria) {
            if (each[key] !== criteria[key]) {
                found = false;
                break;
            }
        }
        return found;
    })
}


for(let x in comment) {
    console.log(x);
}