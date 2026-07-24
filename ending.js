const scenes = document.querySelectorAll(".scene");

let current = 0;

// 첫 장면 시작
scenes[current].classList.add("show");

// 현재 애니메이션이 끝나면
scenes.forEach((scene, index) => {

    scene.addEventListener("animationend", () => {

        // 마지막 장면이면 종료
        if(index === scenes.length - 1) return;
        
        setTimeout(() => {
            scene.classList.remove("show");   // 현재 장면 숨기기
            scenes[index + 1].classList.add("show");  // 다음 장면 보이기

        }, 4000);

    });
});