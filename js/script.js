function calculate() {
    const numA = Math.abs(Number(document.getElementById("numA").value));
    const numB = Math.abs(Number(document.getElementById("numB").value));

    if (numB === 0) {
        alert("Число B не должно быть равно 0!");
        return;
    }

    document.getElementById("sum").textContent = numA + numB;
    document.getElementById("difference").textContent = numA - numB;
    document.getElementById("product").textContent = numA * numB;
    document.getElementById("quotient").textContent = (numA / numB).toFixed(2);
}
