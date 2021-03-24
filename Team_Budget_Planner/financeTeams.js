function insertRecord(myObj){
    console.log("display");
    console.log("myObj");

    var table = document.getElementById("budgetlist")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);  //row created 
   
    var cell1 = newRow.insertCell(0);     //cell created 
    cell1.innerHTML=myObj.clientName;      // value placed 
   
    var cell2 = newRow.insertCell(1);     // cell created 
    cell2.innerHTML=myObj.projectName;      
    
    var cell3 = newRow.insertCell(2);     // cell created 
    cell3.innerHTML=myObj.budget;      // value placed
   
   }
   
function retrieveInfo(){
    var sum = 0;
    var infoData = sessionStorage.getItem("myObj");
    var objList = JSON.parse(infoData);

    console.log("objects: ");
    console.log(objList);

    var lenObj = objList.length;
    console.log("index: "+lenObj);
    for(let i = 0; i < lenObj; i++)
    {
        insertRecord(objList[i]);
        sum = sum + eval(objList[i].budget);
    }
    document.getElementById("budget").innerHTML = "The total budget is: "+sum;
}