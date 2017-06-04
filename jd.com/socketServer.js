/**
 * Created by zml on 2017/4/13.
 */
var socketIo=require('socket.io');  //引入双工通讯
var library=require('./library.js');

module.exports=function(httpServer){
    var socketServer=socketIo.listen(httpServer);   //socket服务器监听httpServer服务器
    socketServer.on('connect',function(socket){ //连接客户端
        console.log(socket.id+' 客户端连接');
        setTimeout(function(){
            welcome(socket);//欢迎信息
            main(socket);   //菜单
        },1000);
        socket.on('message',function(news){ //问题库
            setTimeout(function(){
                issue(socket,news)
            },1000);
        });
        socket.on('disconnect',function(){
            console.log(socket.id+' 客户端离开')
        });
    });
};
function welcome(socket){   //欢迎信息
    var welcomeText={
        types:'welcome',
        connect:library.welcome
    };
    socket.send(welcomeText);
}
function main(socket){      //菜单
    var mainText={
        types:'main',
        connect:library.main
    };
    socket.send(mainText);
}
function issue(socket,news){      //问题库
    var newCon=news.connect;
    var a=0;
    if(news.types=='you'){
        var issueText={
            'types': 'issue',
            connect:library.issue[newCon]
        };
        var errR={
            'types': 'err',
            connect:library.errR.con
        };
        for(var key in library.issue){
            if(newCon==key){
                socket.send(issueText);
                a=1;
            }
        }
        if(a==0){
            socket.send(errR);
        }
    }
}

