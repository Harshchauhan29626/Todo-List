function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== " ") {
    const taskItem = document.createElement("li");
    taskItem.className = "taskItem";

    const taskText = document.createTextNode(taskInput.value);
    taskItem.appendChild(taskText);

    const editBtn = document.createElement("span");
    editBtn.className = "editBtn";
    editBtn.innerHTML = "Edit"; 
    editBtn.onclick = function () {
      const updatedTask = prompt("Edit task:", taskText.nodeValue);
      if (updatedTask !== null) {
        taskText.nodeValue = updatedTask;
      }
    };

    const deleteBtn = document.createElement("span");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = "Delete";
    deleteBtn.onclick = function () {
      taskList.removeChild(taskItem);
    };

    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);

    taskInput.value = " ";
  }
}