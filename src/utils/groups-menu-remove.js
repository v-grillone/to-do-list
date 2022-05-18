let groupsMenuRemove = function(group){
    // creating list of all tasks groups remaining and removing unused group menu item.
    const tasksRemaining = document.querySelectorAll('.task');
    const groupsRemaining = Array.from(tasksRemaining).map(group => {
        return group.children[1].value;
    });
    if(groupsRemaining.indexOf(group) == -1){
        let groupMenuItems = document.getElementById('group-menu').children;
        let itemsList = Array.from(groupMenuItems).map(item => {
            return item.dataset.group;
        });
        return groupMenuItems[itemsList.indexOf(group)].remove();
    }
}

export default groupsMenuRemove;