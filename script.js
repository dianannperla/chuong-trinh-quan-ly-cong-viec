document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const dueDate = document.getElementById('due-date').value;
    addTask(taskName, dueDate);
    this.reset();
});

function addTask(taskName, dueDate) {
    const taskList = document.querySelector('#task-list ul');
    const listItem = document.createElement('li');
    listItem.textContent = `${taskName} - Due: ${dueDate}`;
    taskList.appendChild(listItem);
}