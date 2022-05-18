let groupSort = function(){
    const groupBtns = document.querySelectorAll('.group-menu-item');
    const tasks = document.querySelectorAll('.task');
    groupBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.dataset.group;
            tasks.forEach(task => {
                if(task.classList.contains(filter)){
                    task.style.display = 'flex';
                }else{
                    task.style.display ='none'
                }
            });
        });
    });
}

export default groupSort;