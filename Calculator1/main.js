
const display= document.getElementById("display");

function appendValue(input) {
   display.value += input;
}

function resetDisplay() {
display.value="";
}

function removeLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function computeResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (Error) {
        display.value = 'Error';
    }
}
