let taskDelete = function(){
    deleteBtn = document.querySelectorAll('.fa-trash-can');
    deleteBtn.forEach(element => {
        element.addEventListener('click', () => {
            let task = element.parentElement.parentElement;
            task.remove()
        })      
    });
};

export default taskDelete;