'use strict';

class Car {
    constructor({title}) {
        this.title = title;
    }

    "drive"() {
        return 'vroom!!!';
    }
}

class Toyota extends Car {

    constructor({color, title}) {
        super({title});
        this.color = color;
    }
    
    'honk'() {
        return 'Beep!!!';
    }

}


let toyota = new Toyota({color: 'red', 'title' : 'Corolla 2016'});

console.log(`${toyota.drive()}.... ${toyota.honk()}`) ;