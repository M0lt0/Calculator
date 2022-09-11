const display = document.querySelector(".display");
const keys = document.querySelector(".numbers");
const restAll = document.querySelector(".rest");
const equals = document.querySelector(".output");
let prev = document.querySelector(".display-prev");
let crnt = document.querySelector(".display-curnt");
let previousOperation = undefined;
//checking for numbers:
keys.addEventListener("click", (e) => {
  if (e.target.matches("button") && !e.target.dataset.action) {
    if (crnt.textContent == "0") {
      crnt.textContent = e.target.textContent;
    } else {
      crnt.textContent += e.target.textContent;
    }
  }
});
//operations
keys.addEventListener("click", (e) => {
  if (
    e.target.matches("button") &&
    e.target.dataset.action &&
    display.textContent !== 0
  ) {
    previousOperation = e.target.dataset.action;
    if (prev.textContent == "0") {
      prev.textContent = crnt.textContent;
      crnt.textContent = "0";
    } else {
      if (e.target.dataset.action == "add") {
        previousOperation = "add";
        prev.textContent =
          parseFloat(crnt.textContent) + parseFloat(prev.textContent);
        crnt.textContent = "0";
      } else if (e.target.dataset.action == "subtract") {
        previousOperation = "subtract";
        prev.textContent =
          parseFloat(crnt.textContent) - parseFloat(prev.textContent);
        crnt.textContent = "0";
      } else if (e.target.dataset.action == "multiply") {
        previousOperation = "multiply";
        prev.textContent =
          parseFloat(crnt.textContent) * parseFloat(prev.textContent);
        crnt.textContent = "0";
      } else if (
        e.target.dataset.action == "division" &&
        crnt.textContent !== "0"
      ) {
        previousOperation = "division";
        prev.textContent =
          parseFloat(crnt.textContent) / parseFloat(prev.textContent);
        crnt.textContent = "0";
      } else if (e.target.dataset.action == "mod") {
        previousOperation = "mod";
        prev.textContent =
          parseFloat(crnt.textContent) % parseFloat(prev.textContent);
        crnt.textContent = "0";
      }
    }
  }
});

//result
equals.addEventListener("click", (e) => {
  if (
    e.target.matches("button") &&
    e.target.dataset.action == "calculate" &&
    prev.textContent !== "0" &&
    crnt.textContent !== "0"
  ) {
    calculate();
  } else {
    alert("no numbers to calculate");
  }
});

function calculate() {
  if (previousOperation !== undefined) {
    if (previousOperation === "add") {
      prev.textContent =
        parseFloat(crnt.textContent) + parseFloat(prev.textContent);
      crnt.textContent = "0";
    } else if (previousOperation === "subtract") {
      prev.textContent =
        parseFloat(crnt.textContent) - parseFloat(prev.textContent);
      crnt.textContent = "0";
    } else if (previousOperation === "multiply") {
      prev.textContent =
        parseFloat(crnt.textContent) * parseFloat(prev.textContent);
      crnt.textContent = "0";
    } else if (previousOperation === "division") {
      prev.textContent =
        parseFloat(crnt.textContent) / parseFloat(prev.textContent);
      crnt.textContent = "0";
    } else if (previousOperation === "mod") {
      prev.textContent =
        parseFloat(crnt.textContent) % parseFloat(prev.textContent);
      crnt.textContent = "0";
    }
  }
}

restAll.addEventListener("click", () => {
  crnt.textContent = "0";
  prev.textContent = "0";
  previousOperation = undefined;
});
document.addEventListener("click", () => {
  console.log(previousOperation);
});
