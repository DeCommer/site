const dispType = document.getElementById('dispType');
const input = document.getElementById('input');
const miBtn = document.getElementById('mi-btn');
const kmBtn = document.getElementById('km-btn');
const enterBtn = document.getElementById('enterBtn');
const clearBtn = document.getElementById('clear-btn');
const message = document.getElementById('message');
const result = document.getElementById('result');
const formula = document.getElementById('formula')
const resultTempTxt = document.getElementById('result-temp-txt');

let state = 'miles';

function miToKm() {
    let mi = input.value
    toKm = mi * 1.609;
    message.textContent = `${input.value} miles equals`
    resultTempTxt.innerHTML = `${toKm.toFixed(2)}<span>km</span>`;
    formula.textContent = `Formula: miles x 1.609 = kilometers`;
}

function kmToMi() {
    let km = input.value
    toMi = km / 1.609;
    message.textContent = `${input.value} kilometers equals`
    resultTempTxt.innerHTML = `${toMi.toFixed(2)}<span>mi</span>`;
    formula.textContent = `Formula: kilometers / 1.609 = miles`;
}

miBtn.addEventListener('click', () => {
    state = 'miles';
    dispType.textContent = 'mi - km'
    miBtn.classList.add('active');
    kmBtn.classList.remove('active');
    if(input.value === '') {
        resultTempTxt.textContent = `0`;
    }else {
        miToKm();
    }
});

kmBtn.addEventListener('click', () => {
    dispType.textContent = 'km - mi'
    state = 'kilometers';
    kmBtn.classList.add('active');
    miBtn.classList.remove('active');
    if(input.value === '') {
        resultTempTxt.textContent = `0`;
    }else {
        kmToMi();
    }
})

enterBtn.addEventListener('click', () => {
    if(input.value === '') {
        formula.textContent = "Please enter a numeric value";
        setTimeout(() => {
            formula.textContent = "";
        }, 1500);
    }else if(state === 'miles') {
        miToKm() 
    }else if (state === 'kilometers') {
        kmToMi()
    }
});

clearBtn.addEventListener('click', () => {
    state = 'miles';
    input.value = '';
    dispType.textContent = 'mi - km';
    message.textContent = ``;
    resultTempTxt.textContent = `0`;
    formula.textContent = ``;
});
