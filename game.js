let coins = 0;
let energy = 50;
const maxEnergy = 50;

const coinsEl = document.getElementById("coins");
const energyEl = document.getElementById("energy");
const tapButton = document.getElementById("tapButton");

tapButton.addEventListener("click", () => {
  if (energy > 0) {
    coins++;
    energy--;
    coinsEl.innerText = "💰 " + coins;
    energyEl.innerText = "⚡ " + energy;
  } else {
    alert("No energy! Wait to refill or buy booster.");
  }
});

// Auto energy refill
setInterval(() => {
  if (energy < maxEnergy) {
    energy++;
    energyEl.innerText = "⚡ " + energy;
  }
}, 5000);