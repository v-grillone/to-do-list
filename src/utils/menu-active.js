let menuActive = function(){
    // Grabbing menu items
    const upcomingMenu = document.getElementById('upcoming-menu');
    const todayMenu = document.getElementById('today-menu');
    let groupItems = document.querySelectorAll('.group-menu-item');
    // Setting default active
    upcomingMenu.style.backgroundColor = 'var(--olive)';
    upcomingMenu.style.color = 'var(--white)';
    // Adding event listeners and functionality to menu items
    // upcoming
    upcomingMenu.addEventListener('click', () =>{
        upcomingMenu.style.backgroundColor = 'var(--olive)';
        upcomingMenu.style.color = 'var(--white)';
        todayMenu.style.backgroundColor = '';
        todayMenu.style.color = 'var(--onyx)';
        groupItems.forEach(item => {
            item.style.backgroundColor = '';
            item.style.color = 'var(--onyx)';
        });
        // adding functionality to reminders section
        let sectionTitle = document.getElementById('section-title');
        sectionTitle.innerText = 'Upcoming';
    });
    // taday
    todayMenu.addEventListener('click', () =>{
        todayMenu.style.backgroundColor = 'var(--olive)';
        todayMenu.style.color = 'var(--white)';
        upcomingMenu.style.backgroundColor = '';
        upcomingMenu.style.color = 'var(--onyx)';
        groupItems.forEach(item => {
            item.style.backgroundColor = '';
            item.style.color = 'var(--onyx)';
        });
        // adding functionality to reminders section
        let sectionTitle = document.getElementById('section-title');
        sectionTitle.innerText = 'Today';
    });
    // group
    groupItems.forEach(item => {
        item.addEventListener('click', () =>{
            groupItems.forEach(item => {
                if(item.style.backgroundColor == 'var(--olive)'){
                    item.style.backgroundColor = '';
                    item.style.color = 'var(--onyx)';
                };
            });
            item.style.backgroundColor = 'var(--olive)';
            item.style.color = 'var(--white)';
            todayMenu.style.backgroundColor = '';
            todayMenu.style.color = 'var(--onyx)';
            upcomingMenu.style.backgroundColor = '';
            upcomingMenu.style.color = 'var(--onyx)';
            // Adding functionality on click
            let sectionTitle = document.getElementById('section-title');
            sectionTitle.innerText = item.innerText;
        });
    });
}

export default menuActive;