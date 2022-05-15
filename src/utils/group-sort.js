let groupSort = function(filter){
    let allTasks = document.querySelectorAll('.task');
    let filteredTasks = []
    allTasks.forEach(task => {
        // console.log(task.childNodes[3].value);
        if(task.childNodes[3].value == filter){
            filteredTasks.push(task);
        }
    })
    console.log(filteredTasks);
}

export default groupSort;