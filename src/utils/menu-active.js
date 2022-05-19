let menuActive = function(){
    // Grabbing menu items
    const upcomingMenu = document.getElementById('upcoming-menu');
    let groupItems = document.querySelectorAll('.group-menu-item');
    // Setting default active
    upcomingMenu.style.backgroundColor = 'var(--olive)';
    upcomingMenu.style.color = 'var(--white)';
    // Active items background color add
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
            let sectionTitle = document.getElementById('section-title');
            sectionTitle.innerText = item.innerText;
        });
    });
}

export default menuActive;