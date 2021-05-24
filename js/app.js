'use strict'

let userName = prompt ('Whats your Name');
console.log(userName);
alert('Welcome ' + userName);

let permission = prompt ('I will be asking you some yes/no questions would you like to star ?');
console.log(permission);
permission = permission.toLowerCase();

if (permission === 'yes' || permission === 'y'){
    alert('Lets Star');
}
else if (permission === 'no' || permission === 'n'){
    alert('Sorry for disturbing');
}
else {
    alert('You can only answer with yes or no ');
}

let myAge = prompt ('Am I 25 Years Old ?');
console.log(myAge);
myAge = myAge.toLowerCase();

if (myAge === 'yes' || myAge === 'y'){
    alert('Thats Wrong Answer');
}
else if (myAge === 'no' || myAge === 'n'){
    alert('Thats Correct');
}
else {
    alert('You can only answer with yes or no ');
}

let born = prompt ('Was I born in Riyadh ?');
console.log(born);
born = born.toLowerCase();

switch(born){
    case 'yes':
    case 'y':
        alert('Thats Correct I was born in Riyadh');
        break;
    case 'no':
    case 'n':
        alert('Thats Incorrect answer');
        break;
}

