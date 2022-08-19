express = require("express")
cors = require("cors") //교차 출처 리소스 공유
app = express()

//임의적인 모든 접근에 대해서 허용 이게 없을시 17_index.html에서 응답불가
app.use(cors())
app.get("/",(req,res)=>{res.send("hello world")})
app.get("/sound/:name",(req,res)=>{
    const {name} =req.params
    if(name == "dog")
        res.json({"sound":"멍멍"})
    else if(name == "cat")
        res.json({"sound":"야옹"})
    else   
    res.json({"sound":"none"})
})

app.listen(3000)