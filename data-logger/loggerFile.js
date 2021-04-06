let loggerMod = require("./empWrite");
let fs = require("fs");

let empObj = {
    employees:[]
}
fs.exists('empJson.json',function(exists){
    if(exists){
        console.log('File exists')
        fs.readFile('empJson.json',function(err,data){
            if(err){
                console.log(err);

            }else {
                empObj = JSON.parse(data)
                loggerMod.empLogFunc(empObj)
                loggerMod.empWriteFunc(empObj,"empJson.json")
            }
        });
    }else {
        console.log("Oops! File does not exist");
        loggerMod.empLogFunc(empObj)
        loggerMod.empWriteFunc(empObj,"empJson.json")
    }
});