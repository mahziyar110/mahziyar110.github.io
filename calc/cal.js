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
let flag1 = flag2 = 0;
let clickCount = 1;


function addInput(val, item) {
    if (val >= 0 && val <= 9 && ans === "") {
        if (op === "") {
            if (num1 == '0') {
                num1 = val;
            }
            else {
                num1 += val;
            }
            display();
        }
        else {
            if (num2 == '0') {
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
            if(num1.toString().charAt(num1.length-1) === ".")
            {
                num1 += 0;
                op = val;
            }
            else{
                op = val;
            }
            clickCount = 1;
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
            if(num2.toString().charAt(num2.length-1) === ".")
            {
                num2 += 0;
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
            ans = parseFloat(ans.toFixed(3));
            display();
            num1 = ans;
            op = "";
            num2 = "";
            ans = "";
            clickCount = 0;
            flag2 = 0;
            if (num1.toString().includes(".")) {
                flag1 = 1;
            }
            else {
                flag1 = 0;
            }
        }
    }
    else if (val === ".") {
        if (flag1 == 0 && op === "") {
            if(num1 === ""){
                num1 += (0 + val);
            }
            else{
                num1 += val;
            }
            flag1 = 1;
            display();
        }
        else if (flag2 == 0 && op !== "") {
            if(num2 === ""){
                num2 += (0 + val);
            }
            else{
                num2 += val;
            }
            flag2 = 1;
            display();
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
    flag1 = flag2 = 0;
    display();
}

function erase() {
    if(clickCount == 0)
    {
        display();
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
    display();
}