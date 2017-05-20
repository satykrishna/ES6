'use strict'

let promise = new Promise((resolve, reject)=>{
    // setTimeout(()=>resolve() , 3000);
    var request = new XMLHttpRequest() ;

    request.onload = ()=> {
        resolve();
    }
});


promise.then(()=>{
    console.log('finally finished');
}).then(()=> {
    console.log('I also ran');
}).catch(()=>{
    console.log('An error ocurred');
})


promise.catch(()=>{
    console.log('some error occurred');
})


