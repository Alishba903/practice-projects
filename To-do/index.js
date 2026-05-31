const inputEl = document.getElementById("input-el");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("tasks-list");

let tasks = [];

window.onload = () =>{
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    displayTasks();
}

addBtn.addEventListener("click", ()=>{
    let inpVal = inputEl.value.trim();
    if(!inpVal){
        taskList.textContent = "The input field is empty!";
        return;
    }

    tasks.push(inpVal);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();

})

function displayTasks(){
    taskList.innerHTML = "";
    inputEl.value = "";

    tasks.forEach((task, i)=>{

    const li = document.createElement("li");
    li.textContent = task;
    li.classList.add("task");

    const del = document.createElement("button");
    del.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    del.classList.add("del-btn");

    del.addEventListener("click", ()=> deleteTodo(i))

    li.appendChild(del)
    taskList.appendChild(li);

    })

}

function deleteTodo(index){
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

