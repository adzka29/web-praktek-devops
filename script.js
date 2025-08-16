const loveBtn = document.getElementById("loveBtn");
const loveText = document.getElementById("loveText");

// Fungsi menampilkan teks dengan animasi
function showLove() {
    loveText.textContent = "I Love You 💖";
    loveText.style.opacity = 1;

    // Animasi fade out setelah 2 detik (opsional)
    setTimeout(() => {
        loveText.style.opacity = 0;
    }, 2000);
}

// Event listener untuk klik dan touch di HP
loveBtn.addEventListener("click", showLove);
loveBtn.addEventListener("touchstart", showLove);
