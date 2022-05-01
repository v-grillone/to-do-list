let taskAdd = function(){
    let addBtn = document.getElementById('task-add-btn')
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // getting add elements
        let addInput = document.getElementById('task-add-input')
        let inputValue = addInput.value;
        // adding to dom

        // reseting back to original
        let addContainer = document.getElementById('task-add-container')
        addContainer.style.display = 'none';
        addInput.value = '';

        console.log(inputValue);
    })
}

taskAdd();