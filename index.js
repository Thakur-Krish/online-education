const text = "WELCOME TO I DIGITAL"; // Yeh text type hoga
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typ").innerHTML += text.charAt(index); // Type the text
        index++;
        setTimeout(typeEffect, 150); // Typing speed (150ms)
    } else {
        document.getElementById("typ").style.borderRight = "none"; // Cursor remove after complete
    }
}

typeEffect();

document.getElementById("re1").addEventListener("click", function() {
    // Naya window open karna aur registration form ko load karna
    window.open("regform/reg.html", "_blank");  // "_blank" ensures it opens in a new tab/window
});
