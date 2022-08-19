/*
    데이터에 대한 유일성을 만족시키기 위한 객체
    keys,values,entries로 데이터를 불러올 수 없음
    for문도 예외 없음
    Symbol(name) : 같은 name여도 다른 객체를 생성함
    Symbol.for(name) : 전역 name를 심볼로 하여 같은 객체를 참조할 수 있음
    
*/

const id = Symbol("id");
const id2 = Symbol("id");
//console.log(id== id2); //false
//console.log(id=== id2); //false

const user = {
    [id]:"kim",
    pw:"1234"
}
// console.log(user); //{ pw: '1234', [Symbol(id)]: 'kim' }
// console.log(Object.keys(user)); //[ 'pw' ]
// console.log(Object.values(user)); //[ '1234' ]


/*------------------(전역심볼)Symbol.for(이름이 같다면 같은 것을 가르킴)--------------------*/
const id3 = Symbol.for("id");
const id4 = Symbol.for("id");
// console.log(id3== id4); //true
// console.log(id3=== id4); //true
// console.log(Symbol.keyFor(id3)); //keyFor은 심볼의 이름을 알 수 있음 (id)
// console.log(id3.description); //id


// console.log(Object.getOwnPropertySymbols(user)); //객체에서 심볼만 출력 [ Symbol(id) ]
// console.log(Reflect.ownKeys(user)); //객체에서 심볼포함 출력[ 'pw', Symbol(id) ] 


const Item = {
    name:"가방",
    value:20000
}
const sayInfo = Symbol("sayInfo");
Item[sayInfo] = function(){ console.log(`name : ${this.name} value : ${this.value}`);}
Item[sayInfo]();