document.querySelectorAll('.calculator .digits button')
    .forEach(button => button.addEventListener('click', digitPressed));
function digitPressed(ev) {
    const btn = ev.target;
    const display = document.querySelector('.display');
    // if (display.value[0] === '0') {
    //     display.value = display.value.slice(1);
    // }
    display.value = display.value + btn.innerText;
}
document.querySelectorAll('.calculator .operators button')
    .forEach(button => button.addEventListener('click', operatorPressed));
function operatorPressed(ev) {
    const btn = ev.target;
    const display = document.querySelector('.display');
    if (display.value.length > 0) {
        // if (['+', '-', '*', '/'].indexOf(display.value[display.value.length - 1]) === -1) {
            if (!['+', '-', '*', '/'].includes(display.value[display.value.length - 1])) {
            display.value += btn.innerText;
        } else {
            display.value = display.value.slice(0, -1) + btn.innerText;
        }
    }
}

document.querySelector('.calculator .eq').addEventListener('click', eqPressed);
function eqPressed() {
    const display = document.querySelector('.display');
    const precision = 10000000000;
    display.value = Math.round(eval(display.value) * precision) / precision;
    if (Math.abs(display.value) === "Infinity") display.value = "Error";
}

document.querySelector('.calculator .clear').addEventListener('click', clearPressed);
function clearPressed() {
    document.querySelector('.display').value = "";
}

document.querySelector('.calculator .erase-one').addEventListener('click', eraseOnePressed);
function eraseOnePressed() {
    const display = document.querySelector('.display');
    display.value = display.value.slice(0,-1);
}

document.querySelector('.calculator .decimal').addEventListener('click', decimalPressed);
function decimalPressed() {
    const display = document.querySelector('.display');
    //if (display.value.indexOf(".") === -1)
    display.value += ".";
}