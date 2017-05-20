'use strict';

const INVENTORY = [
    {'title': 'Harry Potter', 'price' : 10},
    {'title' :'Eloquent Javascript', 'price': 14}
];

function createInventory(inventory) {
    return {
        inventory,
        "inventoryValue"(){
            return this.inventory.reduce((acc, each)=>acc+each.price, 0);
        },
        "priceForGivenTitle"(title) {
            return this.inventory.find(each=>each.title===title).price;
        }
    }
}

const LOG=(a)=>console.log(`${a}`);

let bookShop = createInventory(INVENTORY);

LOG(bookShop);

LOG(bookShop.inventoryValue());

LOG(bookShop.priceForGivenTitle('Harry Potter'));


function saveFile() {
    $.ajax({'method' : 'POST', url, data});
}