const input = document.getElementById("colorPicker");
const button = document.getElementById("changer");
const box = document.getElementById("box");

function change(){
    box.style.backgroundColor = input.value;
}

button.addEventListener("click", change);