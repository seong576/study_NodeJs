/*
    배열이란 여러개의 자료를 담기 위해서 사용돠는 변수의 묶음이다.

    arr.splice(start, end, something) : arr에서 start에서 end개를 제거힌다. something가 있으면 이를 그 사이에 추가한다.
    arr.slice(start,end): arr의 start에서 end까지의 배열을 반환한다.
    arr.concat(arr or somthing) : arr에 arr 또는 something를 추가한다.
    arr.indexOf(loc,find) : loc위치에서 find를 arr에서 찾아내어 인덱스 반환 / loc 생략가능
    arr.lastIndexOf(find) : arr의 마지막 위치에서 역순으로 find를 찾아내어 인덱스 반환
    arr.includes(find) : arr에 find가 있는지 출력 true/false

    arr.find(fn) : 함수fn의 조건에 맞는 값을 찾아줌
    arr.findIndex(fn) : 함수fn의 조건에 맞는 인덱스를 찾아줌
    arr.filter(fn) : 함수fn의 조건에 맞는 다중 값들을 찾아줌

    arr.sort(fn) : 함수fn에 정렬 조건을 주어 정렬 수행 ex) (a,b)=>a-b
    arr.map(fn) : 함수fn에서 배열을 순회하며 조건의 맞는 값을 리스트로 반환
    arr.reduce(fn) : 함수fn에 조건에 맞게 값을 필터링하여 연산 또는 저장
    arr.join(char) : arr을 하나의 문자열로 변환하는데 arr사이 사이에 char을 추가


*/
let arr = [1,2,3,4,5];
arr.splice(1,2);//n번째 위치에서 m개 만큼을 제거한디.
console.log(arr); // [ 1, 4, 5 ]

arr = [1,2,3,4,5];
let res = arr.splice(1,2,200,300);//n번째 위치에서 m개 만큼 지워 number[]로 치완한다.
console.log(arr); //[ 1, 200, 300, 4, 5 ]
console.log(res); //[ 2, 3 ]

arr = [1,2,3,4,5];
console.log(arr.slice(1,-1)); //[ 2, 3, 4 ]

arr2 = arr.concat([6,7],8);
console.log(arr2); //배열 병합

//반복문
arr.forEach((value,index) => {
    console.log(`${index+1} : ${value}`);
});

arr = [1,2,3,4,5,4,3,2,1];
console.log(arr.indexOf(3)); // 2
console.log(arr.indexOf(3,3)); // 6 시작 위치,찾는 숫자
console.log(arr.lastIndexOf(3)); //6 마지막 위치에서 찾기
console.log(arr.includes(3)); //true 포함여부만 출력

//함수를 통해서 조건을 걸어서 값을 찾아냄
const res2 = arr.find((item)=> item%2===0);
console.log(res2);

let userlst = [
    {name:"kim", age:15},
    {name:"jone", age:25},
    {name:"lake", age:24}
];
const res3 = userlst.find((user)=> user.age<19); // 단일 값 반환
const res4 = userlst.findIndex((user)=> user.age<19); //단일 값 인덱스 반환
const res5 = userlst.filter(user => user.age>19); // 다중 깂 반환
console.log(res3); //{ name: 'kim', age: 15 }
console.log(res4); //0
console.log(res5); //[ { name: 'jone', age: 25 }, { name: 'lake', age: 24 } ]

let newUserList = userlst.map((user,index)=>{
    return Object.assign({isAdult : user.age>19},user)
});
console.log(newUserList); 
/*
[
  { isAdult: false, name: 'kim', age: 15 },
  { isAdult: true, name: 'jone', age: 25 },
  { isAdult: true, name: 'lake', age: 24 }
]
*/

let c = ["my","name","is","jone"];
console.log(c.join(","))//my,name,is,jone
console.log(c.join(",").split(","));//[ 'my', 'name', 'is', 'jone' ]
console.log(Array.isArray(c));//true


arr = [12,43,2,4];
arr.sort();//[ 12, 2, 4, 43 ] 값을 문자열로 인삭
arr.sort((a,b)=>a-b); //[ 2, 4, 12, 43 ] (b,a)=>a-b는 내림차순 정랼
console.log(arr);


const res6 = arr.reduce((prev,cur)=>prev+cur,0);//61 누적값과 현재값을 합해줌
console.log(res6);

/*
let userlst = [
    {name:"kim", age:15},
    {name:"jone", age:25},
    {name:"lake", age:24}
];
*/
const res7 = userlst.reduce((prev,cur)=>{
    if(cur.age >19){
        prev.push(cur);
    }
    return prev;
},[]);
console.log(res7);