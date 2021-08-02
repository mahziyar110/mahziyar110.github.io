window.addEventListener("click", function (event) {
    const item = event.target;
    // console.log(item);
    if (item.getAttribute("value")) {
        addInput(item.getAttribute("value"), item);
    }
})


let num1 = "";
let num2 = "";
let op = "";
let ans = "";
let flag1 = flag2 = 0; // check decimal places in num1 and num2
let clickCount = 1; // for erase() function



function addInput(val, item) {
    if (val >= 0 && val <= 9 && ans === "") {
        numerical(val);
        display();
    }
    else if (item.classList.contains("op")) {
        operation(val, item);
        display();
    }
    else if (val === "=" && ans === "") {
        calculate();
    }
    else if (val === ".") {
        decimal();
        display();
    }
    else if (val === "clear") {
        clear();
        display();
    }
    else if (val === "erase") {
        erase();
        display();
    }
}

function numerical(val) {
    if (op === "") {
        if (num1 == '0') {
            num1 = val;
        }
        else {
            num1 += val;
        }
    }
    else {
        if (num2 == '0') {
            num2 = val;
        }
        else {
            num2 += val;
        }
    }
}

function operation(val, item) {
    if (num1 !== "" && num1 !== "+" && num1 !== "-" && ans === "" && op === "") {
        if (num1.toString().charAt(num1.length - 1) === ".") {
            num1 += 0;
            op = val;
        }
        else {
            op = val;
        }
        clickCount = 1;
    }
    else if (op !== "" && num2 !== "" && num2 !== "+" && num2 !== "-") {
        calculate();
        addInput(val, item);
    }
    else if (val === "+" || val === "-") {
        if (num1 === "") {
            num1 = val;
        }
        else if (num2 === "" && op !== "") {
            num2 = val;
        }
    }
}

function calculate() {
    if (num1 !== "" && num2 !== "" && op !== "") {
        if (num2.toString().charAt(num2.length - 1) === ".") {
            num2 += 0;
        }

        if(num2.length === 1 && (num2[0] === "+" || num2[0] === "-")) {
            return;
        }

        switch (op) {
            case "+": ans = +num1 + +num2;
                break;
            case "-": ans = +num1 - +num2;
                break;
            case "*": ans = +num1 * +num2;
                break;
            case "/": ans = +num1 / +num2;
                break;
        }
        ans = parseFloat(ans.toFixed(8));
        // ans = Math.round((ans + Number.EPSILON) * 100) / 100;
        display();
        num1 = ans;
        op = "";
        num2 = "";
        ans = "";
        clickCount = 0;
        flag2 = 0;
        num1.toString().includes(".") ? flag1 = 1 : flag1 = 0;
    }
}

function decimal() {
    if (flag1 == 0 && op === "") {
        if (num1 === "" || num1 === "+" || num1 === "-") {
            num1 += (0 + ".");
        }
        else {
            num1 += ".";
        }
        flag1 = 1;
    }
    else if (flag2 == 0 && op !== "") {
        if (num2 === ""  || num2 === "+" || num2 === "-") {
            num2 += (0 + ".");
        }
        else {
            num2 += ".";
        }
        flag2 = 1;
    }
}

function clear() {
    num1 = "";
    num2 = "";
    op = "";
    ans = "";
    flag1 = flag2 = 0;
}

function erase() {
    if (clickCount == 0) {
        clickCount = 1;
    }
    else if (num2 !== "") {
        num2 = num2.toString().slice(0, -1);
        if (!num2.includes(".")) {
            flag2 = 0;
        }
    }
    else if (op !== "") {
        op = "";
    }
    else if (num1 !== "") {
        num1 = num1.toString().slice(0, -1);
        if (!num1.includes(".")) {
            flag1 = 0;
        }
    }
}

function display() {
    const disp = document.querySelector(".display");
    let exp = num1 + " " + op + " " + num2 + " <br> " + ans;
    if (num2[0] === "-" || num2[0] === "+") {
        exp = num1 + " " + op + " (" + num2 + ") <br> " + ans;
    }
    if (num1 === "" && num2 === "" && op === "" && ans === "") {
        exp = 0;
    }
    disp.innerHTML = exp;
    console.log(exp);
}