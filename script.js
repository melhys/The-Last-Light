document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation items in the sidebar
    const navItems = document.querySelectorAll('.nav-item');

    // Add click event listener to each nav item
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove 'active' class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add 'active' class to the clicked item
            this.classList.add('active');

            // Note: If you were building a full single-page app (SPA), 
            // this is where you would write logic to load the specific content 
            // for the clicked tab (e.g., fetch data for 'Skills' or 'Story').
        });
    });
});