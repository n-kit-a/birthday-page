const pangi = document.getElementById("pangi")
const cake = document.getElementById("cake")
const candleB = document.getElementById("candle-before")
const overlay = document.getElementById("overlay")
const candleA = document.getElementById("candle-after")
const fireworks = document.getElementById("fireworks")
const cakeBtn = document.getElementById("cakeBtn")
const cakePage = document.querySelector("#cake-scene");
const letter = document.querySelector("#letter");

pangi.classList.add("walk-right");

pangi.addEventListener("animationend", function(e){

    if(e.animationName === "walkRight"){
        pangi.classList.remove("walk-right");
        pangi.classList.add("flip");
        pangi.classList.add("walk-left");
    }

    if(e.animationName === "walkLeft"){
        cake.classList.add("show");
        cake.classList.add("drop-cake");
    }

});


cake.addEventListener("animationend", function(){
    pangi.src = "images/pang_put.jpeg";
    
    candleB.classList.add("show");
    candleB.classList.add("drop-candle")
});


candleB.addEventListener("animationend", function(e) {

    console.log(e.animationName);

    if(e.animationName === "dropCandle"){

        pangi.classList.add("walk-out");

        const rect = candleB.getBoundingClientRect();

        overlay.style.setProperty(
            "--x",
            `${rect.left + rect.width/2}px`
        );

        overlay.style.setProperty(
            "--y",
            `${rect.top + rect.height/2}px`
        );

        overlay.classList.add("overlay-on");
    }

});



candleB.addEventListener("click", function(){

    // 불 켜진 촛불 숨김
    candleB.style.opacity = 0;

    // 불 꺼진 촛불 표시
    candleA.classList.add("show");

    // 화면 밝아짐
    overlay.classList.remove("overlay-on");


    // 폭죽 실행
    createFireworks("30%", "35%");
    setTimeout(() => {
        createFireworks("70%", "30%");
    }, 500);

    setTimeout(() => {
        createFireworks("50%", "50%");
    }, 1000);

    setTimeout(() => {
        createFireworks("30%", "70%");
    }, 1500);

    setTimeout(() => {
        createFireworks("65%", "60%");
    }, 2000);

    setTimeout(() => {
        wishText.classList.add("show");
    },3200);

    setTimeout(()=>{
        cakeBtn.classList.add("show");
    },4500);

});

function createFireworks(x, y){

    const colors = [
    "#ffd166", // 생일 느낌 노랑
    "#ff9ec4", // 핑크
    "#b8f2e6", // 민트
    "#cdb4db"  // 라벤더
    ]


    fireworks.classList.add("show");


    for(let i=0; i<40; i++){

        const spark = document.createElement("span");

        spark.className = "spark";


        spark.style.left = x;
        spark.style.top = y;

        spark.style.background =
        colors[Math.floor(Math.random()*colors.length)];

        const moveX = (Math.random()-0.5)*500;
        const moveY = (Math.random()-0.5)*500;


        spark.style.setProperty("--x", `${moveX}px`);
        spark.style.setProperty("--y", `${moveY}px`);


        fireworks.appendChild(spark);


        spark.addEventListener("animationend",()=>{
            spark.remove();
        });

    }

}

cakeBtn.addEventListener("click",function(){

    cakePage.style.display="none";

    letter.style.display="block";

});