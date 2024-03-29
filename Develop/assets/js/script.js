// Retrieve tasks and nextId from localStorage
renderTaskList(false);
let nextId = JSON.parse(localStorage.getItem("nextId"));
const addTask = document.getElementById("add-task");
const submitTask = document.getElementById("submit-task");
// Todo: create a function to generate a unique task id
function generateTaskId() {

}
// this shows the task-form
addTask.addEventListener("click", function () {
    document.getElementById("task-form").style.display = "block";
});
// this hids the task
submitTask.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("task-form").style.display = "none";
    renderTaskList(true);
});
// Todo: create a function to create a task card
function createTaskCard(task) {
    const container = document.createElement("div")
    const title = document.createElement("p")
    title.innerText = task.title
    container.appendChild(title)
    const description = document.createElement("p")
    description.innerText = task.description
    container.appendChild(description)
    const date = document.createElement("p")
    date.innerText = task.date
    container.appendChild(date)
    const remove = document.createElement("button")
    remove.innerText = "delete"
    container.appendChild(remove)
    return container;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList(isNew) {
    let taskList = JSON.parse(localStorage.getItem("tasks")) || []
    if (isNew) {
        let newTask = {
        title: document.getElementById("title").value,
        date: document.getElementById("date").value,
        description: document.getElementById("description").value,
        status:"to-do"
    }
    // push adds to array. append is adding to the html
    taskList.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    }
    for (let i = 0; i < taskList.length; i++){
        const task = taskList[i];
        const cardEl = createTaskCard(task)
        if (task.status === "to-do") {
            document.getElementById("todo-cards").appendChild(cardEl);
            
        }
    }
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
