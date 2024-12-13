const stop = document.getElementById("stop-in");
const entry = document.getElementById("entry-in");
const numOfShares = document.getElementById("shares-in");
const enterBtn = document.getElementById("enter-btn");
const clearBtn = document.getElementById("clear-btn");
const messageTxt = document.getElementById("message");
const resultTxt = document.getElementById("result-txt");
const costOfTradeTxt = document.getElementById("cost-txt");
const disclaimerTxt = document.getElementById("disclaimer");

enterBtn.addEventListener('click', () => {
    const result = parseFloat((stop.value - entry.value) * numOfShares.value).toFixed(2);
    const costOfTrade = parseInt(entry.value * numOfShares.value);
    // messageTxt.innerHTML = `If your stop loss is hit`;
    costOfTradeTxt.innerHTML = `Cost of trade: <span class="span-txt">$${costOfTrade}</span>`;
    resultTxt.innerHTML = `Risk: <span class="span-txt">$${result}<sup>*</sup></span>`;
    disclaimerTxt.innerHTML = `<sup>*</sup>Do not risk more than you can afford`;
});

clearBtn.addEventListener('click', () => {
    stop.value = '';
    entry.value = '';
    numOfShares.value = '';
    messageTxt.innerHTML = ``;
    costOfTradeTxt.innerHTML = ``;
    resultTxt.innerHTML = ``;
    disclaimerTxt.innerHTML = ``;
});
