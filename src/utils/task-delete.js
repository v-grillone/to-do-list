import groupsMenuRemove from './groups-menu-remove.js';

let taskDelete = function(){
    let deleteBtn = document.querySelectorAll('.fa-trash-can');
    deleteBtn.forEach(element => {
        element.addEventListener('click', () => {
            // Removing task from webpage
            let task = element.parentElement.parentElement;
            task.remove()
            let removedTaskGroup = task.children[1].value;
            // removing unused group menu items.
            groupsMenuRemove(removedTaskGroup);
        });      
    });
};

export default taskDelete;