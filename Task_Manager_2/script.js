let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask(event) {
    event.preventDefault();

    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const priority = document.getElementById('task-priority').value;

    if (title && priority) {
        const newTask = {
            id: Date.now(),
            title,
            description,
            priority
        };

        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
        clearForm();
    }
}

function clearForm() {
    document.getElementById('task-form').reset();
}

function displayTasks() {
    const taskList = document.getElementById('task-list');
    const priorityFilter = document.getElementById('priority-filter').value;
    
    taskList.innerHTML = '';

    tasks
        .filter(task => {
            return priorityFilter === '' || task.priority === priorityFilter;
        })
        .forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');

            taskDiv.innerHTML = `
                <h2>${task.title} <span style="color: ${getPriorityColor(task.priority)};">(${task.priority})</span></h2>
                <p>${task.description}</p>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            `;

            taskList.appendChild(taskDiv);
        });
}

function getPriorityColor(priority) {
    switch (priority) {
        case 'High':
            return 'red';
        case 'Medium':
            return 'orange';
        case 'Low':
            return 'green';
        default:
            return 'black';
    }
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-description').value = task.description;
    document.getElementById('task-priority').value = task.priority;

    deleteTask(id); // Remove the task before adding the edited version
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

// Event Listeners
document.getElementById('task-form').addEventListener('submit', addTask);
document.getElementById('priority-filter').addEventListener('change', displayTasks);

// Load tasks on page load
window.onload = displayTasks;
