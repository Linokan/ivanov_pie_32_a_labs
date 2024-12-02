function checkOdd() {
            const numA = document.getElementById("numA").value;
            const numB = document.getElementById("numB").value;

            // Проверка на ввод чисел
            if (isNaN(numA) || isNaN(numB) || numA.trim() === "" || numB.trim() === "") {
                document.getElementById("output").textContent = "Ошибка: введите корректные числа!";
                return;
            }

            // Преобразование в целые числа
            const A = parseInt(numA, 10);
            const B = parseInt(numB, 10);

            // Проверка на нечетность
            if (A % 2 !== 0 && B % 2 !== 0) {
                document.getElementById("output").textContent = "True";
            } else {
                document.getElementById("output").textContent = "False";
            }
        }