const express = require('express');

const app = express();

var obj = {
    xiaohong: {
        name: 'xiaohong',
        age: 21,
        sex: 'female',
        height: 165,
        weight: 50
    },
    xiaoming: {
        name: 'xiaoming',
        age: 20,
        sex: 'male',
        height: 175,
        weight: 65
    }
}
app.get("/getInfo", (req, res) => {
    res.send(JSON.stringify(obj));
})
app.all("*",function(req,res,next){    
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");    
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");    
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");    
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})
app.listen(3000, function () {
    console.log('localhost:3000 is running');
})
