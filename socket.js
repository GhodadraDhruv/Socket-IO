const express=require('express');
const app=express();
const PORT=3000;
const http=require('http');
const server=http.createServer(app);
const {Server}=require('socket.io');
const io=new Server(server);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

io.on("connection",(socket)=>{
    console.log("a User Connected ...");
    socket.on("chat",(msg)=>{
        io.emit("chat",msg);
    }),
    socket.on("disconnect",(socket)=>{
        console.log("User Disconnected ...");
    });
});

server.listen(PORT,()=>{
    console.log(`Server Listenning On http://localhost:${PORT}`);

});
