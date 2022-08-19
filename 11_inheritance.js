/* 
    자바스크립트에서는 객체의 상속을 __proto__를 통해서 수행할 수 있음
    __proto__ : 객체간의 상속을 수행할 때 사용
    prototype : 객체에 추가적인 속성을 집어넣고 싶을 때 사용 
*/
const car = {
    wheels: 4,
    drive : function(){
        console.log("dirve...")
    }
}
const bmw = function(color){
    this.color=color;
    this.navi=1;
}
const banz = {
    color:"white",
}
const audi = {
    color:"red"
}
//상속
banz.__proto__=car;
audi.__proto__=car;
for(p in banz)
{
    if(banz.hasOwnProperty(p))
        console.log(`o : ${p}`);
    else
        console.log(`x : ${p}`);
}

//stop 함수 속성 추가
bmw.prototype.stop = function(){
    console.log("stop");
};
//다중 속성 추가
bmw.prototype = {
    constructor :bmw,
    wheels:4,
    navi:1,
    stop : function(){
        console.log("stop");}
}
x5 = new bmw("red");
x5.stop();

console.log(x5.wheels)
