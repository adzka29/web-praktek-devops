const loveBtn = document.getElementById("loveBtn");
const loveText = document.getElementById("loveText");

function showLove() {
    loveText.textContent = "I Love You 💖";
    loveText.style.opacity = 1;

    setTimeout(() => {
        loveText.style.opacity = 0;
    }, 2000);
}

// Klik atau touch
loveBtn.addEventListener("click", showLove);
loveBtn.addEventListener("touchstart", showLove);
