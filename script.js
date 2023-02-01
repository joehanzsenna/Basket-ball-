'use strict'

let score1 = document.querySelector('.score1')
let score2 = document.querySelector('.score2')
let btn = document.querySelector('.btn-new')
let result = document.querySelector('.result')

 score1.innerText = 0;
 score2.innerText = 0;
 result.innerText = 'Lets Play';

function play(){
    let random = Math.ceil(Math.random()* 10);
    score1.innerText = random;
    let random2 = Math.ceil(Math.random()* 10);
    score2.innerText = random2;

    if(score1.innerText > score2.innerText){
        result.innerText = `Home Wins`;
    }else if(score1.innerText < score2.innerText){
        result.innerText = `Guest Wins`;
    }else {
        result.innerText = `it's a tie`;
    }
    
}

btn.addEventListener('click',play);

