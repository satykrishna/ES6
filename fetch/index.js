'use strict';


const url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url).then(data=>console.log(data));

fetch(url).then(response=>response.json()).then(data=>console.log(data));