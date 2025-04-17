


































document.addEventListener('DOMContentLoaded', function() {
    console.log("Project page DOM loaded");
    
    // Function to update project page content using localStorage
    function updateProjectPageFromStorage() {
      console.log("Updating project page from localStorage...");
      
      // Get project info from localStorage
      const projectId = localStorage.getItem('currentProjectId');
      const projectTitle = localStorage.getItem('currentProjectTitle');
      
      console.log("Retrieved from storage - ID:", projectId, "Title:", projectTitle);
      
      // Get elements to update
      const projectIdElement = document.getElementById('project-id');
      const projectTitleElement = document.getElementById('project-title');
      
      // Update content if data exists
      if (projectId && projectIdElement) {
        projectIdElement.textContent = projectId;
        console.log("Updated project ID:", projectId);
      } else {
        console.log("Project ID not found or element missing");
      }
      
      if (projectTitle && projectTitleElement) {
        projectTitleElement.textContent = projectTitle;
        document.title = projectTitle || 'Project';
        console.log("Updated project title:", projectTitle);
      } else {
        console.log("Project title not found or element missing");
      }
    }
    
    // Navigation elements and other code specific to project pages can go here
    
    // Call the update function immediately
    updateProjectPageFromStorage();
  });

