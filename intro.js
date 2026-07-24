const texts = document.querySelectorAll(".text");
const photos = document.querySelectorAll(".photo")
const introBtn = document.querySelector("#introBtn");
const introPage = document.querySelector("#intro");
const cakeScene = document.querySelector("#cake-scene");


document.addEventListener("introStart", function(){

    // 글 순차적으로 나타나게
texts.forEach((text, index) => {
    setTimeout(() => {
        text.classList.add("show");
    }, index * 1000);
});

// 사진 나타나게
setTimeout(() => {
    photos.forEach(photo => {
        photo.classList.add("show");
    });
}, 4000);

// 사진 무빙
const gifs = document.querySelectorAll(".moving");

let finishedPhotos = 0;

gifs.forEach(gif => {
    let count = 0;
    const move = setInterval(() => {

    // 랜덤 위치 설정
        const x = Math.random() *80;
        const y = Math.random() *80;

        gif.style.left = x + "vw";
        gif.style.top = y +"vh";

        count++;

        if(count >= 15){
            clearInterval(move);
            gif.style.opacity = 0;

            finishedPhotos++;

            // 사진 4개 모두 사라짐
            if(finishedPhotos === gifs.length){

                introBtn.style.opacity = 1;
                introBtn.style.pointerEvents = "auto";
            }
        }
    }, 700);

});


introBtn.addEventListener("click", function(){

    introPage.style.display = "none";
    cakeScene.style.display = "block";

});

});
