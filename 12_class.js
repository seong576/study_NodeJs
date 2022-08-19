/*
    자바스크립트에서는 함수형 생성자를 대신하여 클래스를 사용한다.
    - 함수형 생성자에서는 new 가 없을시 undefined를 출력하지만 클래스에서는 에러를 발생시킨다.
    - 생성된 객체를 뱐복문으로 순회해보면 함수형 생성자에는 함수가 포함되지 않는다.
    - 클래스끼리의 상속을 수행할 땐 extend를 사용한다.
*/
class User{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
    sayName()
    {
        console.log(`hello my name is ${this.name}`);
    }
}
class RPGgamer extends User{
    constructor(game,name,age)
    {
        super(name,age);
        this.game = game;
    }
    //오버라이딩
    sayName()
    {
        console.log(`hello my name is ${this.name}
        and my favorite game is ${this.game}`);
    }
}
user = new User("jone",12);
user.sayName();

user2 = new RPGgamer("maplesory","mike",19);
user2.sayName();