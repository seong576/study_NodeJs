/* 
    async 함수는 promise를 반환하는 비동기 함수이다.
    await는 async 함수 안에서만 동작하는 키워드로  promise가 수행될때까지 대기하고 실행한다.
    
*/
async function getName(name){
    return "mike";
}
async function getErr()
{
    throw new Error("err..");
}
console.log(getName());
getName().then((name) => console.log(name));
getErr().catch(err => console.log(err));

function getName(name)
{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(name);
        }, 1000);
    });
}
async function showName()
{
    const res = await getName("jone");
    console.log(res);
}
console.log("시작");
showName();