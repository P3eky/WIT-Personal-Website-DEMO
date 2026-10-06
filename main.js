document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('#project-list li');
    const filterContainer = document.getElementById('filter-buttons');
    
    // Track the currently active tag
    let activeFilter = null;

    // 1. Gather all unique tags from the HTML
    const uniqueTags = new Set();
    projects.forEach(project => {
        // Split by comma and trim whitespace
        const tags = project.dataset.tags.split(',').map(tag => tag.trim());
        tags.forEach(tag => uniqueTags.add(tag));
    });

    // 2. Generate the buttons dynamically
    uniqueTags.forEach(tag => {
        const btn = document.createElement('button');
        btn.textContent = tag;
        
        btn.addEventListener('click', () => {
            handleFilterClick(tag, btn);
        });
        
        filterContainer.appendChild(btn);
    });

    // 3. Handle the filtering logic
    function handleFilterClick(tag, clickedBtn) {
        const allButtons = document.querySelectorAll('#filter-buttons button');
        
        // If the clicked tag is already active, deselect it (show all)
        if (activeFilter === tag) {
            activeFilter = null;
            allButtons.forEach(b => b.classList.remove('active'));
            projects.forEach(p => p.classList.remove('hidden'));
            return;
        }

        // Otherwise, set the new active filter
        activeFilter = tag;
        
        // Update button styles
        allButtons.forEach(b => b.classList.remove('active'));
        clickedBtn.classList.add('active');

        // Show/hide projects based on the tag
        projects.forEach(project => {
            const projectTags = project.dataset.tags.split(',').map(t => t.trim());
            if (projectTags.includes(tag)) {
                project.classList.remove('hidden');
            } else {
                project.classList.add('hidden');
            }
        });
    }
});