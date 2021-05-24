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
else if (permission === 'no'){
    alert('Sorry for disturbing');
}
else {
    alert('You can only answer with yes or no ');
}

