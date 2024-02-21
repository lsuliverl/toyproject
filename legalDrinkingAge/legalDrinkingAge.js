/* prompt();는 사용자에게 창을 띄어 값을 받는다. prompt();를 사용하면 답을 할때까지 코드의 실행을 멈추고, 매우 오래된 방법이다.
별로 안 이쁘고 css로 바꾸지도 못한다.

typeof라는 키워드를 쓰면 type를 볼 수 있는데, prompt();에서 숫자를 입력해도 string이라고 뜬다. string이 디폴트이기 때문이다.

string-->number로 변환해주는 함수 parseInt();이다.
참고로 "숫자"가 아닌게 입력되면 변환이 안된다. NaN(not a number) */

const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number.");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink.");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise.");
} else if (age > 80) {
    console.log("You can do whatever you want.");
} else if (age === 100) {
    console.log("Wow you are wise.");
}
