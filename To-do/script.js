const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

addBtn.addEventListener("click", ()=>{
  const task = taskInput.value;
  tasks.push(task);
  taskInput.value = "";

  displayTasks();
});

function displayTasks() {
  taskList.innerHTML = ""; 

  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    li.textContent = tasks[i];

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      tasks.splice(i, 1);
      displayTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }
}
