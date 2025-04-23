// Zielzeitpunkt (z. B. 31. Dez 2025, 23:59 Uhr)
const countDownDate = new Date("Dec 31, 2025 23:59:59").getTime();

const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "🎉 Los geht’s!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
