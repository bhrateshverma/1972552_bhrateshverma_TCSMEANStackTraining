let fs = require("fs");
let obj = require("mongoose");       //load the module
obj.Promise = global.Promise;       //creating the reference

let url = "mongodb://localhost:27017/meanstack";

const mongooseDbOption ={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

obj.connect(url,mongooseDbOption);       //ready to connect

let db = obj.connection;        //connected to database

let data =fs.readFileSync("call_data.json");
let convertString = data.toString();
let prseJson = JSON.parse(convertString);
console.log(prseJson)

db.on("error",(err)=>console.log(err));

db.once("open",()=>{
    //defined the schema
    let callRecordSchema = obj.Schema({
        _id: Number,
        source: String, 
        destination: String, 
        sourceLocation: String, 
        destinationLocation: String, 
        callDuration: String,
        roaming: String, 
        callCharge: String
    });
    
    //Creating the model usding schema
    let callRecords = obj.model("",callRecordSchema,"CallRecord");

    //Crating the reference using model
    for(var i= 0; i<prseJson.length; i++){
        let c1 = new callRecords(prseJson[i]);
        c1.save((err,result)=>{
            if(!err){
                console.log("Records inserted successfully"+result)
            }else{
                console.log(err);
            }
            //obj.disconnect();   //close the connection
        })
    }
})
    