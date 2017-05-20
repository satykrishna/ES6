
'use strict';

require('babel-register');

function makeAjaxRequest(url, method= "GET" ) {
    console.log(`${url} is URL && method is ${method}`);
}

makeAjaxRequest('www.google.com');

makeAjaxRequest('www.facebookapi.com', 'POST');


class User {
    constructor(id) {
        this.id = id;
        generateId();
    }

    generateId() {
        this.id = Math.randon()*99999;
    }

    getId() {
        return this.id;
    }
}

class Admin extends User {
    constructor(user=new User()) {
        this.user = user;
    }

    getAdmin() {
        this.user.admin=true;
        return this.user;
    }
}


let admin = new Admin();
console.log(user.getAdmin());