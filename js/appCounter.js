const totalApps = document.querySelectorAll('.app-link-icon');
const totalCalculatorApps = document.querySelectorAll('.calculators .app-link-icon');
const totalToolsApps = document.querySelectorAll('.tools .app-link-icon');
const totalFunApps = document.querySelectorAll('.fun .app-link-icon');

const calsAppsText = document.getElementById('cal-apps').innerText = `${totalCalculatorApps.length} / ${totalApps.length}`;
const toolsAppsText = document.getElementById('tools-apps').innerText = `${totalToolsApps.length} / ${totalApps.length}`;
const funAppsText = document.getElementById('fun-apps').innerText = `${totalFunApps.length} / ${totalApps.length}`;
