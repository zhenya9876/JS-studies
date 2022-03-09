class ToDoTask {
    static _id = 0;
    constructor(isChecked, content, props) {
        this.id = ToDoTask._id++;
        this.isChecked = isChecked;
        this.content = content;
        this.removeTask = props.remove;

        this.element = null;
    }
    createTask () {
        let newTaskContainer = document.createElement("li");
        newTaskContainer.className = "task-container";

        let newCheckBox = document.createElement("input");
        newCheckBox.type = "checkbox";
        newCheckBox.onchange = this.onTaskCheck.bind(this);
        newCheckBox.checked = this.isChecked;

        let newTaskSpan = document.createElement("span");
        newTaskSpan.classList.add("task");
        if (this.isChecked) newTaskSpan.classList.add("task-checked");
        newTaskSpan.textContent = this.content;


        let newDeleteBtn = document.createElement("button");
        newDeleteBtn.classList.add("delete-btn");
        newDeleteBtn.onclick = this.onTaskRemove.bind(this);

        newTaskContainer.appendChild(newCheckBox);
        newTaskContainer.appendChild(newTaskSpan);
        newTaskContainer.appendChild(newDeleteBtn);

        this.element = newTaskContainer;
    }
    onTaskCheck () {
        this.isChecked = !this.isChecked;
        this.element.getElementsByClassName("task")[0].classList.toggle("task-checked");
        setTimeout(saveTasks, 30);
    }
    onTaskRemove() {
        this.removeTask(this.id);
        this.element.remove();
        setTimeout(saveTasks, 30);
    }
}

class ToDoList{
    constructor(container, list) {
        this.element = container;
        this.list = [];
        for (const item of list) {
            const newTodo = new ToDoTask(item[0], item[1], {
                'remove': this.removeTask.bind(this)
            });
            newTodo.createTask();
            this.list.push(newTodo);
            this.element.appendChild(newTodo.element);
        }
    }

    addTask (isChecked, content) {
        const todo = new ToDoTask(isChecked, content, {
            'remove': this.removeTask.bind(this)
        });
        this.list.push(todo);
        todo.createTask();
        this.element.appendChild(todo.element);
        setTimeout(saveTasks, 30);
    }

    removeTask (id) {
        this.list = this.list.filter(t => t.id !== id);
    }
}

const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
const taskListEl = document.getElementById('task-list');
let list = new ToDoList(taskListEl, taskList);


let addTaskClick = function () {
    let text = document.getElementById("input-task").value;
    list.addTask(false, text);
    document.getElementById("input-task").value = "";
}

document.getElementById("add-task-button")
    .addEventListener("click", addTaskClick);

// for (let deleteBtn of document.querySelectorAll(".delete-btn")){
//     deleteBtn.addEventListener("mouseup", saveTasks);
// }

// function onTaskRemove(obj){
//     obj.parentNode.remove();
//     setTimeout(saveTasks, 30);
// }

function saveTasks() {
    let checkBoxes = document.getElementById("task-list")
        .querySelectorAll("input");
    let taskTexts = document.getElementById("task-list")
        .querySelectorAll(".task");
    let taskList = [];
    // for (let i = checkBoxes.length - 1; i >= 0; i--) {
        for (let i = 0; i < checkBoxes.length; i++) {
            let currentTaskState = [2];
        currentTaskState[0] = checkBoxes[i].checked;
        currentTaskState[1] = taskTexts[i].textContent;
        taskList.push(currentTaskState);
    }
    console.log(taskList);
    localStorage.setItem("tasks", JSON.stringify(taskList));
}

// document.addEventListener('load', loadTasks);

// function loadTasks() {
//     let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
//     console.log(taskList);
//     for (let task of taskList) {
//         list.addTask(task[0], task[1]);
//     }
// }
// loadTasks();