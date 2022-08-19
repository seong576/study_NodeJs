/*
    app.get에서 라우팅 위치와 전송할 콜백(함수 수행 후 실행 함수)을
    설정한 뒤, listen을 통해서 포트번호를 설정하면 로컬 호스트를 통해서
    웹으로 접속이 가능하다.
*/

//ex.1) 기본 사용법
const express = require("express")
const app = express()

//routing loc, callback function
app.get('/hello',function(req, res)
{
    res.send('hello world')
})
// app.listen(3000)
//http://localhost:3000/hello =>hello world 출력

//ex.2) 라우팅 예제
app.get('/dog',function(req,res){
    res.send("sound : 멍멍 ")
})

app.get("/cat",function(req,res){
    res.json({sound : "야옹"})
    //res.send({sound : "야옹"})
    //둘다 똑같음
})

//ex.3) 파라미터 전달
app.get('/user/:id',function(req,res){
    // const q = req.params
    // console.log(q)
    // res.send(q)
    q = req.query
    console.log(q)
    res.send(q.id)//아래 형태에서는 id,pw를 받을 수 있음
})
//http://localhost:3000/user/me params
// = { id: 'me' }
//http://localhost:3000/user/me?id=me&pw=z query
//{ a: 'me', b: 'z' }
app.listen(3000)
