// animation.js - Contains only the page transition animation

// Page transition animation when clicking on a project
function setupProjectTransitions() {
    // Get all project links
    const projectLinks = document.querySelectorAll('.projectLink');
    
    // Add click event to each project link
    projectLinks.forEach(link => {
      link.addEventListener('click', function(e) {
            // Only handle links that have a file to navigate to
            if (this.getAttribute('href') !== '#') {
            e.preventDefault(); // Prevent immediate navigation
            
            const targetHref = this.getAttribute('href');
            const projectId = this.querySelector('.projectId').textContent;
            const projectTitle = this.querySelector('.projectTitle').textContent;
            
            // Create overlay for transition
            const overlay = document.createElement('div');
            overlay.className = 'page-transition-overlay';
            document.body.appendChild(overlay);
            
            // Add project info to overlay
            const projectInfo = document.createElement('div');
            projectInfo.className = 'project-transition-info';
            projectInfo.innerHTML = `
                <span class="transition-project-id">${projectId}</span>
                <h2 class="transition-project-title">${projectTitle}</h2>
            `;
            overlay.appendChild(projectInfo);
            
            // Animate overlay
            setTimeout(() => {
                overlay.classList.add('active');
            }, 10);
            
            // Navigate to the project page after animation completes
            setTimeout(() => {
                window.location.href = targetHref;
            }, 800);
            }
        })
    })


}

// Get the theme switcher checkbox
const themeSwitcher = document.getElementById('theme-switcher');
  
// Check if there's a saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme or default to light theme
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeSwitcher.checked = true;
}

// Add event listener to the theme switcher
themeSwitcher.addEventListener('change', function() {
  if (this.checked) {
    // Switch to dark mode
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    // Switch to light mode
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});

// Check for system preference if no saved preference
if (!savedTheme) {
  // Check if user prefers dark mode at the OS level
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (prefersDarkMode) {
    document.body.classList.add('dark-mode');
    themeSwitcher.checked = true;
    localStorage.setItem('theme', 'dark');
  }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
 // Only setup transitions on the main page
 if (document.getElementById('works')) {
    setupProjectTransitions();
    }
});


