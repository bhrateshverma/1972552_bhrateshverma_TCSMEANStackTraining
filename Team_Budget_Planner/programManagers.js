
var obj =[];

function readFormSubmit(){
    var myObj = {}
    myObj.clientName = document.getElementById("clientName").value;
    myObj.projectName = document.getElementById("projectName").value;
    myObj.budget = document.getElementById("budget").value;
    console.log(myObj);
    return myObj;
}

function formSubmit(){
    var data = readFormSubmit();
    obj.push(data);
    clearmyForm();
}

function saveInfo(){
    var projInfo = JSON.stringify(obj);
    sessionStorage.setItem("myObj", projInfo );
}

function clearmyForm(){ 
    document.getElementById("clientName").value = "";
    document.getElementById("projectName").value = "";
    document.getElementById("budget").value = "";
}
