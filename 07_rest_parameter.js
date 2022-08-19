/*
    나머지 파라미터와 전개구문
    가변적인 갯수의 변수를 입력으로 받아 각각을 처리하는 방법이다.
    ...변수명을 통해서 사용할 수 있으며, 사용법이 간단하여 자주 쓰여진다.
    
*/
//argument를 통한 데이터 전달
function showName(name){
    for(let i =0;i<arguments.length;i++)
    {
        console.log(arguments[i]);    
    }
}
//나머지 매개변수 사용 함수
function showName2(...name){
    console.log(name);   
}
showName('tom','jane','mike');//tom jane mike
showName2('tom','jane','mike');//[ 'tom', 'jane', 'mike' ]

function add(...number)
{
    res = number.reduce((prev,cur)=>prev+cur,0);
    console.log(res);
}
add(1,2,3,4,5,6,7,8,9,10); //55


function User(name,age,...skills)
{
    this.name = name;
    this.age = age;
    this.skills = skills;
}
const user1 = new User("mike",25,"game","programming");
const user2 = new User("mike",25,"fishing");
const user3 = new User("mike",25);
console.log(user1);
console.log(user2);
console.log(user3);

//전개 구문
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let res2 = [0,...arr1,...arr2,7,8,9];
console.log(res2);//[0,1,2,3,4,5,6,7,8,9]

//다음과 같이 할당해도 메모리 주소가 다름 (얕은 복사)
const clone = {...user1};
clone.name="json";
console.log(user1.name);//mike
console.log(clone.name);//json
