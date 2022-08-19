/*
    구조 분해 할당 : 변수에 값을 할당할때 간편하게 처리할 수 있도록 해주는 기능
    
*/
let [x,y]=[1,2];
console.log(x); //1
console.log(y); //2

let users = ["tom","jane","jone"];
let [user1,user2,user3] = users;
console.log(user1); //tom
console.log(user2); //jane
console.log(user3); //jone

//기본값 설정
let [a=2,b=3,c=5] = [1,2];
console.log(a,b,c); //1 2 5

//필요 없는 값 제거
[user1, ,user3] = users;
console.log(user1); //tom
console.log(user3); //jone

[x, y] = [y,x];
console.log(x); //2
console.log(y); //1

//변수명 치환
let user = {name:"mike", age:30};
let {name:userName,age:userAge,gender="male"} = user;
console.log(userName); //mike
console.log(userAge); //30
console.log(gender); //male