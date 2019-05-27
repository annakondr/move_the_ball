'use strict';
const field = document.querySelector('.field');
const ball = field.querySelector('.ball');
const fieldY = field.clientHeight - 20;
const fieldX = field.clientWidth - 20;

field.addEventListener('click', function(event) {
    let moveX = event.offsetX - ball.clientWidth/2;
    let moveY = event.offsetY - ball.clientHeight/2;

    if (moveX < 0) {
        moveX = 0;
    }
    if (moveY < 0) {
        moveY = 0;
    }
    if (moveX > fieldX) {
        moveX = fieldX - ball.clientWidth/2;
    }
    if (moveY > fieldY) {
        moveY = fieldY - ball.clientHeight/2;
    }
    ball.style.left = moveX +'px';
    ball.style.top = moveY +'px';
});
