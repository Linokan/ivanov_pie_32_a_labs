/* Написать функцию f(x,C), вычисляющую и возвращающую число Y, полученное из целого числа x приписыванием к нему слева цифры С. 
Продемонстрировать ее работу для трех чисел. Напишу блок-схему для первого задания.*/

function f(x, C) {
    let xStr = x.toString();
    let Cstr = C.toString();
    let Y = Cstr + xStr;
    return parseInt(Y, 10);
}

function demonstrationF() {
    let x = parseInt(document.getElementById('x').value);
    let C = parseInt(document.getElementById('C').value);
    
    if (isNaN(x) || isNaN(C)) {
        document.getElementById('result').innerHTML = 'Введите корректные числа';
        return;
    }

    let result = f(x, C);
    document.getElementById('result').innerHTML = `f(${x}, ${C}) = ${result}`;
}

function inputMatrix() {
    let matrix = [];
    let line = parseInt(document.getElementById('lines').value);
    let column = parseInt(document.getElementById('columns').value);

    if (line <= 0 || column <= 0) {
        document.getElementById('matrixResult').innerHTML = 'Введите корректные числа';
        return;
    }

    for (let i = 0; i < line; i++) {
        let lines = [];
        for (let j = 0; j < column; j++) {
            let value = parseInt(prompt(`Введите элемент матрицы [${i}][${j}]`));
            if (isNaN(value)) {
                document.getElementById('matrixResult').innerText = 'Все элементы матрицы должны быть целыми числами!';
                return;
            }
            lines.push(value);
        }
        matrix.push(lines);
    }
    return matrix;
}

function processMatrix(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        result.push(matrix[i]);
    }
    return result;
}

function printMatrix(matrix) {
    let column = parseInt(document.getElementById('column').value);
    if (column <= 0 || column > matrix[0].length) {
        document.getElementById('matrixResult').innerText = 'Введите корректный номер столбца';
        return;
    }
    let result = '';
    for (let i = 0; i < matrix.length; i++) {
        let lines = '';
        for (let j = 0; j < matrix[i].length; j++) {
            if (j == (column - 1)) {
                lines += matrix[i][j] + ' ';
            }
        }
        result += lines + '\n';
    }
    document.getElementById('matrixResult').innerText = result;
}

function mainMatrix() {
    let matrix = inputMatrix();
    let processedMatrix = processMatrix(matrix);
    printMatrix(processedMatrix);
}
