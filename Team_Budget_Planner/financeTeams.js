window.onload = loadData()
function loadData(){
    var obj = JSON.parse(localStorage.getItem("getBudget"))

    if(obj && obj.length>0){
        for(i=0;i<obj.length;i++){
            insertRecord(obj[i])
        }
        caclTotal(obj)
    } else{
        obj = []
    }
}    

function insertRecord(data){
    var table = document.getElementById("budgetlist")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);  //row created 
   
    var cell1 = newRow.insertCell(0);     //cell created 
    cell1.innerHTML=data.client;      // value placed 
   
    var cell2 = newRow.insertCell(1);     // cell created 
    cell2.innerHTML=data.project;      
    
    var cell3 = newRow.insertCell(2);     // cell created 
    cell3.innerHTML="$"+data.budget;      // value placed
   
   }
   
function caclTotal(data){
    var tot = 0
    var show = ""
    for (i=0;i<data.length;i++) {
        tot += parseFloat(data[i]["budget"])
    }
    show += "Total $"+ tot
    document.getElementById("tot").innerHTML = show
}
  