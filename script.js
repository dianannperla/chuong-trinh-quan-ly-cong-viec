document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const deadline = document.getElementById('due-date').value;
    addTask(taskName, deadline);
    this.reset();
});

function addTask(taskName, deadline) {
    const taskList = document.querySelector('#task-list ul');
    const listItem = document.createElement('li');
    listItem.textContent = `${taskName} - Due: ${deadline}`;
    taskList.appendChild(listItem);
}