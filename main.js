 const daysEl = document.getElementById('days')
 const hoursEl = document.getElementById('hours')
 const minsEl = document.getElementById('mins')
 const seconsdEl = document.getElementById('seconds')

const newYears = "1 jan 2023";
// const set  = (x,y) => Math.floor(totalSeconds / x / y);
function countDown(){ 
const newYearsDate = new Date(newYears);
const currentDate = new Date();

const totalSeconds = (newYearsDate - currentDate) / 1000;

const days  = Math.floor(totalSeconds / 3600 / 24);
const  hours = Math.floor(totalSeconds / 3600)%24;
const mins = Math.floor(totalSeconds / 60)  % 60;
const seconds = Math.floor( totalSeconds)%60;

console.log(days + " days" , hours + " hours" , mins + " minutes" , seconds + " seconds");

daysEl.innerHTML = days;
hoursEl.innerHTML = hours;
minsEl.innerHTML = mins;
seconsdEl.innerHTML = seconds;
}

countDown()
setInterval(countDown , 1000);



