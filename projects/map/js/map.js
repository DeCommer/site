const states = document.querySelectorAll('.state');
const mapTxt = document.getElementById('svg');

fetch("./assets/us_states.json")
.then(response => response.json())
.then(data => displayStates(data));

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getDirectFlagUrl(flagUrl) {
    const match = flagUrl.match(/^(https:\/\/upload\.wikimedia\.org\/wikipedia\/commons)\/thumb\/([^/]+)\/([^/]+)\/([^/]+\.svg)\//i);
    if (!match) return flagUrl;
    return `${match[1]}/${match[2]}/${match[3]}/${match[4]}`;
}

const displayStates = (data) => {
    const closeModal = document.querySelector('.closeModal');
    const dataContainer = document.querySelector('.info-modal');

    states.forEach((state) => {
        state.addEventListener('click', e => {
            if (!e.target.matches('.state')) return;

            const stateId = Number(e.target.id);
            const stateData = data.USStates[stateId];
            const dataDisplay = document.querySelector('.data');
            const directFlagUrl = getDirectFlagUrl(stateData.flag);

            const html = `
            <div class="data-container">
                <h1 class="title">${stateData.name}</h1>
                <div class="state-flag-frame">
                    <img
                        class="state-flag"
                        src="${directFlagUrl}"
                        data-fallback-src="${stateData.flag}"
                        alt="Flag of ${stateData.name}"
                        referrerpolicy="no-referrer">
                    <p class="state-flag-fallback" hidden>Flag image unavailable</p>
                </div>
                <div class="info-container">
                    <ul>
                        <li><span>Capital: </span>${stateData.capital}</li>
                        <li><span>Largest City: </span>${stateData.largest_city}</li>
                        <li><span>State Bird: </span>${stateData.state_bird}</li>
                        <li><span>State Flower: </span>${stateData.state_flower}</li>
                        <li><span>Nickname: </span>${stateData.nickname}</li>
                        <li><span>Became a State: </span>${stateData.Became_a_state}</li>
                        <li><span>Population: </span>${formatNumber(stateData.population)}</li>
                        <li><span>Area (sq mi): </span>${formatNumber(stateData.area_sq_mi)}</li>
                    </ul>
                </div>
                <a class="info-link" href="${stateData.wiki}" target="_blank" rel="noreferrer">Learn more!</a>
            </div>
            `;

            dataDisplay.innerHTML = html;

            const flag = dataDisplay.querySelector('.state-flag');
            const flagFallback = dataDisplay.querySelector('.state-flag-fallback');
            let triedFallback = false;

            flag.addEventListener('error', () => {
                if (!triedFallback && flag.dataset.fallbackSrc && flag.src !== flag.dataset.fallbackSrc) {
                    triedFallback = true;
                    flag.src = flag.dataset.fallbackSrc;
                    return;
                }

                flag.hidden = true;
                flagFallback.hidden = false;
            });

            dataContainer.showModal();
        }, {capture: true});
    });

    closeModal.addEventListener('click', () => {
        dataContainer.close();
    });
};

// mapTxt.addEventListener('click', () => {
//     console.log("Clicked");
// });
