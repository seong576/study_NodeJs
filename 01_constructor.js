/*
    자바스크립트의 생성자 함수는 내부에 this를 사용한다는 점에서 기존 함수와 다르다.
    그리고 할당할때에는 new라는 키워드를 통해서 객체를 생성한다.
    new 키워드를 사용히여 생성하지 않으면 undefined를 반환한다.
*/
function Member(name, age=20)
{
    this.name= name;
    this.age = age;
    this.sayName = function()
    {
        console.log(name);
    }
    this.sayAge = function()
    {
        console.log(`${name}'s age is ${age}`);
    }
}
member = new Member("mike");
member.sayName();
member.sayAge();