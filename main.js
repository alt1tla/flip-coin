let heads = 0;
let tails = 0;
let speed = 3;
let currentSide = "head";
let coinHead = document.querySelector(".coin-head");
let coinTail = document.querySelector(".coin-tail");
let flipBtn = document.querySelector("#btn-flip");
let resetBtn = document.querySelector("#btn-reset");

function updateStats() {
  document.querySelector("#heads-count").textContent = `Earth: ${heads}`;
  document.querySelector("#tails-count").textContent = `Moon: ${tails}`;
}

function disableButton() {
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
  }, speed * 1000);
}

flipBtn.addEventListener("click", () => {
  let i = Math.random();
  coinTail.style.animation = "none";
  coinHead.style.animation = "none";
  if (currentSide === "head") {
    coinHead.classList.remove("hide");
    coinTail.classList.add("hide");
    if (i < 0.5) {
      setTimeout(function () {
        coinHead.style.animation = `flip-head-to-head ${speed}s forwards`;
      }, 100);
      heads++;
      currentSide = "head";
    } else {
      setTimeout(function () {
        coinHead.style.animation = `flip-head-to-tail ${speed}s forwards`;
      }, 100);
      tails++;
      currentSide = "tail";
    }
    setTimeout(updateStats, speed * 1000);
    disableButton();
  } else {
    coinTail.classList.remove("hide");
    coinHead.classList.add("hide");
    if (i < 0.5) {
      setTimeout(function () {
        coinTail.style.animation = `flip-tail-to-head ${speed}s forwards`;
      }, 100);
      heads++;
      currentSide = "head";
    } else {
      setTimeout(function () {
        coinTail.style.animation = `flip-tail-to-tail ${speed}s forwards`;
      }, 100);
      tails++;
      currentSide = "tail";
    }
    setTimeout(updateStats, speed * 1000);
    disableButton();
  }
});
resetBtn.addEventListener("click", () => {
  coinHead.style.animation = "none";
  coinTail.style.animation = "none";
  coinHead.classList.remove("hide");
  coinTail.classList.add("hide");
  heads = 0;
  tails = 0;
  currentSide = "head";
  updateStats();
});
