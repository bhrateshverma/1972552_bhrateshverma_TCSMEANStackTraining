let url = require("url");
let http = require("http");
let port = 9090;
const fs = require("fs");

var empObj = {
    "employees":[]
}

let addtheTask = `

    <h1> Add Task Here</h2>
    <form action="" method="get">
        <label>Emp ID:</label>
        <input type="text" name="emp_id"/><br/>
        <label>Task ID:</label>
        <input type="text" name="task_id"/><br/>
        <label>Task Name:</label>
        <input type="text" name="task"/><br/>
        <label>Deadline:</label>
        <input type="date" name="deadline"/><br/><br/>
        <input type="submit" name="Add Task"/>
        <input type="reset" name="Reset"/>
    </form><br/>
    <a href = "/display">Display the Tasks</a> <br/>
    <a href = "/delete">Delete the Task Here</a><br/>
   
    
`;

let deletetheTask = `

    <h1> Delete the Task </h1>
    <form action="/delete" method="get">
        <label>Task ID:</label>
        <input type="text" name="task_id"/><br/><br/>
        <input type="submit" value="Delete Task"/>
        <input type="reset" value="Reset"/>
    </form>
    
`;
let TaskTable = `
<h2>Display the Tasks</h2>
    <table>
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>Task ID</th>
                <th>Task Description</th>
                <th>Deadline</th>
            </tr>
        </thead>
        <tbody>        
`

let OptionTable = `
        </tbody>
    </table>
    <br>
    <a href = "/">Add a Task</a>
    <a href="/delete">Delete a Task</a>
    <br/>
`;


let server = http.createServer((req, res) => {
    res.setHeader("content-type", "text/html");

    let tskStr = fs.readFileSync("taskList.json").toString();
    let items = new Array();
    if (tskStr != "") {
        items = JSON.parse(tskStr);
    }

    if (req.url != "/favicon.ico") {            
        if (req.url == "/") {                  
            res.write(addtheTask);
        } else if (req.url.startsWith("/?"))
            res.write(addtheTask);
            
            
            let data = url.parse(req.url, true).query;
            let unq_task = false; 
            for (let i = 0; i < items.length; i++) {
                if (items[i].task_id == data.task_id) {
                    unq_task = true;
                }
            }
            if (unq_task) {
                res.write("Task ID already exists")
            } else if(data.task_id == "") {
                res.write("Missing Task ID")
            } else {
                let tasks = { "emp_id": data.emp_id, "task_id": data.task_id, "task": data.task, "deadline": data.deadline };
                items.push(tasks);
                res.write("Task Added Successfully");
            }
            
            emp_tasks = JSON.stringify(items);

            fs.writeFileSync("taskList.json", emp_tasks);
        } else if (req.url == "/delete") {              
            res.write(deletetheTask);
        } else if (req.url.startsWith("/delete?")) {   
            res.write(deletetheTask);
            let urlDetails = req.url;
            let data = url.parse(urlDetails, true).query;
            
            let flag = false;
            for (let i = 0; i < items.length; i++) {
                if (items[i].task_id == data.task_id) {
                    items.splice(i, 1);
                    flag = true;
                }
            }
            if (!flag) {
                res.write("Task ID not found");
            } else {
                res.write("Task Deleted Successfully");
            }
           
            emp_tasks = JSON.stringify(items);
            fs.writeFileSync("taskList.json", emp_tasks);
        } else if (req.url == "/display") { 
            
            res.write(TaskTable);
            
            for (let i = 0; i < items.length; i++) {
                let trow = `
                    <tr>
                        <td>${items[i].emp_id}</td>
                        <td>${items[i].task_id}</td>
                        <td>${items[i].task}</td>
                        <td>${items[i].deadline}</td>
                    </tr>
                `
                res.write(trow);
            }
            res.write(OptionTable);
        }
    }
    res.end();
});

server.listen(port, ()=>console.log(`server running on port ${port}`));