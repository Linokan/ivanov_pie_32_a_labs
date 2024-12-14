function checkOdd() {
            const numA = document.getElementById("numA").value;
            const numB = document.getElementById("numB").value;

            if (isNaN(numA) || isNaN(numB) || numA.trim() === "" || numB.trim() === "") { 
                document.getElementById("output").textContent = "Ошибка: введите корректные числа!";
                return;
            }

            const A = parseInt(numA, 10);
            const B = parseInt(numB, 10);

            if (A % 2 !== 0 && B % 2 !== 0) {
                document.getElementById("output").textContent = "True";
            } else {
                document.getElementById("output").textContent = "False";
            }
        }

function compareNumbers() {
    const numA = document.getElementById("numA2").value;
    const numB = document.getElementById("numB2").value;

    if (isNaN(numA) || isNaN(numB) || numA.trim() === "" || numB.trim() === "") {
        document.getElementById("output2").textContent = "Ошибка: введите корректные числа!";
        return;
    }

    const A = parseFloat(numA);
    const B = parseFloat(numB);

    if (A > B) {
        document.getElementById("output2").textContent = `${A}, ${B}`;
    } else if (A < B) {
        document.getElementById("output2").textContent = `${B}, ${A}`;
    } else {
        document.getElementById("output2").textContent = `Числа равны: ${A} и ${B}`;
    }
}

function calculateY() {
    const a = 2.7;
    const b = -3.59;
    let y;
    const xValue = document.getElementById("xValue").value;

    if (isNaN(xValue) || xValue.trim() === "") {
        document.getElementById("output3").textContent = "Ошибка: введите корректное значение x!";
        return;
    }

    const x = parseFloat(xValue);

    if (x > 2) {
        y = Math.pow(Math.cos(a * Math.pow(x, 2)), 3);
    } else if (x <= -1) {
        y = Math.pow(Math.sin(x), 2) + b / x;
    } else {
        y = 2 - Math.pow(Math.pow(x, 2), 3);
    }

    document.getElementById("output3").textContent = `y = ${y.toFixed(2)}`;
}

function calculateY2() {
    const a = 2.7;
    const b = -3.59;
    let y;

    const xValue = document.getElementById("xValue2").value;
    const x = parseFloat(xValue);

    switch (true) {
        case x === 3:
            y = Math.pow(Math.cos(a * Math.pow(x, 2)), 3);
            break;
        case x === -1:
            y = Math.pow(Math.sin(x), 2) + b / x;
            break;
        case x === 1:
            y = Math.pow(2 - Math.pow(x, 2), 3);
            break;
        default:
            document.getElementById("output4").textContent = "Ошибка: введите другое значение x!";
            return;
    }

    document.getElementById("output4").textContent = `y = ${y.toFixed(2)}`;
}