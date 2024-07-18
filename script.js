document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const dateTimeElement = document.getElementById('date-time');

    function updateDateTime() {
        const now = new Date();
        const formattedDateTime = now.toLocaleString();
        dateTimeElement.textContent = formattedDateTime;
    }

    setInterval(updateDateTime, 1000);

    addTaskBtn.addEventListener('click', () => {
        const newTaskInput = document.getElementById('new-task');
        const taskText = newTaskInput.value.trim();

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task');

            const taskContent = document.createElement('span');
            taskContent.textContent = taskText;

            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Complete';
            completeBtn.classList.add('complete-btn');
            completeBtn.addEventListener('click', () => {
                taskContent.style.textDecoration = 'line-through';
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => {
                taskItem.remove();
            });

            taskItem.appendChild(taskContent);
            taskItem.appendChild(completeBtn);
            taskItem.appendChild(deleteBtn);
            taskList.appendChild(taskItem);

            newTaskInput.value = '';
        }
    });
});
