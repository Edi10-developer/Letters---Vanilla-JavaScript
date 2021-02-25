/***********************
     L E V E L   1
***********************/
/* 1. 
**********/
let nameLetters = ['e', 'd', 'i'];
let i;

for(i = 0; i < nameLetters.length; i++){
    console.log(nameLetters[i]);
}

/* 2. 
**********/
/*
for(i = 0; i < nameLetters.length; i++){
    if(nameLetters[i] === 'a' || nameLetters[i] === 'e' || nameLetters[i] === 'i' || nameLetters[i] === 'o' || nameLetters[i] === 'u' || nameLetters[i] === 'y'){
        console.log(nameLetters[i] + ' es una vocal.' );
    }else{
     console.log(nameLetters[i] + ' es una consonante.' );
    }
}
*/
/* 3. 
**********/
let m = new Map();
for(i = 0; i < nameLetters.length; i++){
    if(nameLetters[i] === nameLetters[i])
    {
        nameLetters[i].size + 1;
    }
    m.set(nameLetters[i], m.size); /////////////////////////////////////
                                     //  KEEP WORKING FRPM THIS POINT
}

console.log(m);
console.log(nameLetters);

/* 4. 
**********/
let lastNameLetters = ['s', 'e', 'l', 'i', 'm', 'i'];
let fullNameLetters = [];

fullNameLetters.push(nameLetters);
fullNameLetters.push(' ');
fullNameLetters.push(lastNameLetters);

console.log('My fullname letters are: ' + fullNameLetters);