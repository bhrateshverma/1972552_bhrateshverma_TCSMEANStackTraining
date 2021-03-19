
var obj =[]
var projectName = new Map()



function formSubmit() {
    var myObj = {} 
    var client = document.getElementById("clientName").value;
    var project = document.getElementById("projectName").value;
    var budget = document.getElementById("budget").value;
     
    if(client =="" || project =="" || budget ==""){
        alert("One of the inputs is blank");
    }else{
        projectName.set(project,parseInt(budget))
        myObj.client = client
        myObj.project = project
        myObj.budget = budget
        save(myObj)
        clearmyForm()
    }

function save(data){
    obj = JSON.parse(localStorage.getItem("getTeamBudget"))

    if(obj && obj.length > 0){
        obj.push(data)
        localStorage.setItem("getTeamBudget", JSON.stringify(obj))
    } else{
        obj = []
        obj.push(data)
        localStorage.setItem("getTeamBudget", JSON.stringify(obj))
    }
}   
}

function clearmyForm(){
    document.getElementById("clientName").value=""
    document.getElementById("projectName").value=""
    document.getElementById("budget").value=""
}