let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

var obj = require("mongoose");
obj.Promise= global.Promise;

var url = "mongodb://localhost:27017/meanstack"

var mongooseDbOption ={
    useNewUrlParser: true,
    useUnifiedTopology: true
}
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
obj.connect(url,mongooseDbOption)

let db = obj.connection;
db.on("error", (err)=>console.log(err));
db.prependListener("open",()=>{
    let c = {}
    io.on("connection",(socket)=>{
        socket.on("name", (name)=>{
            c.name = name
        })
    })

io.on("connection", (socket1)=>{
    socket1.on("message", (msg)=>{
        c.message = msg

        let ChatSchema = obj.Schema({
            name: String,
            message: String
        });
        let chatdata = obj.model("",ChatSchema, "Chat");

        let c1 = new chatdata({name:c.name, message:c.message});
        c1.save((err, result)=>{
            if(!err){
                console.log("Record Inserted Successfully"+result);
            } else{
                console.log("err");
            }
            obj.disconnect();
        })
    })
})
}) 

http.listen(9090, ()=>console.log('Server running on port 9090'))
