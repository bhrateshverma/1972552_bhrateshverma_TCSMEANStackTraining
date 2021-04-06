let fs = require("fs");
let readMod = require('readline-sync');

exports.empLogFunc = function(data){
    let empRec = readMod.question("What are the number of records you want to store?");
    for(i=0;i<empRec.length;i++){
        let fname = readMod.question("Enter the employee's first name");
        let lname = readMod.question("Enter the employee's last name");
        let gender = readMod.question("Enter the employee's gender");
        let salary = readMod.question("Enter the employee's salary");
        var timestamp = new Date().toLocaleString();
        data.employees.push({fname,lname,gender,salary,timestamp});
    }
}

exports.empWriteFunc = function(data,jsonData){
    var empString = JSON.stringify(data);

    fs.writeFile(jsonData,empString, (err)=>{
        if(!err){
            console.log("Employee Records stored successfully")
        }
    });
}