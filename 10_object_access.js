/*
    함수 호출과 관계 없이 this를 지정하여 객체에서 데이터를 불러올 수 있음
    call : this를 통해 데이터를 불러올 수 있으며, 단일 변수를 통해 데이터 전달
    apply : this를 통해 데이터를 불러올 수 있으며, 배열를 통해 데이터 전달
    bind : 함수의 this 값을 영구히 변경 가능
*/
const mike = {name:"mike"};
const tom = {name:"tom"};
function sayName(){
    console.log(this.name);
}
sayName()//undefined
sayName.call(mike); //mike


function addProperty(birth,occupation){
    this.birth = birth;
    this.occupation = occupation;
}

addProperty.call(mike,1987,"singer");//{ name: 'mike', birth: 1987, occupation: 'singer' }
addProperty.apply(mike,[1987,"singer"]);//{ name: 'mike', birth: 1987, occupation: 'single' }
console.log(mike); 

let arr = [10,4,2,5,7];
console.log(Math.max(arr)); //NaN
console.log(Math.max(...arr)); //10
console.log(Math.max.call(null,...arr));//10
console.log(Math.max.apply(null,arr));//10

const upadateTom = addProperty.bind(tom);
upadateTom(1988,"gamer");
console.log(tom); //{ name: 'tom', birth: 1988, occupation: 'gamer' }


const user = {
    name:"mike",
    show:function(){
        console.log(`hello ${this.name}`)
    }
}
user.show(); //hello mike
fn = user.show;
//fn.show(); //error : name is not exist
fn.call(user); //hello mike
fn.apply(user); //hello mike
fn.bind(user)(); //hello mike



