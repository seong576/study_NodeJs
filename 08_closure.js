/*
    Lexical Environment(어휘적 환경): 변수에 따른 내용을
    찾을 때, 함수, 블록, 지역, 전역 순으로 범위를 넓혀가며
    값을 찾아가는 환경을 의미한다. 해당 값은 함수 내부에 정적으로
    저장되어 진다.

    closure란 함수와 어휘적 환경의 조합이다.
*/
function add(x){
    return function(y){
        return x+y; //x값은 add에 존재하며 현재 함수에는 존재하지 않음 그러므로 상위 함수에서 값을 찾음
    }
}
//add3,4 함수가 생성된 후에도 add의 x에 접근 가능
let add3 = add(3);
let add4 = add(4);
console.log(add3(2));//5
console.log(add4(4));//8