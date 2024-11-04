const year = document.querySelectorAll('.year');
year.forEach(year => {
    yearText = new Date().getFullYear();
    year.textContent = yearText;
})

// const randNum = document.querySelectorAll(".randNum");
// setInterval(() =>{
//     randNum.forEach(randNum => {
//     let num = Math.floor(Math.random() * 90 + 10);
//     randNum.innerHTML = `${num}`;
// });
// }, 500)

let url = window.location.href;
console.log(url)

if(url.includes("10.0.0") || url.includes("127.0.0.1")) {
    document.querySelector(".title").innerHTML = `Joseph DeCommer (Local)`;
    console.log("local");
}else {
    console.log('online');
}

var toggle = document.getElementById("theme-toggle");
const icon = document.querySelector(".theme-icon");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)

toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    icon.innerHTML = `🌑` ;
    if (currentTheme === "light") {
        targetTheme = "dark";
        icon.innerHTML = `🌕` ;
    }
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};

function displayTime() {
    const updateTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const time = `${hours}.${minutes}`;
        const secs = `${seconds}`;
        document.getElementById('time').innerHTML = time;
        document.getElementById('seconds').innerHTML = secs;
    };

    updateTime(); // Display the time immediately on load
    setInterval(updateTime, 1000); // Update time every second
}

function displayMobileTime() {
    const updateTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const time = `${hours}.${minutes}`;
        const secs = `${seconds}`;
        document.getElementById('mobile-time').innerHTML = time;
        document.getElementById('mobile-seconds').innerHTML = secs;
    };

    updateTime(); // Display the time immediately on load
    setInterval(updateTime, 1000); // Update time every second
}

displayTime();
displayMobileTime();


// const totalApps = document.querySelectorAll('.app-link-icon');
// const totalCalculatorApps = document.querySelectorAll('.calculators .app-link-icon');
// const totalToolsApps = document.querySelectorAll('.tools .app-link-icon');
// const totalApiApps = document.querySelectorAll('.api .app-link-icon');
// const totalFunApps = document.querySelectorAll('.fun .app-link-icon');

// const calsAppsText = document.getElementById('cal-apps').innerText = `${totalCalculatorApps.length} / ${totalApps.length}`;
// const toolsAppsText = document.getElementById('tools-apps').innerText = `${totalToolsApps.length} / ${totalApps.length}`;
// const apiAppsText = document.getElementById('api-apps').innerText = `${totalApiApps.length} / ${totalApps.length}`;
// const funAppsText = document.getElementById('fun-apps').innerText = `${totalFunApps.length} / ${totalApps.length}`;
