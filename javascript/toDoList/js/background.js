const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");      // img Element 생성

bgImage.id = `bgImg`;                   // 아이디 추가
bgImage.src = `img/${chosenImage}`;     // img Element에 경로 추가, ${chosenImage}은 랜덤 이미지

document.body.appendChild(bgImage);     // body에 bgImage에서 만든 img Element 추가