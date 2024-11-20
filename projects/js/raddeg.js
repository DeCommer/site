const dispType = document.getElementById('dispType');
const input = document.getElementById('input');
const radBtn = document.getElementById('radBtn');
const degBtn = document.getElementById('degBtn');
const enterBtn = document.getElementById('enterBtn');
const clearBtn = document.getElementById('clear-btn');
const message = document.getElementById('message');
const result = document.getElementById('result');
const formula = document.getElementById('formula')
const resultTempTxt = document.getElementById('result-temp-txt');

let state = 'degrees';

function degToRad() {
    if(input.value === '') {
        resultTempTxt.textContent = `0`;

    }else {
        let deg = input.value
        toRad = ((deg * Math.PI) / 180).toFixed(3);
        message.textContent = `${input.value} degrees equals`
        resultTempTxt.innerHTML = `<p id="result-temp-txt" class="result-temp">${toRad}<span>rad</span></p>`;
        formula.textContent = `Formula: degrees x π/180 = radians`;
    }
}

function radToDeg() {
    if(input.value === '') {
        resultTempTxt.textContent = `0`;
    }else {
        let rad = input.value
        toDeg = ((rad * 180) / Math.PI).toFixed(3);
        message.textContent = `${input.value} radians equals`
        resultTempTxt.innerHTML = `<p id="result-temp-txt" class="result-temp">${toDeg}<span>deg</span></p>`;
        formula.textContent = `Formula: radians x 180/π = Degrees°`;
    }
}

function clear() {
    state = 'degrees';
    degBtn.classList.add('active');
    radBtn.classList.remove('active');
    input.value = '';
    message.textContent = ``;
    dispType.textContent = 'Deg - Rad';
    resultTempTxt.textContent = `0`;
    formula.textContent = "Enter a value to convert";
}

degBtn.addEventListener('click', () => {
    degBtn.classList.add('active');
    radBtn.classList.remove('active');
    dispType.textContent = 'Deg - Rad'
    state = 'degrees';
    if(input.value === '') {
        resultTempTxt.textContent = `0`;
    }else {
        degToRad();
    }
});

radBtn.addEventListener('click', () => {
    state = 'radians';
    dispType.textContent = 'Rad - Deg'
    radBtn.classList.add('active');
    degBtn.classList.remove('active');
    if(input.value === '') {
        resultTempTxt.textContent = `0`;
    }else {
        radToDeg();
    }
});

enterBtn.addEventListener('click', () => {
    if(input.value === '') {
        formula.textContent = "Please enter numeric a value";
        setTimeout(() => {
            formula.textContent = "Enter a value to convert";
        }, 1500);
    }else if(state === 'degrees') {
        degToRad();
    }else if (state === 'radians') {
        radToDeg();
    }
});

clearBtn.addEventListener('click', () => {
    clear();
});