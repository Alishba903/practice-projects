const inputEl = document.getElementById("input-el");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("tasks-list");

addBtn.addEventListener("click", ()=>{
    let inpVal = inputEl.value;
    if(!inpVal){
        taskList.textContent = "The input field is empty!";
    }

    const li = document.createElement("li");
    li.textContent = inpVal;
    li.classList.add("task")
    inputEl.value = "";

    taskList.appendChild(li);

})