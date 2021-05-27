'use strict'

let counter = 0

 let userName = prompt ('Whats your Name');
console.log(userName);
alert('Welcome ' + userName);

function firstQ() {

let permission = prompt ('I will be asking you some yes/no questions would you like to star ?');
console.log(permission);
permission = permission.toLowerCase();

if (permission === 'yes' || permission === 'y'){
    alert('Lets Star');
    counter++;
}
else if (permission === 'no' || permission === 'n'){
    alert('Sorry for disturbing');
}
else {
    alert('You can only answer with yes or no ');
}

}


function secondQ() {
let myAge = prompt ('Am I 25 Years Old ?');
console.log(myAge);
myAge = myAge.toLowerCase();

if (myAge === 'yes' || myAge === 'y'){
    alert('Thats Wrong Answer');
}
else if (myAge === 'no' || myAge === 'n'){
    alert('Thats Correct');
    counter++;
}
else {
    alert('You can only answer with yes or no ');
}
}
function thirdQ() {
let born = prompt ('Was I born in Riyadh ?');
console.log(born);
born = born.toLowerCase();

switch(born){
    case 'yes':
    case 'y':
        alert('Thats Correct I was born in Riyadh');
        counter++;
        break;
    case 'no':
    case 'n':
        alert('Thats Incorrect answer');
        break;
}
}
function fourthQ() {
let major = prompt ('Is my major in E-Business ?');
console.log(major);
major = major.toLowerCase();

switch(major){
    case 'yes':
    case 'y':
        alert('Thats Correct');
        counter++;
        break;
    case 'no':
    case 'n':
        alert('Thats Incorrect answer');
        break;
}
}
function fifthQ() {
let job = prompt ('Did I work as an assistant webdeveloper back in 2020 ?');
console.log(job);
job = job.toLowerCase();

if (job === 'yes' || job === 'y'){
    alert('Thats Wrong Answer');
}
else if (job === 'no' || job === 'n'){
    alert('Thats Correct');
    counter++;
}
else {
    alert('You can only answer with yes or no ');
}

alert ('Thank You ' + userName + " For Your Time I Wish You Have A Great Day");
}



function sixthQ() {
let num = 6
let guessNum = prompt ('Guess A number between 1 to 10 you only have 4 attempts');

for(let i =1; i <= 3; i++){
 if (guessNum == 6 ){
     
        console.log(guessNum);
        alert ('Thats Right');
        i = 5
}

else if (guessNum >= 1 && guessNum <= 4){
    guessNum = prompt('Your guess is low');
    
}
else if (guessNum == 5 || guessNum == 7){
    
    guessNum = prompt('You are so close');

    
}
else if (guessNum >= 8 && guessNum <= 10){
    guessNum = prompt ('Your guess is high');

}
 
else{
    alert('Pick only from 1 to 10');
    break;
}

}

if (guessNum == 6){
    alert('Thats Right')
    counter++;
}
else{
    alert('you are out of attempts')
}
}

function seventhQ() {
let favColor = ['black' , 'red' , 'blue' , 'green'];



for(let index = 0; index < 6; index++){

let colorGuess = prompt('Guess what is my favorite color, you only have 6 attempts ?');

for(let z = 0; z < favColor.length; z++){
    if(colorGuess === favColor[z])
    alert('Thats a correct Guess');
    counter++;
    index = 7;
    break;
}
if(index === 5){
    alert('You lost. These are my favorite colors ' + favColor);
}
}
}


firstQ();
secondQ();
thirdQ();
fourthQ();
fifthQ();
sixthQ();
seventhQ();

alert('Your total score out of 7 is '+ counter);

