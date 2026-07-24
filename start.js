const bgm = document.getElementById("bgm");
const startBtn = document.getElementById("startBtn");
const soundCheck = document.getElementById("soundCheck");
const start = document.querySelector("#start-page")
const intro = document.querySelector("#intro")

// 페이지 열리면 음악 재생
bgm.play();

soundCheck.addEventListener("click", function() {
    bgm.play();
});

startBtn.addEventListener("click", function () {
    start.style.display="none";
    intro.style.display="block";

    // intro 애니메이션 시작 신호
    document.dispatchEvent(new Event("introStart"));
});

