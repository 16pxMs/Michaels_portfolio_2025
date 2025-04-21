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
      });
    });
  }
  
  // Initialize animations
  document.addEventListener('DOMContentLoaded', function() {
    // Only setup transitions on the main page
    if (document.getElementById('works')) {
      setupProjectTransitions();
    }
  });