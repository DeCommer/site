const rollBtn = document.getElementById("roll-btn");
const message = document.getElementById("message-text");
const special = document.getElementById("special-txt");

function rollDice() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let d1Image = document.getElementById('d-1'); 
    let d2Image = document.getElementById('d-2'); 
    let total = dice1 + dice2;

    for(let i = 0; i <= 6; i++) {
        d2Image.innerHTML = `<img src="../assets/dice/${dice2}.png">`;
        d1Image.innerHTML = `<img src="../assets/dice/${dice1}.png">`;
    }

    if(dice1 === 1 && dice2 === 1) {
        special.innerHTML = `Snake eyes!!!`;
    }else if(dice1 === dice2) {
        special.innerHTML = `Doubles!`;
    }else {
        special.innerHTML = ``;
    }

    if(total === 8 || total === 11) {
        message.innerHTML = `You got an ${total}`;
    }else {
        message.innerHTML =`You got a ${total}`;
    }
}
rollDice();

rollBtn.addEventListener('click', () => {
    rollDice();
});