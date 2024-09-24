document.addEventListener('DOMContentLoaded', () => {
    let taskInput = document.getElementById('taskInput');
    let addTaskBtn = document.getElementById('addTaskBtn');
    let taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        let taskText = taskInput.value;
        if (taskText) {
            let listItem = document.createElement("li");
            listItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <span class="status">Pending</span>
                <button class="completeBtn">Complete</button>
                <button class="deleteBtn">Delete</button>
            `;

            listItem.querySelector('.completeBtn').addEventListener('click', () => {
                let status = listItem.querySelector('.status');
                if (status.textContent === 'Pending') {
                    status.textContent = 'Completed';
                    listItem.querySelector('.task-text').classList.add('completed');
                    listItem.querySelector('.completeBtn').style.display = "none"; // Corrected here
                } else {
                    status.textContent = 'Pending';
                    listItem.querySelector('.task-text').classList.remove('completed');
                }
            });

            listItem.querySelector(".deleteBtn").addEventListener("click", () => {
                taskList.removeChild(listItem);
            });

            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });
});