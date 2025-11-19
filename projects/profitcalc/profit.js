const targetContainer = document.getElementById("target-container");
const target =document.getElementById("target-in");
const stop = document.getElementById("stop-in");
const entry = document.getElementById("entry-in");
const numOfShares = document.getElementById("shares-in");
const advBtn = document.getElementById("adv-btn");
const enterBtn = document.getElementById("enter-btn");
const clearBtn = document.getElementById("clear-btn");
const profitTxt = document.getElementById("profit-txt");
const messageTxt = document.getElementById("message");
const resultTxt = document.getElementById("result-txt");
const costOfTradeTxt = document.getElementById("cost-txt");
const disclaimerTxt = document.getElementById("disclaimer");

state = 0;

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

advBtn.addEventListener('click', ()=> {
    if(state == 0) {
        state = 1;
        targetContainer.classList.remove('hide');
        advBtn.classList.add('micro-active');
        profitTxt.classList.remove('hide');
    }else if(state == 1) {
        state = 0;
        targetContainer.classList.add('hide');
        advBtn.classList.remove('micro-active');
        profitTxt.classList.add('hide');
    }
});

enterBtn.addEventListener('click', () => {

    if(state == 1) {
        const profit = parseFloat((target.value - entry.value) * numOfShares.value).toFixed(2);
        const result = parseFloat((stop.value - entry.value) * numOfShares.value).toFixed(2);
        const costOfTrade = parseInt(entry.value * numOfShares.value).toFixed(2);
        // messageTxt.innerHTML = `If your stop loss is hit`;
        profitTxt.innerHTML = `Profit <span class="span-txt profit-txt">$${formatNumber(profit)}</span>`;
        costOfTradeTxt.innerHTML = `Cost of Trade: <span class="span-txt">$${formatNumber(costOfTrade)}</span>`;
        resultTxt.innerHTML = `Risk: <span class="span-txt risk-txt">$${formatNumber(result)}<sup>*</sup></span>`;
        disclaimerTxt.innerHTML = `<sup>*</sup>Do not risk more than you can afford`;

    }else if(state == 0) {
        const result = parseFloat((stop.value - entry.value) * numOfShares.value).toFixed(2);
        const costOfTrade = parseInt(entry.value * numOfShares.value).toFixed(2);
        // messageTxt.innerHTML = `If your stop loss is hit`;
        costOfTradeTxt.innerHTML = `Cost of trade: <span class="span-txt">$${formatNumber(costOfTrade)}</span>`;
        resultTxt.innerHTML = `Risk: <span class="span-txt">$${formatNumber(result)}<sup>*</sup></span>`;
        disclaimerTxt.innerHTML = `<sup>*</sup>Do not risk more than you can afford`;
    }

});

clearBtn.addEventListener('click', () => {
    target.value = '';
    stop.value = '';
    entry.value = '';
    numOfShares.value = '';
    profitTxt.innerHTML = ``;
    messageTxt.innerHTML = ``;
    costOfTradeTxt.innerHTML = ``;
    resultTxt.innerHTML = ``;
    disclaimerTxt.innerHTML = ``;
});
