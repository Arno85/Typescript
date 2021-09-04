"use strict";
const button = document.querySelector('button');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', () => {
    console.log(add(+num1.value, +num2.value));
    console.log('Add run');
});
//# sourceMappingURL=main.js.map