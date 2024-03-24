import config from "./config.js";

const { API_KEY } = config;                // config 객체에서 API_KEY 속성을 추출하여 새로운 상수 API_KEY에 할당

function onGeoOk(position) {
    const lat = position.coords.latitude;           // 현재 위치 위도
    const lon = position.coords.longitude;          // 현재 위치 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;          //위도와 경도 그리고 API 키를 사용하여 OpenWeatherMap API에 요청할 URL을 생성
    fetch(url)                                                                                  // 주어진 URL로 GET 요청을 보내어 데이터를 가져온다
        .then((response) => response.json())                                                    // 가져온 응답(response)을 JSON 형식으로 변환
        .then((data) => {
            const div = document.querySelector("#weather");                                                                      
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = `${data.name}`;                                                         // 현재 위치의 도시 이름 text 출력
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;                      // 날씨와 온도 text 출력
            const img = document.createElement("img");                                              // img Element 생성
            div.appendChild(img);                                                                   // div에 img 자식 추가
            img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`               // 이미지 경로 설정
            img.alt = `${data.weather[0].description}`                                              // 해당 이미지를 대체할 텍스트를 명시 설정
        });
}

function onGeoError() {
    alert("위치 정보를 찾을 수 없어 날씨를 제공 할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);          //사용자의 현재 위치를 가져오는 요청을 보내고 성공적으로 위치 정보를 가져오면 onGeoOk 함수가 호출되고, 실패하면 onGeoError 함수가 호출