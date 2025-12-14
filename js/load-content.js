// Array of project files to load
const projects = [
    'stafftrace',
    'partstock',
    'pong',
    'irc'
];

// Function to load project HTML files
async function loadProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = ''; // Clear loading indicator

    for (const project of projects) {
        try {
            const response = await fetch(`projects/${project}.html`);
            if (!response.ok) throw new Error(`Failed to load ${project}`);
            
            const html = await response.text();
            
            // Create a wrapper div for each project
            const projectDiv = document.createElement('div');
            projectDiv.innerHTML = html;
            container.appendChild(projectDiv);
            
        } catch (error) {
            console.error(`Error loading ${project}:`, error);
            container.innerHTML += `<p class="text-red-400">Error loading project: ${project}</p>`;
        }
    }
}

// Load projects when DOM is ready
document.addEventListener('DOMContentLoaded', loadProjects);
