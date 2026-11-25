function addTask(event) {
    event.preventDefault();
 
    let task = document.getElementById("task").value;
 
    if (task == "") {
        console.log("Please enter a task.");
        return;
    }
 
    let newTask = {
        task: task
    };
    console.log(newTask);
}
 
document.getElementById("taskForm").addEventListener("submit", addTask);
