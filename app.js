const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".n");
const operations = document.querySelectorAll(".o");
const outPut = document.querySelector(".output");
const restAll = document.querySelector(".rest");
const adding = document.querySelector(".add");
const subtracting = document.querySelector(".subtract");
const multiplying = document.querySelector(".multiply");
const envisioning = document.querySelector(".division");
const operationStack = [];
//functionality
const add = function (i, j) {
  return i + j;
};
const subtract = function (i, j) {
  return i - j;
};
const multiply = function (i, j) {
  return i * j;
};
const divide = function (i, j) {
  return i / j;
};

const operate = function (o, n, m) {
  return n(o)(m);
};
const restDisplay = function () {};
//dom operation
numbers.forEach((item) => {
  item.addEventListener("click", () => {
    let newNumber = document.createElement("div");
    newNumber.classList.add("number");
    newNumber.style.letterSpacing = "2px";
    newNumber.style.marginLeft = "4px";
    newNumber.textContent = item.textContent;
    operationStack.push(newNumber.textContent);
    display.append(newNumber);
  });
});

operations.forEach((item) => {
  item.addEventListener("click", () => {
    let operate = document.createElement("div");
    operate.style.letterSpacing = "2px";
    operate.style.marginLeft = "4px";
    operate.textContent = item.textContent;
    operationStack.push(operate.textContent);
    display.append(operate);
  });
});

restAll.addEventListener("click", () => {
  let removable = display.querySelectorAll(".number");
  removable.remove();
});

outPut.addEventListener("click", () => {
  if (operationStack.length == 0) {
    let errorMessage = document.createElement("div");
    errorMessage.textContent = "kos omk ya ahbl";
    display.append(errorMessage);
  } else {
    let added = document.createElement("div");
    added.textContent = add(
      Number(operationStack[0]),
      Number(operationStack[1])
    );
    display.innerHTML = "";
    display.append(added);
  }
});

window.addEventListener("click", () => {
  console.log(operationStack);
});

adding.addEventListener("click", () => {
  if (operationStack.length == 0) {
    let errorMessage = document.createElement("div");
    errorMessage.textContent = "kos omk tany";
    display.append(errorMessage.textContent);
  }
});
