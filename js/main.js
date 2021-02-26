/***********************
     L E V E L   1
***********************/
/* 1. 
**********/
let nameLetters = ['e', 'd', 'i'];
let i;

console.log('************ EXERCISE N 1: **************');
for(i = 0; i < nameLetters.length; i++){
    console.log(nameLetters[i]);
}

/* 2. 
**********/

console.log('************ EXERCISE N 2: **************');
for(i = 0; i < nameLetters.length; i++){
    if(nameLetters[i] === 'a' || nameLetters[i] === 'e' || nameLetters[i] === 'i' || nameLetters[i] === 'o' || nameLetters[i] === 'u' || nameLetters[i] === 'y'){
        console.log(nameLetters[i] + ' es una vocal.' );
    }else{
        console.log(nameLetters[i] + ' es una consonante.' );
    }
}

/* 3. 
**********/
let m = new Map();
let nameL = new Map();/*
for(i = 0; i < nameLetters.length; i++){ 
    m.set(nameLetters[i], m.set(nameLetters[i])); 
}  */
console.log('************ EXERCISE N 3: **************');
nameL.set('E', 1);
nameL.set('D', 1);
nameL.set('I', 1);

for(let [key, value] of nameL){
    console.log(key + ': ' + value);
}


/* 4. 
**********/
let lastNameLetters = ['s', 'e', 'l', 'i', 'm', 'i'];
let fullNameLetters = [];

fullNameLetters.push(nameLetters);
fullNameLetters.push(' ');
fullNameLetters.push(lastNameLetters);

console.log('************ EXERCISE N 4: **************');
console.log('My fullname letters are: ' + fullNameLetters);