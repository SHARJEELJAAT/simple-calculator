
function calculate(operator) {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result;

    if (
        document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === ""
    ) {
        document.getElementById("result").innerText =
            "Please enter both numbers";
        return;
    }

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            document.getElementById("result").innerText =
                "Cannot divide by zero";
            return;
        }
        result = num1 / num2;
    }

    document.getElementById("result").innerText =
        "Result: " + result;
}
