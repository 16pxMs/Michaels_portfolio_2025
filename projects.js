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
    
    // Handle case study button visibility - MOVED INSIDE THE FUNCTION
    if (readCaseStudyBtn) {
      console.log("Case study button found in DOM");
      
      if (projectData && projectData.caseStudy) {
        // If the project has a case study, show the button and set its link
        readCaseStudyBtn.classList.add('has-case-study');
        
        // If the button is an anchor tag (<a>), set its href
        if (readCaseStudyBtn.tagName === 'A') {
          readCaseStudyBtn.href = projectData.caseStudy;
        }
        
        console.log("Case study button enabled for project:", projectId);
      } else {
        // If no case study, ensure button is hidden
        readCaseStudyBtn.classList.remove('has-case-study');
        console.log("No case study available for project:", projectId);
      }
    } else {
      console.log("Case study button element not found in DOM");
    }
  }

  // Call the update function immediately
  updateProjectPageFromUrl();
});