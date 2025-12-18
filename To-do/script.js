const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

// Load from localStorage if exists.
if (localStorage.getItem("to-dos")) {
  tasks = JSON.parse(localStorage.getItem("to-dos"));
}

// Render UI immediately
displayTasks();

addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task === "") return;

  // 1. Update array
    tasks.push(task);
    
    // 2. Save to localStorage
    localStorage.setItem("to-dos", JSON.stringify(tasks));
    
    // 3. Update UI
    displayTasks();

    taskInput.value = ""; // clear input
});

function displayTasks() {
  taskList.innerHTML = ""; // clear previous UI

  tasks.forEach((task, i) => {
    let li = document.createElement("li");
    li.textContent = task;

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}



// event delegation 
taskList.addEventListener("click", function(event) {
  // Get the clicked element
  const target = event.target;

  // Edit button clicked
  if (target.classList.contains("edit-btn")) {
    // Find index of li
    const i = Array.from(taskList.children).indexOf(target.parentElement);

    const newTask = prompt("Edit task:", tasks[i]);
    tasks[i] = newTask;

    localStorage.setItem("to-dos", JSON.stringify(tasks));
    displayTasks();
  }

  // Delete button clicked
  else if (target.classList.contains("delete-btn")) {
    const i = Array.from(taskList.children).indexOf(target.parentElement);

    tasks.splice(i, 1);
    localStorage.setItem("to-dos", JSON.stringify(tasks));
    displayTasks();
  }
});

