const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "task-buttons";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "completeBtn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";

    buttonDiv.appendChild(completeBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(taskSpan);
    li.appendChild(buttonDiv);

    taskList.appendChild(li);

    taskInput.value = "";

    completeBtn.addEventListener("click", function () {
        taskSpan.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

});