document.addEventListener('DOMContentLoaded', function() {
    console.log("Project page DOM loaded");
    
    // Function to get URL parameters
    function getUrlParameter(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name) || '';
    }
    
    // Function to update project page content using URL parameters
    function updateProjectPageFromUrl() {
      console.log("Updating project page from URL parameters...");
      
      // Get project info from URL parameters
      const projectId = getUrlParameter('id');
      const projectTitle = getUrlParameter('title');
      
      console.log("Retrieved from URL - ID:", projectId, "Title:", projectTitle);
      
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
    
    // Call the update function immediately
    updateProjectPageFromUrl();
});
``











































