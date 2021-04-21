let app = require("express")()
let parser = require("body-parser");
let port = 9090

app.use(parser.urlencoded({extended:true}));
var obj = require("mongoose")
obj.Promise= global.Promise
var url = "mongodb://localhost:27017/meanstack"
var mongooseDbOption ={
    useNewUrlParser: true,
    useUnifiedTopology: true
}
obj.connect(url,mongooseDbOption)

obj.connection; 

var CourseSchema = obj.Schema({
    _id:String,
    courseName:String,
    description:String,
    amount:String
})

var courses = obj.model("",CourseSchema,"Courses")


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/add",(req,res)=>{
    res.sendFile(__dirname+"/add.html")
})

app.post("/add",function (req,res) {
    var body = req.body

        let c1 = new courses(body);
            c1.save((err,result)=>{
                if(!err){
                    res.sendFile(__dirname+"/index.html")
                }else {
                    res.send(err)
                }
            })
})

app.get("/update",(req,res)=>{
    res.sendFile(__dirname+"/update.html")
})

app.post("/update",(req,res)=> {
    let id = req.body.courseID
    let amount = req.body.amount

    courses.updateOne({_id:id}, {amount:amount}, (err, result)=> {
        if(!err){
            if(result.nModified>0){
                res.sendFile(__dirname+"/index.html")
            }else {
                res.send("Record is not available");
            }
        }else {
            res.send("Error generated "+err);
        }
    })
    
})

app.get("/delete",(req,res)=>{
    res.sendFile(__dirname+"/delete.html")
})

app.post("/delete",(req,res)=> {
    let id = req.body.courseID
    courses.deleteOne({_id:id}, (err, result) => {
        if(!err){
            if(result.deletedCount>0){
                res.sendFile(__dirname+"/index.html")
            }else {
                res.send("Record not present");
            }
        }else {
            res.send("Error generated "+err);
        }
    })
})

app.get("/read",(req,res)=>{
    courses.find({}, (err, result) => {
        if(!err) {
            res.json(result)
        }
    })
})


app.listen(port,()=>console.log(`Server running on port nubmer ${port}`));
