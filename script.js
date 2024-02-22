function numKeyPress(e) {
    display.textContent = display.textContent + e.target.textContent;
}

const numButton = document.querySelectorAll('.number')
const display = document.querySelector(".display");
numButton.forEach((button) => {
    button.addEventListener('click', (e) => numKeyPress(e));
});