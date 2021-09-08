
const cashOnHand = document.getElementById("cashOnHand");
const calculateBtn = document.getElementById("calculateBtn");
const content = document.getElementById("content");
const cashTips = document.getElementById("cashTips");
const today = new Date().toLocaleDateString();
const dayOfWeek = new Date().getDay();
const heading = document.getElementById("heading");
const formTop = document.getElementById("formTop");
const servers = document.getElementById("servers");
const money = document.getElementById("money");
const serverForm = document.getElementById("serverForm");

heading.innerHTML = today;


function calculate() {
    const serverOneName = document.getElementById("server1Name");
    const serverOneHours = document.getElementById("server1Hours");
    const serverTwoName = document.getElementById("server2Name");
    const serverTwoHours = document.getElementById("server2Hours");
    const serverThreeName = document.getElementById("server3Name");
    const serverThreeHours = document.getElementById("server3Hours");
    const serverFourName = document.getElementById("server4Name");
    const serverFourHours = document.getElementById("server4Hours");
    const serverFiveName = document.getElementById("server5Name");
    const serverFiveHours = document.getElementById("server5Hours");
    const serverOne = document.getElementById("serverOne");
    const serverTwo = document.getElementById("serverTwo");
    const serverThree = document.getElementById("serverThree");
    const serverFour = document.getElementById("serverFour");
    const serverFive = document.getElementById("serverFive");
    const totalHours = Number(serverOneHours.value) + Number(serverTwoHours.value) + Number(serverThreeHours.value) + Number(serverFourHours.value) + Number(serverFiveHours.value);
    const shiftTips = getShiftTips();
    const totalTips = getTotalTips(shiftTips);
    const tipsPerHour = getTipsPerHour(totalTips);
    const barbackTips = getBarbackTips(tipsPerHour);
    const barTips = getBarTips(totalTips, barbackTips);
    const ourTipsPerHour = Math.round(barTips / totalHours);
    const drop = getDrop(shiftTips);
    const remainder = getRemainder(shiftTips);
    const cashToDivide = getCashToDivide();
    const serverOneTips = Math.round(serverOneHours.value * ourTipsPerHour);
    const serverTwoTips = Math.round(serverTwoHours.value * ourTipsPerHour);
    const serverThreeTips = Math.round(serverThreeHours.value * ourTipsPerHour);
    const serverFourTips = Math.round(serverFourHours.value * ourTipsPerHour);
    const serverFiveTips = Math.round(serverFiveHours.value * ourTipsPerHour);
    formTop.classList.add("hide");
    servers.innerHTML = "<h2>--------Tip Outs--------</h2>"
    serverOne.innerHTML = `<h3>Barback: $${barbackTips}</h3>
    <h3>${serverOneName.value}: $${serverOneTips}</h3>`
    serverTwo.innerHTML = `<h3>${serverTwoName.value}: $${serverTwoTips}</h3>`
    serverThree.innerHTML = `<h3>${serverThreeName.value}: $${serverThreeTips}</h3>`
    if (serverFourName.value === "") {
        serverFour.classList.add("hide");
    } else {
        serverFour.innerHTML = `<h3>${serverFourName.value}: $${serverFourTips}</h3>`
    }
    if (serverFiveName.value === "") {
        serverFive.classList.add("hide");
    } else {
        serverFive.innerHTML = `<h3>${serverFiveName.value}: $${serverFiveTips}</h3>`
    }
    if (drop < 0) {
        money.innerHTML = `<h3>Drop: ${drop}</h3>
        <h3>Remainder After Cash: $${remainder}</h3>
        <h3>Cash To Divide: $${cashToDivide}`;
    } else {
        money.innerHTML = `<h3>Drop: ${drop}</h3>`
    }

    calculateBtn.classList.add("hide");
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
    return Math.round((barbackHours.value * tipsPerHour) * 0.18)
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