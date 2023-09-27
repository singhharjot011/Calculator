let operand1 = document.querySelector(".first-operand");
let op = document.querySelector(".operator");
let operand2 = document.querySelector(".second-operand");

//Adding Buttons using JS instead of typing HTML for each button in numbers div

let numsDiv = document.querySelector(".numbers");
for (let i = 9; i >= 0; i--) {
  let nums = document.createElement("button");
  nums.className = "btn";
  nums.id = "btn" + i;
  nums.onclick = function () {
    input(i);
  };

  let numsSpan = document.createElement("span");
  numsSpan.className = "btn-content";
  numsSpan.textContent = i;

  nums.appendChild(numsSpan);
  numsDiv.appendChild(nums);
}

// Adding . dot button after numbers separately
let dot = document.createElement("button");
dot.className = "btn";
dot.id = "dot";
dot.onclick = function () {
  input(".");
};

let dotSpan = document.createElement("span");
dotSpan.className = "btn-content";
dotSpan.textContent = ".";

dot.appendChild(dotSpan);
numsDiv.appendChild(dot);

//Taking Input from Keyboard
addEventListener("keydown", (event) => {
  if (/[\d.+*/-]/.test(event.key)) {
    input(event.key);
  } else if (
    event.key === "Enter" &&
    operand1.textContent &&
    op.textContent &&
    operand2.textContent
  ) {
    equalTo();
  } else if (event.key === "%") {
    percent();
  }
});

//Taking input
function input(inputChar) {
  //only taking first operand when operator isn't present
  if (!op.textContent && /^[\d.]+$/.test(inputChar)) {
    operand2.textContent = ""; //Clear the result if present
    //If statement below prevents second . in operand1
    if (inputChar === "." && !operand1.textContent.includes(".")) {
      operand1.textContent += inputChar;
    } else if (inputChar !== ".") {
      operand1.textContent += inputChar;
    }
  } else if (/[+*/-]/.test(inputChar)) {
    //if statement below allows to start new calculation on result
    if (!operand2.textContent) {
      op.textContent = inputChar;
      //If statement below prevents re-entering operator if both operands are present
    } else if (operand1.textContent) {
      //Do nothing
    } else {
      operand1.textContent = operand2.textContent;
      op.textContent = inputChar;
      operand2.textContent = "";
    }
  } else if (op.textContent && /^[\d.]+$/.test(inputChar)) {
    //If statement below prevents second . in operand1
    if (inputChar === "." && !operand2.textContent.includes(".")) {
      operand2.textContent += inputChar;
    } else if (inputChar !== ".") {
      operand2.textContent += inputChar;
    }
  }
}

//AC Button Functionality
function clearInput() {
  operand1.textContent = "";
  op.textContent = "";
  operand2.textContent = "";
}

// +/- Button Functionality
function abs() {
  if (!op.textContent && operand1.textContent) {
    let result = parseFloat(operand1.textContent) * -1;
    operand1.textContent = result;
  } else if (operand2.textContent) {
    let result = parseFloat(operand2.textContent) * -1;
    operand2.textContent = result;
  }
}

// Percent Button Functionality
function percent() {
  if (!op.textContent && operand1.textContent) {
    let result = parseFloat(operand1.textContent) / 100;
    operand1.textContent = result;
  } else if (operand2.textContent) {
    let result = parseFloat(operand2.textContent) / 100;
    operand2.textContent = result;
  }
}

//Equal To Button Functionality
function equalTo() {
  if (operand1.textContent && op.textContent && operand2.textContent) {
    let result = eval(
      // Added space before and after operator to avoid -1--1 like situations
      operand1.textContent + " " + op.textContent + " " + operand2.textContent
    );

    clearInput();
    operand2.textContent = result;
  }
}
