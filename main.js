'use strict';

const field = document.querySelector('.field');
const ball = field.querySelector('.ball');
const fieldCoord = field.getBoundingClientRect();
const fieldY = fieldCoord.y + field.clientTop;
const fieldX = fieldCoord.x + field.clientLeft;

field.addEventListener('click', function(event) {
    let moveX = event.clientX - fieldX - ball.offsetWidth/2;
    let moveY = event.clientY - fieldY - ball.offsetHeight/2;
    let fieldRight = field.clientWidth - ball.offsetWidth;
    let fieldBottom = field.clientHeight - ball.offsetHeight;

    if (moveX < 0) {
        moveX = 0;
    }
    if (moveX > fieldRight) {
        moveX = fieldRight;
    }
    if (moveY < 0) {
        moveY = 0;
    }
    if (moveY > fieldBottom) {
        moveY = fieldBottom;
    }

    ball.style.left = `${moveX}px`;
    ball.style.top = `${moveY}px`;
});
