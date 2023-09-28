document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add-task");
    const pendingTasksList = document.getElementById("pending-tasks");
    const completedTasksList = document.getElementById("completed-tasks");

    // Add a new task
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="complete-button">Complete</button>
                <button class="delete-button">Delete</button>
            `;

            // Add event listeners for complete and delete buttons
            const completeButton = listItem.querySelector(".complete-button");
            const deleteButton = listItem.querySelector(".delete-button");

            completeButton.addEventListener("click", function () {
                listItem.classList.toggle("complete");
                completedTasksList.appendChild(listItem);
                completeButton.textContent = "Undo";
            });

            deleteButton.addEventListener("click", function () {
                listItem.remove();
            });

            pendingTasksList.appendChild(listItem);
            taskInput.value = "";
        }
    });
});
