document.addEventListener('DOMContentLoaded', function() {
  console.log("Project page DOM loaded");
  
  // Function to get URL parameters
  function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name) || '';
  }
  
  // Function to find project by ID
  function findProjectById(id) {
    return projectList.find(project => project.id === id) || null;
  }

  // Function to update project page content using URL parameters
  function updateProjectPageFromUrl() {
    console.log("Updating project page from URL parameters...");
    
    const projectId = getUrlParameter('id');
    console.log("Retrieved from URL - ID:", projectId);
  
    // Find the project data using the ID
    const projectData = findProjectById(projectId);
    
    // Get elements to update
    const projectIdElement = document.getElementById('project-id');
    const projectTitleElement = document.getElementById('project-title');
    const readCaseStudyBtn = document.querySelector('.readcasestudyBtn');
    
    if (projectId && projectIdElement) {
      projectIdElement.textContent = projectId;
      console.log("Updated project ID:", projectId);
    } else {
      console.log("Project ID not found or element missing");
    }
    
    // Update project title
    if (projectData && projectData.title && projectTitleElement) {
      projectTitleElement.textContent = projectData.title;
      document.title = projectData.title || 'Project';
      console.log("Updated project title:", projectData.title);
    } else {
      console.log("Project title not found or element missing");
    }
    
  }

  updateProjectPageFromUrl();
});