/*
    스케쥴링은 모든 작업이 수행 된 뒤에 실행이 됌
    setTimeout : 설장 시간이 지난 후 작업이 수행됌
    setInterval : 설정 간격에 따라서 작업을 반복수행
    clearTimeout : setTimeout 작업을 중지시킴
    clearInterval : setInterval 작업을 중지시킴
*/
setTimeout(()=>{console.log("hello")},3000);//hello
setInterval(()=>{console.log("hello")},3000);//hello
setInterval((name)=>{console.log(`hello ${name}`)},3000,"mike");//hello mike
