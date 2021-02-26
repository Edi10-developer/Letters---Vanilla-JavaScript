/***********************
     L E V E L   1
***********************/
/* Console organizing
**********************/
console.log('***********************');
console.log('     L E V E L   1');
console.log('*********************** ')
console.log('              ');

/*  Exercises:
******************/

/* 1. 
**********/
console.log('************ EXERCISE N 1: **************');
let nameLetters = ['e', 'd', 'i'];
let i;

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
console.log('************ EXERCISE N 3: **************');
let name_letters = new Map();

name_letters.set('E', 1);
name_letters.set('D', 1);
name_letters.set('I', 1);

for(let [key, value] of nameL){
    console.log(key + ': ' + value);
}


/* 4. 
**********/
console.log('************ EXERCISE N 4: **************');
let lastNameLetters = ['s', 'e', 'l', 'i', 'm', 'i'];
let fullNameLetters = [];

fullNameLetters.push(nameLetters);
fullNameLetters.push(' ');
fullNameLetters.push(lastNameLetters);

console.log('My fullname letters are: ' + fullNameLetters);