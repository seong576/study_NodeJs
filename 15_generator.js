/*
    generator는 함수의 실행을 yield 단위로 멈추었다가 재개가능한
    순차접근 기능이다.
    next() : 다음 yield 값에 대한 작업을 수행한다./값을 입력받기도 가능
    return("END") : 작업을 진행도와 상관 없이 바로 종료시킨다.
    throw(new Error("err")) : 작업의 진행도와 상관 없이 에러를 내서 강제종료 시킨다.
*/
function* fn(){
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    yield 3;
    console.log("finish");
    return "finish";
}
const a = fn();
a.next();
//a.throw(new Error("err"));
//a.return("END");

const arr = [1,2,3,4,5];
const it = arr[Symbol.iterator]();
console.log(it.next());

function* fn2(){
    num1 = yield "첫번째 숫자 입력";
    console.log(num1);
    num2 = yield "두번째 숫자 입력";
    console.log(num2);
    return num1+num2;
}
const a2 = fn2();
a2.next();
a2.next(2);
console.log(a2.next(5));