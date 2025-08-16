const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeText = document.getElementById("welcomeText");

function showWelcome() {
    welcomeText.textContent = "Selamat Datang di SMKN 1 Contoh! 🎉";
    welcomeText.style.opacity = 1;

    setTimeout(() => {
        welcomeText.style.opacity = 0;
    }, 3000);
}

welcomeBtn.addEventListener("click", showWelcome);
welcomeBtn.addEventListener("touchstart", showWelcome);
