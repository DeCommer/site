const year = document.querySelectorAll('.year');
year.forEach(year => {
    yearText = new Date().getFullYear();
    year.textContent = yearText;
})

const randNum = document.querySelectorAll(".randNum");
setInterval(() =>{
    randNum.forEach(randNum => {
    let num = Math.floor(Math.random() * 90 + 10);
    randNum.innerHTML = `${num}`;
});
}, 500)

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

// const totalApps = document.querySelectorAll('.app-link-icon');
// const totalCalculatorApps = document.querySelectorAll('.calculators .app-link-icon');
// const totalToolsApps = document.querySelectorAll('.tools .app-link-icon');
// const totalApiApps = document.querySelectorAll('.api .app-link-icon');
// const totalFunApps = document.querySelectorAll('.fun .app-link-icon');

// const calsAppsText = document.getElementById('cal-apps').innerText = `${totalCalculatorApps.length} / ${totalApps.length}`;
// const toolsAppsText = document.getElementById('tools-apps').innerText = `${totalToolsApps.length} / ${totalApps.length}`;
// const apiAppsText = document.getElementById('api-apps').innerText = `${totalApiApps.length} / ${totalApps.length}`;
// const funAppsText = document.getElementById('fun-apps').innerText = `${totalFunApps.length} / ${totalApps.length}`;
