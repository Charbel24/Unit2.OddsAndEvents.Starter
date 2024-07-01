// TODO: this file! :)

// Button Variables //
document.addEventListener('DOMContentLoaded', function () {
    const numberBank = [];
    const numberInput = document.querySelector('input[name="number"]');
    const addNumberBtn = document.getElementById('addNumber');
    const numberBankOutput = document.querySelector('#numberBank output');
    const oddsOutput = document.querySelector('#odds output');
    const evensOutput = document.querySelector('#evens output');


// Add Number Button //
    addNumberBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission
        const input = numberInput.value;
        const number = parseInt(input);
        if (!isNaN(number)) {
            numberBank.push(number);
            updateNumberBank();
            numberInput.value = ''; // Clear input field after adding
        }
    });

    function updateNumberBank() {
        numberBankOutput.textContent = numberBank.join(', ');
    }

// Sort One Button // 
    function updateSortedNumbers() {
        const odds = [];
        const evens = [];
        numberBank.forEach(number => {
            if (number % 2 === 0) {
                evens.push(number);
            } else {
                odds.push(number);
            }
        });
        oddsOutput.textContent = odds.join(', ');
        evensOutput.textContent = evens.join(', ');
    }

    document.getElementById('sortOne').addEventListener('click', function () {
        if (numberBank.length > 0) {
            const number = numberBank.shift();
            if (number % 2 === 0) {
                evensOutput.textContent += `, ${number}`;
            } else {
                oddsOutput.textContent += `, ${number}`;
            }
            updateNumberBank();
        } else {
            alert("Number bank is empty!");
        }
    });


// Sort All Button //

    document.getElementById('sortAll').addEventListener('click', function () {
        updateSortedNumbers();
        numberBank.length = 0; // Clear number bank
        updateNumberBank();
    });
});