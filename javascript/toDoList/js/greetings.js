const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const hiddenToDo = document.getElementById("todo-form");
const hiddenList = document.getElementById("todo-list");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    /* 
    새로고침 이벤트 중지 시키고 #login-form에 hidden클래스 추가한다.
    입력된 username은 localStorage에 저장하고 paintGreetings함수를 실행
    */
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    /* 
    #greeting인 곳에 `안녕하세요 ${username}님` 값으로 설정 후
    greeting, hiddenToDo, hiddenList에 있는 hidden클래스 제거
    */
    greeting.innerText = `안녕하세요 ${username}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    hiddenToDo.classList.remove(HIDDEN_CLASSNAME);
    hiddenList.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    /* 
    localStorage에 저장된 username 값이 없을 경우 #login-form에 있는
    hidden클래스 없애주고 onLoginSubmit함수 실행
    */
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // localStorage에 저장된 username 값이 있을 경우 paintGreetings함수 실행
    paintGreetings(savedUsername);
}