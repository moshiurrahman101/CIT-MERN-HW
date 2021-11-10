let userInput = document.querySelector('#userInput');
let actionButton = document.querySelector('#actionbtn');
let output = document.querySelector('.output');

actionButton.addEventListener('click', () => {
    output.innerHTML = "";
    let number = userInput.value;
    for (let i = 1; i <= 10; i++) {
        output.innerHTML += `<li>${number} x ${i} = <span>${number * i}</span></li>`;   
    }
});