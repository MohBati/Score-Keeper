const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const reset = document.querySelector('#reset')


let p1Counter = 0;
let p2Counter = 0;

p1Button.addEventListener('click', function() {
    p1Counter+= 1;
    p1Score.textContent = p1Counter;
})

p2Button.addEventListener('click', function() {
    p2Counter+= 1;
    p2Score.textContent = p2Counter;
})

reset.addEventListener('click', function() {
    p1Score.textContent = '0';
    p2Score.textContent = '0';
    p1Counter = 0;
    p2Counter = 0;
})