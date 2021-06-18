const totalHours = document.getElementById("totalHours");
const cashOnHand = document.getElementById("cashOnHand");
const calculateBtn = document.getElementById("calculateBtn");
const content = document.getElementById("content");
const cashTips = document.getElementById("cashTips");


function calculate() {
    const shiftTips = getShiftTips();
    const totalTips = getTotalTips(shiftTips);
    const tipsPerHour = getTipsPerHour(totalTips);
    const barbackTips = getBarbackTips(tipsPerHour);
    const barTips = getBarTips(totalTips, barbackTips);
    const ourTipsPerHour = Math.round(barTips / totalHours.value);
    const drop = getDrop(shiftTips);
    const remainder = getRemainder(shiftTips);
    const cashToDivide = getCashToDivide();
    const serverOneName = document.getElementById("server1Name");
    const serverOneHours = document.getElementById("server1Hours");
    const serverTwoName = document.getElementById("server2Name");
    const serverTwoHours = document.getElementById("server2Hours");
    const serverThreeName = document.getElementById("server3Name");
    const serverThreeHours = document.getElementById("server3Hours");
    const serverFourName = document.getElementById("server4Name");
    const serverFourHours = document.getElementById("server4Hours");
    const serverOneTips = Math.round(serverOneHours.value * ourTipsPerHour);
    const serverTwoTips = Math.round(serverTwoHours.value * ourTipsPerHour);
    const serverThreeTips = Math.round(serverThreeHours.value * ourTipsPerHour);
    const serverFourTips = Math.round(serverFourHours.value * ourTipsPerHour);
    content.style.display = "block";
    content.innerHTML = `<div><h1>Barback Tips: $${barbackTips}</h1></div>
    <div><h1>${serverOneName.value}: $${serverOneTips}</h1></div>
    <div><h1>${serverTwoName.value}: $${serverTwoTips}</h1></div>
    <div><h1>${serverThreeName.value}: $${serverThreeTips}</h1></div>
    <div><h1>${serverFourName.value}: $${serverFourTips}</h1></div>
    <div><h1>Drop: ${drop}</h1></div>
    <div><h1>Remainder After Cash: $${remainder}</h1></div>
    <div><h1>Cash To Divide: $${cashToDivide}</h1></div>`;
}

function getShiftTips() {
    const ccTips = document.getElementById("ccTips");
    const dayCcTips = document.getElementById("dayccTips");
    return ccTips.value - dayCcTips.value;
}

function getTotalTips(shiftTips) {
    return Number(shiftTips) + Number(cashTips.value);
}

function getTipsPerHour(totalTips) {
    const hoursOpen = document.getElementById("hoursOpen");
    return Math.round(totalTips / Number(hoursOpen.value));
}

function getBarbackTips(tipsPerHour) {
    const barbackHours = document.getElementById("barbackHours");
    return Math.round((barbackHours.value * tipsPerHour) * 0.175)
}

function getBarTips(totalTips, barbackTips) {
    return totalTips - barbackTips;
}

function getDrop(shiftTips) {
    return cashOnHand.value - shiftTips;
}

function getRemainder(shiftTips) {
    return shiftTips - cashOnHand.value;
}

function getCashToDivide() {
    return Number(cashOnHand.value) + Number(cashTips.value);
}