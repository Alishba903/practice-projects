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

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", ()=>{
      const newTask = prompt("Edit task:", tasks[i]);

      if(newTask !== null && newTask.trim() !== ""){
        tasks[i] = newTask;
        displayTasks();
      }
    })

    deleteBtn.addEventListener("click", () => {
      tasks.splice(i, 1);
      displayTasks();
    });

    taskList.appendChild(li);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
  }
}
