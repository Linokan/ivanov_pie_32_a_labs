function generateInputs() {
    const numN = parseInt(document.getElementById('numN').value);
    const inputContainer = document.getElementById('inputs');
    inputContainer.innerHTML = '';

    if (numN <= 0) {
        document.getElementById('result').innerHTML = 'Введите положительное число!';
        return;
    }

    for (let i = 0; i < numN; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `Число ${i + 1}`;
        input.className = 'number-input';
        inputContainer.appendChild(input);
        inputContainer.appendChild(document.createElement('br'));
    }

    document.getElementById('result').innerHTML = '';
}

function findOddNumbers() {
    const inputs = document.getElementsByClassName('number-input');
    const oddIndexes = [];
    let oddCount = 0;

    for (let i = 0; i < inputs.length; i++) {
        const value = parseInt(inputs[i].value);
        if (value % 2 !== 0) {
            oddIndexes.push(i + 1);
            oddCount++;
        }
    }

    document.getElementById('result').innerHTML = 
        `Номера нечетных чисел: ${oddIndexes.join(', ')}<br>
        Количество нечетных чисел: ${oddCount}`;
}

function multiplicationNumbers() {
    const numA = parseInt(document.getElementById('numA').value);
    const numB = parseInt(document.getElementById('numB').value);
    let product = 1;
    
    if (numA >= numB) {
        document.getElementById('result2').innerHTML = 'Число A должно быть меньше числа B!';
        return;
    }   
    
    for (let i = numA; i <= numB; i++) {
        product *= i;
    }
    
    document.getElementById('result2').innerHTML = `Произведение чисел от ${numA} до ${numB} равно: ${product}`;
}