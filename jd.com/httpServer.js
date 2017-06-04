/**
 * Created by zml on 2017/4/13.
 */
var http=require('http');
var express=require('express');
var app=express();  //构建中间件
app.use(express.static('public'));  //将网页内容传入客户端

var httpServer=http.createServer(app);  //创建服务器并运行于端口号
httpServer.listen(8888,function(){
    console.log('运行于8888端口')
});
require('./socketServer.js')(httpServer);   //.js后缀可写可不写
