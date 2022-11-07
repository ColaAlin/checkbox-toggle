let fast = document.querySelector("#fast");
let cheap = document.querySelector("#cheap");
let good = document.querySelector("#good");

fast.addEventListener("change", control);
cheap.addEventListener("change", control);
good.addEventListener("change", control);

let checkBox = 0;
let lastClicked

function control(event) {
    if (event.target.checked) {
        checkBox++
    } else {
        checkBox--
    } if (checkBox === 3) {
        checkBox--
        lastClicked.checked = false;
    }
    lastClicked = event.target;
}