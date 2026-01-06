// Array of project files to load (in chronological order - newest first)
const projects = [
	'partstock',       // Sep 2025 - Present
	'stafftrace',      // Nov 2025 - Dec 2025
	'pong',            // May 2025 - Aug 2025
	'irc',             // Mar 2025 - May 2025
	'infrastructure',  // Feb 2025 - Apr 2025
	'raytracer'        // Nov 2024 - Jan 2025
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
