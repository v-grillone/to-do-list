import {format} from 'date-fns';

let datesSort = function(){
    let todaysDate = format(new Date(), 'yyyy-MM-dd');
    let tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        if(task.children[2].value == todaysDate){
            task.classList.add('Today');
        }
    })
}

export default datesSort;