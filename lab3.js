let cartQuantity = 0;

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

let quantity = document.getElementById("quantity");

btn1.addEventListener("click", func1);
btn2.addEventListener("click", func2);
btn3.addEventListener("click", func3);
btn4.addEventListener("click", func4);
btn5.addEventListener("click", func5);

function func1() {
    quantity.textContent = cartQuantity;
}

function func2() {
    cartQuantity++;
    quantity.textContent = cartQuantity;
}

function func3() {
    cartQuantity += 2;
    quantity.textContent = cartQuantity;
}

function func4() {
    cartQuantity += 3;
    quantity.textContent = cartQuantity;
}

function func5() {
    cartQuantity = 0;
    quantity.textContent = cartQuantity;
}