
function setClock() {
  const hourHand = document.getElementById('hour-hand');
  const minuteHand = document.getElementById('minute-hand');
  const secondHand = document.getElementById('second-hand');
  const timeDisplay = document.getElementById('time');

  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourAngle = (hours * 30) + (minutes / 60) * 30;
  const minuteAngle = (minutes * 6) + (seconds / 60) * 6;
  const secondAngle = seconds * 6;

  hourHand.style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`;
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteAngle}deg)`;
  secondHand.style.transform = `translate(-50%, -100%) rotate(${secondAngle}deg)`;

  const formattedHours = String(now.getHours()).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  timeDisplay.innerHTML = `Time is ${formattedTime}`;
}

setInterval(setClock, 1000);
setClock();
