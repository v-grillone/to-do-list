let taskAdd = function(){
    let addBtn = document.getElementById('task-add-btn')
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // getting add elements
        let addInput = document.getElementById('task-add-input')
        let inputValue = addInput.value;
        // adding to dom
        let tasksDiv = document.getElementById('tasks');
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task')
        let taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.value = inputValue;
        taskInput.readOnly = 'true';
        taskInput.maxLength = '40';
        let taskBtn = document.createElement('button');
        let taskDelete = document.createElement('i');
        taskDelete.classList.add('fa-solid');
        taskDelete.classList.add('fa-trash-can');
        taskBtn.appendChild(taskDelete);
        taskDiv.appendChild(taskInput);
        taskDiv.appendChild(taskBtn);
        tasksDiv.appendChild(taskDiv);
        // reseting back to original
        let addContainer = document.getElementById('task-add-container')
        addContainer.style.display = 'none';
        addInput.value = '';


        // to be removed after webkit initialize
        deleteBtn = document.querySelectorAll('.fa-trash-can');
        deleteBtn.forEach(element => {
            element.addEventListener('click', () => {
                let task = element.parentElement.parentElement;
                task.remove()
                })
            });
        })
}

export default taskAdd;