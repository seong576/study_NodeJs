/*
    내장함수 Math, String, Number, Double..등등의 정적인 객체를 통해서 직접
    생성하지 않고 작업을 수행할 수 있는 함수들을 의미한다. 

    num.toString(radix) : radix진수 문자로 변환한다. default: 10

    Math.ceil(num) : 숫자 올림,    Math.floor(num) : 숫자 내림
    Math.round(num) : 숫자 반올림,  Math.toFixed(loc) : loc위치에서 소수점 고정

    isNan(val) : val이 NaN인가를 체크 

    parseInt(num str,radix): str 타입 num을 숫자로 변환
    parseFloat(num str,radix): str 타입 num을 소수로 변환

    str.toUpperCase() : 모든 문장를 대문자로 변환
    str.toLowerCase() : 모든 문장를 소문자로 변환
    str.indexOf(str) : str이 어느 위치에 있는지 반환/ 없을시 -1 반환
    str.includes(str) : str이 문자열에 포함되는지 반환 true/false 
    str.slice(start,end) : 문장의 start에서 end까지를 반환
    str.substr(start,end) : 문장의 start 에서 end개의 문자를 반환
    str.trim(str) : str에서 좌우 공백을 제거
    str.repeat(num) : num만큼 str을 반복

*/

let num = 255;
// console.log(num.toString(16)); //16진수 ff
// console.log(num.toString(8)); //8진수 377
// console.log(num.toString(2)); //2진수 11111111

//console.log(Math.PI); //3.141592653589793
// console.log(Math.ceil(5.1)); //6
// console.log(Math.floor(5.1)); //5
// console.log(Math.round(5.1)); //5

// toFixed는 소수점을 고정하여 문자열로 반환해준다.
let num2 = 1.1;
num2+=0.1;
// console.log(1.2==num2.toFixed(2));//true 소수점 고정, 문자형, 길이를 넘을경우 0으로 채움
// console.log(1.2==num2);//false

// isNaN은 값이 NaN인지 판단할 수 있는 유일한 함수이다.
let x = Number("x");
let y = Number("10");
// console.log(isNaN(x));//true
// console.log(isNaN(y));//false

//parseInt/parseFloat은 숫자가 문자에 포함되어있다면 그 숫자만을 뽑아냄
// console.log(parseInt("10px"));//10
// console.log(parseInt("ff",16));//255 n진수를 10진수로 변환

// 문자열 함수
let c = "Hi My Mame Is Tom";
// console.log(c.length);//17
// console.log(c[4]); //y
// c[4] = "바";
// console.log(c[4]);//y 특정 인덱스 변환 불가

console.log(c.toUpperCase()); // 모든 문자열을 대문자로 HI MY MAME IS TOM
console.log(c.toLowerCase()); // 모든 문자열을 소문자로 hi my mame is tom
console.log(c.indexOf("Is")); // 해당 문자열의 인덱스 반환 없으면 -1 반환 11
console.log(c.includes("Is")); //문자열이 있으면 true 없으면 false 반환 true 
console.log(c.slice(3,-3)); //문자열 슬라이싱 My Mame Is 
console.log(c.substring(3,-3)); //음수 값은 0으로 치완됌 n과 m이 바뀌어도 그 사잇값을 출력함 Hi 
console.log(c.substr(3,10)); //n에서 m개의 문자열을 가져옴 My Mame Is
console.log("     hello       ".trim());//좌우 공백 제거 hello
console.log("hello".repeat(3));//n번 문자열 반복 출력 hellohellohello