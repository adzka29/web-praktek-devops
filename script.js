const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeText = document.getElementById("welcomeText");
const sections = document.querySelectorAll(".section");

// Fungsi menampilkan teks tombol
function showWelcome() {
    welcomeText.textContent = "Selamat Datang di SMKN 1 Animasi! 🎉";
    welcomeText.style.opacity = 1;

    setTimeout(() => {
        welcomeText.style.opacity = 0;
    }, 3000);
}

welcomeBtn.addEventListener("click", showWelcome);
welcomeBtn.addEventListener("touchstart", showWelcome);

// Fungsi fade-in saat scroll
function checkSections() {
    const triggerBottom = window.innerHeight / 5 * 4;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", checkSections);
window.addEventListener("load", checkSections);
