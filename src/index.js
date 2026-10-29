
document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskDescription = taskInput.value.trim();

    if (taskDescription === "") {
      return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    taskList.appendChild(taskItem);

    taskInput.value = "";
  });
});
