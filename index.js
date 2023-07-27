// Setting Project Variables

let screenInput = document.querySelector(".screen");

let buttons = document.querySelectorAll(".btn");

let clear = document.querySelector(".clear");

let equal = document.querySelector(".equal");

buttons.forEach((button) => {
  button.onclick = function () {
    checkButton(button);
  };
});

// Create CheckButton function
function checkButton(btn) {
  if (btn.classList.contains("equal") || btn.classList.contains("clear")) {
    if (btn.classList.contains("equal")) {
      if (screenInput.value === "") {
        screenInput.value = "";
      } else {
        screenInput.value = eval(screenInput.value);
      }
    } else {
      screenInput.value = "";
    }
  } else {
    screenInput.value += btn.dataset.num;
  }
}
