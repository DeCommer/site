let deck;

let isHeld_1 = false;
let isHeld_2 = false;
let isHeld_3 = false;
let isHeld_4 = false;
let isHeld_5 = false;

let round = 0; // round 0 is deal round, 1 is draw, and 2 is results round
console.log(`round: ${round}`);

let handArray = [];
let holdArray = [];

const hand = document.getElementById('hand');

const holdBts = document.querySelectorAll('.hold-btn');
const dealBtn = document.querySelector('.deal-btn');
const holdBtn_1 = document.querySelector('.hold-btn-1');
const holdBtn_2 = document.querySelector('.hold-btn-2');
const holdBtn_3 = document.querySelector('.hold-btn-3');
const holdBtn_4 = document.querySelector('.hold-btn-4');
const holdBtn_5 = document.querySelector('.hold-btn-5');


if (round === 0) {
    holdBtn_1.disabled = true;
    holdBtn_2.disabled = true;
    holdBtn_3.disabled = true;
    holdBtn_4.disabled = true;
    holdBtn_5.disabled = true;
}


const buildDeck = () => {
    let values = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A'
    ];

    let suits = ['♧', '◇', '♡', '♤'];

    deck = [];

    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(`${values[j]}-${suits[i]}`);
        }
    }

    return deck;
};


const shuffleDeck = () => {
    for (let i = 0; i < deck.length; i++) {
        let shuffle = Math.floor(Math.random() * deck.length);

        let temp = deck[i];
        deck[i] = deck[shuffle];
        deck[shuffle] = temp;
    }
};


const deal = () => {

    holdBtn_1.disabled = false;
    holdBtn_2.disabled = false;
    holdBtn_3.disabled = false;
    holdBtn_4.disabled = false;
    holdBtn_5.disabled = false;

    round = 1;

    handArray = [];
    holdArray = [];

    for (let i = 0; i < 5; i++) {

        let cardImage = document.createElement('img');

        /*
            FIX:
            Instead of splice(), use shift().

            splice(0, 1) returns an array.
            shift() returns the card itself.
        */

        handArray[i] = deck.shift();

        cardImage.src = `../assets/cards/${handArray[i]}.png`;

        hand.append(cardImage);
    }

    test();

    console.log(`Initial Hand Array: ${handArray}`);
    console.log(`round: ${round}`);

    dealBtn.textContent = "Draw";
};


const draw = () => {

    round = 2;

    /*
        This array keeps the hold position lined up
        with the position inside handArray.
    */

    let heldCards = [
        isHeld_1,
        isHeld_2,
        isHeld_3,
        isHeld_4,
        isHeld_5
    ];

    console.log(`draw hold array: ${holdArray}`);
    console.log(`Before draw: ${handArray}`);

    /*
        Go through all 5 card positions.

        If the card is NOT held,
        replace it with the next card from the deck.
    */

    for (let i = 0; i < handArray.length; i++) {

        if (heldCards[i] === false) {
            handArray[i] = deck.shift();
        }
    }

    /*
        Clear the old cards before displaying
        the final hand.
    */

    clearHand();

    for (let i = 0; i < handArray.length; i++) {

        let cardImage = document.createElement('img');

        cardImage.src = `../assets/cards/${handArray[i]}.png`;

        hand.append(cardImage);
    }

    console.log(`Final hand: ${handArray}`);
    console.log(`round: ${round}, end`);

    /*
        Disable hold buttons after draw.
        Player should not change holds once
        the final hand has been drawn.
    */

    holdBtn_1.disabled = true;
    holdBtn_2.disabled = true;
    holdBtn_3.disabled = true;
    holdBtn_4.disabled = true;
    holdBtn_5.disabled = true;
};


const test = () => {

    console.log(`Hand type: ${typeof(handArray)}`);

    console.log(`Hand: ${handArray}`);

    console.log(`Card 1: ${handArray[0]}`);
    console.log(`Card 2: ${handArray[1]}`);
    console.log(`Card 3: ${handArray[2]}`);
    console.log(`Card 4: ${handArray[3]}`);
    console.log(`Card 5: ${handArray[4]}`);

    console.log(`Card 6? ${handArray[5]}`);

    console.log(deck);
};


/*
    HOLD BUTTON 1
*/

holdBtn_1.addEventListener('click', () => {

    if (isHeld_1 === false) {

        isHeld_1 = true;

        holdBtn_1.classList.add('hold');

        holdArray.push(handArray[0]);

        console.log(
            `${handArray[0]} is held from position ${holdArray.indexOf(handArray[0])}`
        );

        console.log(`Hold array: ${holdArray}`);

    } else {

        isHeld_1 = false;

        holdBtn_1.classList.remove('hold');

        /*
            FIX:
            pop() cannot remove a specific card.

            Find the card in holdArray and remove it
            using splice().
        */

        let holdIndex = holdArray.indexOf(handArray[0]);

        if (holdIndex !== -1) {
            holdArray.splice(holdIndex, 1);
        }

        console.log(`Card 1 is no longer held`);

        console.log(`Hold array: ${holdArray}`);
    }
});


/*
    HOLD BUTTON 2
*/

holdBtn_2.addEventListener('click', () => {

    if (isHeld_2 === false) {

        isHeld_2 = true;

        holdBtn_2.classList.add('hold');

        holdArray.push(handArray[1]);

        console.log(
            `${handArray[1]} is held from position ${holdArray.indexOf(handArray[1])}`
        );

        console.log(`Hold array: ${holdArray}`);

    } else {

        isHeld_2 = false;

        holdBtn_2.classList.remove('hold');

        let holdIndex = holdArray.indexOf(handArray[1]);

        if (holdIndex !== -1) {
            holdArray.splice(holdIndex, 1);
        }

        console.log(`Card 2 is no longer held`);

        console.log(`Hold array: ${holdArray}`);
    }
});


/*
    HOLD BUTTON 3
*/

holdBtn_3.addEventListener('click', () => {

    if (isHeld_3 === false) {

        isHeld_3 = true;

        holdBtn_3.classList.add('hold');

        holdArray.push(handArray[2]);

        console.log(
            `${handArray[2]} is held from position ${holdArray.indexOf(handArray[2])}`
        );

        console.log(`Hold array: ${holdArray}`);

    } else {

        isHeld_3 = false;

        holdBtn_3.classList.remove('hold');

        let holdIndex = holdArray.indexOf(handArray[2]);

        if (holdIndex !== -1) {
            holdArray.splice(holdIndex, 1);
        }

        console.log(`Card 3 is no longer held`);

        console.log(`Hold array: ${holdArray}`);
    }
});


/*
    HOLD BUTTON 4
*/

holdBtn_4.addEventListener('click', () => {

    if (isHeld_4 === false) {

        isHeld_4 = true;

        holdBtn_4.classList.add('hold');

        holdArray.push(handArray[3]);

        console.log(
            `${handArray[3]} is held from position ${holdArray.indexOf(handArray[3])}`
        );

        console.log(`Hold array: ${holdArray}`);

    } else {

        isHeld_4 = false;

        holdBtn_4.classList.remove('hold');

        let holdIndex = holdArray.indexOf(handArray[3]);

        if (holdIndex !== -1) {
            holdArray.splice(holdIndex, 1);
        }

        console.log(`Card 4 is no longer held`);

        console.log(`Hold array: ${holdArray}`);
    }
});


/*
    HOLD BUTTON 5
*/

holdBtn_5.addEventListener('click', () => {

    if (isHeld_5 === false) {

        isHeld_5 = true;

        holdBtn_5.classList.add('hold');

        holdArray.push(handArray[4]);

        console.log(
            `${handArray[4]} is held from position ${holdArray.indexOf(handArray[4])}`
        );

        console.log(`Hold array: ${holdArray}`);

    } else {

        isHeld_5 = false;

        holdBtn_5.classList.remove('hold');

        let holdIndex = holdArray.indexOf(handArray[4]);

        if (holdIndex !== -1) {
            holdArray.splice(holdIndex, 1);
        }

        console.log(`Card 5 is no longer held`);

        console.log(`Hold array: ${holdArray}`);
    }
});


const clearHand = () => {
    hand.innerHTML = '';
};


/*
    Reset hold buttons and variables
    before starting another hand.
*/

const resetHolds = () => {

    isHeld_1 = false;
    isHeld_2 = false;
    isHeld_3 = false;
    isHeld_4 = false;
    isHeld_5 = false;

    holdArray = [];

    holdBtn_1.classList.remove('hold');
    holdBtn_2.classList.remove('hold');
    holdBtn_3.classList.remove('hold');
    holdBtn_4.classList.remove('hold');
    holdBtn_5.classList.remove('hold');
};


dealBtn.addEventListener('click', () => {

    /*
        ROUND 0
        Start a brand new game.
    */

    if (round === 0) {

        clearHand();

        resetHolds();

        buildDeck();

        shuffleDeck();

        deal();
    }

    /*
        ROUND 1
        Player has selected holds.
        Draw replacement cards.
    */

    else if (round === 1) {

        draw();

        dealBtn.textContent = "Deal";
    }

    /*
        ROUND 2
        Final hand is complete.
        Clicking Deal begins another hand.
    */

    else if (round === 2) {

        clearHand();

        resetHolds();

        buildDeck();

        shuffleDeck();

        deal();
    }
});


document.getElementById('dev-reset-btn').addEventListener('click', () => {

    window.location.reload();

});
