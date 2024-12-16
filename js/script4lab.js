document.getElementById('numN').addEventListener('change', function() {
    const n = parseInt(this.value);
    const container = document.getElementById('numbersInput');
    container.innerHTML = '';
    
    for(let i = 0; i < n; i++) {
        const label = document.createElement('label');
        label.textContent = `Введите число ${i + 1}: `;
        
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `num${i}`;
        input.required = true;
        
        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(document.createElement('br'));
    }
});

function checkOdd() {
    const n = parseInt(document.getElementById('numN').value);
    let oddNumbers = [];
    
    for(let i = 0; i < n; i++) {
        const num = parseInt(document.getElementById(`num${i}`).value);
        if(num % 2 !== 0) {
            oddNumbers.push(i + 1);
        }
    }
    
    const output = document.getElementById('output');
    if(oddNumbers.length > 0) {
        output.textContent = `Номера нечетных чисел: ${oddNumbers.join(', ')}. Количество нечетных чисел: ${oddNumbers.length}`;
    } else {
        output.textContent = 'Нечетных чисел не найдено';
    }
}