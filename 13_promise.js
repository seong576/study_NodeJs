/*
    작업을 효율적으로 수행하기 위해서 promise를 사용한다
    작업을 요청하여 완료될 때까지 대기하는 것이 아닌 작업을 병행으로
    처리하면서 요청한 작업이 완료되면 이를 반환한다, 만약 반환이
    실패할시 재요청을 통해서 다시 작업을 수행한다.
              수행        수행 완료     수행 실패
    state : pending     fulfilled   rejected
    result: undefined   value       error
*/
// const pr = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('ok'),3000)
// });
// pr.then(
//     function(result){console.log("sucess")},
//     function(err){console.log("failed")}
// );

const f1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('1 ok'),2000);
    });
};
const f2 = (message)=>{
    console.log(message)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('2 ok'),1000);
    });
};
const f3 = (message)=>{
    console.log(message)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('3 ok'),3000);
    });
};

//promise chain
// f1().then((resolve) => f2(resolve))
//     .then((resolve) => f3(resolve))
//     .then((resolve) => console.log(resolve))
//     .catch(console.log)
//     .finally(() => {
//         console.log("끝");
//     });
async function order()
{
    try{
    const res = await f1();
    const res2 = await f2(res);
    const res3 = await f3(res2);
    console.log(res3);
    }
    catch(e)
    {
        console.log(e);
    }
    console.log("종료");
}
order();
//더 효율적인 연결방법
//Promise.all([f1(),f2(),f3()]).then((resolve)=>{console.log(resolve)});
async function order2()
{
    try{
    const res = await Promise.all([f1(),f2(),f3()]);
    console.log(res);
    }
    catch(e)
    {
        console.log(e);
    }
    console.log("종료");
}
order2();
//가장빨리 처리되는 작업
//Promise.race([f1(),f2(),f3()]).then((resolve)=>{console.log(resolve)});
