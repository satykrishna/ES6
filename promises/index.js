'use strict'

// let promise = new Promise((resolve, reject)=>{
//     // setTimeout(()=>resolve() , 3000);
//     var request = new XMLHttpRequest() ;

//     request.onload = ()=> {
//         resolve();
//     }
// });


// promise.then(()=>{
//     console.log('finally finished');
// }).then(()=> {
//     console.log('I also ran');
// }).catch(()=>{
//     console.log('An error ocurred');
// })


// promise.catch(()=>{
//     console.log('some error occurred');
// })


let p = new Promise((resolve, reject) => {
    reject();
})


p.then(() => console.log("finished")).then(() => console.log("Done")).then(() => console.log("200 OK!!!"));
p.catch(()=>console.log("ALL ERROR!!!"));