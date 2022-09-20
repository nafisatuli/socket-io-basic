const express=require('express');
const app=express();
const http=require('http');
const expressServer=http.createServer(app);


//socket configuration
const {Server}=require('socket.io');

//pass expressServer as a contructor parameter in the object
const io=new Server(expressServer);

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})

expressServer.listen(3000,function () {
    console.log("server run at 3000")
})