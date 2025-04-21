
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log("Project page DOM loaded");

  let readMoreButton = document.querySelector('.read-more-btn');
  let content = document.querySelector('.read-more-content');
  let originalButtonParent = readMoreButton.parentElement;
  let buttonMoved = false;
  const container = document.getElementById('works')
  
  
  readMoreButton.addEventListener('click', function() {
  
    content.classList.toggle('show');
    
    if (!buttonMoved) {
      content.appendChild(readMoreButton);
      buttonMoved = true;
    }
    
    if (content.classList.contains('show')) {
      readMoreButton.textContent = "🙈 Show less";
    } else {
      readMoreButton.textContent = "😊 Keep reading";
      
  
      if (buttonMoved) {
        originalButtonParent.appendChild(readMoreButton);
        content.after(readMoreButton);
      }
    }
  })

  // Segment control functionality
  const projectListContainer = document.getElementById('works');
  const resumeContainer = document.getElementById('resume');
  
  // Add event listeners to segment control
  const segmentInputs = document.querySelectorAll('input[name="segment"]');
  segmentInputs.forEach(input => {
    input.addEventListener('change', function() {
      if (this.value === 'option1') {
        // Show projects
        projectListContainer.style.display = 'block';
        resumeContainer.style.display = 'none';
      } else {
        // Show resume
        projectListContainer.style.display = 'none';
        resumeContainer.style.display = 'block';
      }
    });
  });

  // Clear any existing project items
  const projectListElement = document.getElementById('project-list');
  if (projectListElement) {
    projectListElement.innerHTML = '';
  }

  
  // create project and render in html
  
  projectList.forEach(project => {
    const link = document.createElement('a')
    const workItem = document.createElement('div');
    workItem.className = 'work-item'

    // create a link
    if (project.file) {
      link.href = `${project.file}?id=${encodeURIComponent(project.id)}`
      link.target = "_"
      } else {
      link.href = "#"
    }
  
    const idSpan = document.createElement('span')
    idSpan.className = "projectId"
    idSpan.textContent = project.id
  
    const titleSpan = document.createElement('span')
    titleSpan.className = "projectTitle"
    titleSpan.textContent = project.title
  
    link.appendChild(idSpan)
    link.appendChild(titleSpan)
    
    // Add the class and data attribute to the link
    link.className = "projectLink";
    link.setAttribute('data-project', project.id);
    
    // Append link to workItem
    workItem.appendChild(link);
    
    // Append workItem to the appropriate container
    if (projectListElement) {
      projectListElement.appendChild(workItem);
    } else {
      container.appendChild(workItem);
    }
  })



});
