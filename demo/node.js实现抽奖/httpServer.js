/**
 * Created by zml on 2017/4/13.
 */
var http=require('http');
var express=require('express');
var app=express();
app.use(express.static('public'));
app.get('/lucky',function(request,response){
    var luckydog=[1,2,3,0,0,0,0,0]; //定义中奖等级 0-3 0为不中
    var index=Math.floor(Math.random()*luckydog.length);    //0 1 2 3下标 随机数
    var luckynumber=luckydog[index];    //根据随机下标取出中奖等级
    response.json({dog:luckynumber});   //将中奖等级返回客户端
});
var server=http.createServer(app);
server.listen(8888,function(){
    console.log('服务器运行于8888端口')
});


