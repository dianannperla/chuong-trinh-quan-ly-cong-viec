document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const dueDate = document.getElementById('due-date').value;
    addTask(taskName, dueDate);
    this.reset();
});

function addTask(name, date) {
    const taskList = document.querySelector('#task-list ul');
    const li = document.createElement('li');
    li.textContent = `${name} - Hạn chót: ${date}`;
    taskList.appendChild(li);
}