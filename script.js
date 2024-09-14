import { MatchThree } from "./matchThree.js";

let gameInstance;

function startGame() {
  const wrap = document.querySelector(".wrap");
  wrap.innerHTML = "";
  gameInstance = new MatchThree(8, 8, 6);
}

function restartGame() {
  document.querySelector(".score").innerHTML = "0";
  startGame();
}

function initGame() {
  startGame();
}

function onMraidReady() {
  if (mraid.getState() === "loading") {
    mraid.addEventListener("stateChange", (state) => {
      if (state === "default") {
        initGame();
      }
    });
  } else {
    initGame();
  }
}

function setupMraid() {
  if (typeof mraid !== "undefined") {
    mraid.addEventListener("ready", onMraidReady);
    mraid.addEventListener("viewableChange", checkVisibility);
  } else {
    initGame();
  }
}

document.querySelector(".restart").addEventListener("click", restartGame);
setupMraid();
