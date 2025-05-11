const rollBtn = document.getElementById('roll-btn');
let message = document.getElementById('messageTxt');

let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;

let d1Image = document.getElementById('d-1'); 
let d2Image = document.getElementById('d-2'); 

d2Image.innerHTML = `<img src="../assets/dice/${dice2}.png">`;
d1Image.innerHTML = `<img src="../assets/dice/${dice1}.png">`;


function rollDice() {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    let total = dice1 + dice2;

    for(let i = 0; i <= 6; i ++) {
        d1Image.innerHTML = `<img src="../assets/dice/${dice1}.png">`;
        d2Image.innerHTML = `<img src="../assets/dice/${dice2}.png">`;
    }

    if(total === 8 || total === 11) {
        message.innerHTML = `You got an ${total}!`;
    }else {
        message.innerHTML = `You got a ${total}!`;
    }


}

rollBtn.addEventListener('click', () => {
    rollDice();
})