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
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar"); // Navbar ko select kiya
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled"); // Scroll hone par class add karega
    } else {
        navbar.classList.remove("scrolled"); // Upar jane par class hatayega
    }
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById("scroll-progress").style.width = scrollPercentage + "%";
});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
const menuIcon = document.getElementById("menu-icon");
const navbarMenu = document.querySelector(".navbar ul");

menuIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("show");
});
