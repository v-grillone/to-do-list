let groupsDropdown = function(){
    let groupsBtn = document.getElementById('groups-dropdown');
    groupsBtn.addEventListener('click', () => {
        let groupsUl = document.getElementById('group-menu');
        let groupsIcon = document.querySelector('.groups-arrow');
        if(groupsUl.style.display === ''){
            groupsUl.style.display = 'block';
            groupsIcon.classList.remove('fa-chevron-down');
            groupsIcon.classList.add('fa-chevron-up');
        }else{
            groupsUl.style.display = '';
            groupsIcon.classList.remove('fa-chevron-up');
            groupsIcon.classList.add('fa-chevron-down');
        }
    })
}

export default groupsDropdown;