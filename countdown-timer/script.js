const valentineDay = "14 feb 2022";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function countdown() {
  const valentinedayDate = new Date(valentineDay);
  const currentDate = new Date();

  const totalSecond = (valentinedayDate - currentDate) / 1000;
  const days = Math.floor(totalSecond / 3600 / 24);
  const hours = Math.floor(totalSecond / 3600) % 24;
  const mins = Math.floor(totalSecond / 60) % 60;
  const seconds = Math.floor(totalSecond) % 60;

  console.log(days, hours, mins, seconds);
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondsEl.innerHTML = seconds;

  // console.log(valentinedayDate-currentDate);
}

//calling the function
countdown();

setInterval(countdown, 1000);
