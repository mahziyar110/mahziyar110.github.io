window.addEventListener("click", function (event) {
    const item = event.target;
    console.log(item);
    if (item.getAttribute("value")) {
        addInput(item.getAttribute("value"), item);
    }
})


let num1 = "";
let num2 = "";
let op = "";
let ans = "";


function addInput(val, item) {
    if (val >= 0 && val <= 9 && ans === "") {
        if (op === "") {
            if (num1 == 0) {
                num1 = val;
            }
            else {
                num1 += val;
            }
            display();
        }
        else {
            if (num2 == 0) {
                num2 = val;
            }
            else {
                num2 += val;
            }
            display();
        }
    }
    else if (item.classList.contains("op")) {
        if (num1 !== "" && num1 !== "+" && num1 !== "-" && ans === "" && op === "") {
            op = val;
            display();
        }
        else if (val === "+" || val === "-") {
            if (num1 === "") {
                num1 = val;
                display();
            }
            else if (num2 === "" && op !== "") {
                num2 = val;
                display();
            }
        }
    }
    else if (val === "=" && ans === "") {
        if (num1 !== "" && num2 !== "" && op !== "") {
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
            ans = parseFloat(ans.toFixed(3));
            display();
            num1 = ans;
            op = "";
            num2 = "";
            ans = "";
        }
    }
    else if (val === "clear") {
        clear();
    }
    else if (val === "erase") {
        erase();
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

function clear() {
    num1 = "";
    num2 = "";
    op = "";
    ans = "";
    display();
}

function erase() {
    if (num2 !== "") {
        num2 = num2.slice(0, -1);
    }
    else if (op !== "") {
        op = "";
    }
    else if (num1 !== "") {
        num1 = num1.slice(0, -1);
    }
    display();
}