
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
  
  // create project and render in html
  
  projectList.forEach(project => {
    const link = document.createElement('a')

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

    container.append(link)
    link.className = "projectLink"

    
  })


});
