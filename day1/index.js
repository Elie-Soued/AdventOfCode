// Getting the data
const fs = require('fs');
const text = fs.readFileSync('data.txt', 'utf8');
const arr = text.trim().split(/\s+/)


// Initial state
let state = 50;
let password = 0;

for(element of arr){
    
    const operator = element.split("")[0];
    const value = Number(element.slice(1)); 

    if(operator === "R") state = state + value;
    else state = state - value;

    if ( state % 100 === 0) password++     
}


console.log('password :>> ', password);


