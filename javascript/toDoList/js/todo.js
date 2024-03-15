const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];             // array

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));         // toDos 변수의 내용을 String로 변환하고 localStorage에 TODOS_KEY라는 키로 저장
}

function deleteToDo(event) {
    const li = event.target.parentElement;                                  // 클릭된 element의 부모를 li에 저장
    li.remove();                                                            // 저장된 li 삭제
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));            // 클릭한 li.id(문자열에서 숫자로 변환)와 다른 toDo.id는 남긴다
    saveToDos();                                                            // saveToDos 함수 실행
}

function paintToDo(newToDo) {
    const li = document.createElement("li");                // li 요소 추가
    li.id = newToDo.id;                                     // li의 id는 newToDo의 id 값으로 할당
    const span = document.createElement("span");            // span 요소 추가
    span.innerText = newToDo.text;                          // span의 텍스트는 handleToDoSubmit에서 온 newToDo 텍스트가 된다
    const button = document.createElement("button");        // button 요소 추가
    button.innerText = "❌";                                // button의 텍스트는 X 이모지
    button.addEventListener("click", deleteToDo);           // 클릭 시 deleteToDo 함수 실행
    li.appendChild(span);                                   // li에 span 자식 추가
    li.appendChild(button);                                 // li에 button 자식 추가
    toDoList.appendChild(li);                               // toDoList에 li 자식 추가
}

function handleToDoSubmit(event) {
    event.preventDefault();                 // 새로고침 일어나지 않게 막음
    const newToDo = toDoInput.value;        // 값 저장
    toDoInput.value = "";                   // 제출 후 빈값으로 설정
    const newToDoObj = {
        text : newToDo,                     // 텍스트는 입력한 값
        id : Date.now(),                    // id는 현재 시간을 밀리초 단위로 반환한 값(랜덤한 숫자 부여하기 위해서)
    };
    toDos.push(newToDoObj);                 // newToDoObj를 toDos array에 넣음
    paintToDo(newToDoObj);                  // newToDoObj를 paintToDo 함수에 보냄
    saveToDos();                            // saveToDos 함수 실행
}

toDoForm.addEventListener("submit", handleToDoSubmit);      // submit이 될 경우 handleToDoSubmit 함수 실행

const savedToDos = localStorage.getItem(TODOS_KEY);         // localStorage에 저장된 데이터가 TODOS_KEY로 지정된 키 아래에 있는 것이 검색되고, 이를 saveToDos 변수에 할당

if (savedToDos !== null) {                              // savedToDos가 null인 아닌 경우 실행
    const parsedToDos = JSON.parse(savedToDos);         // savedToDos을 String에서 객체로 변환하고 parsedToDos 변수에 할당
    toDos = parsedToDos;                                // parsedToDos를 toDos로 설정 (이전에 로컬 저장소에 저장된 할 일 목록을 현재 세션의 toDos 배열에 할당)
    parsedToDos.forEach(paintToDo);                     // forEach는 각 객체에 대해 function을 실행
}