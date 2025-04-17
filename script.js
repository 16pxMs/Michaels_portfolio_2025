
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

  let readMoreButton = document.querySelector('.read-more-btn');
  let content = document.querySelector('.read-more-content');
  let originalButtonParent = readMoreButton.parentElement;
  let buttonMoved = false;
  const container = document.getElementById('works')
  
  const projectList = [
    { id: "001", 
      title: "Project1",
      file:"project1.html"
    },
  
    { id: "002", 
      title: "",
      file:""
    },
    
    { id: "003", 
      title: "",
      file:"",
    },
  
    { id: "004", 
      title: "",
      file:"",
    }
        
  ]
  
  
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
    link.target = "_blank"
    link.href = project.file
    
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
  







































  

  // Get introduction element and make it visible
  const introduction = document.getElementById('introduction');
  introduction.style.visibility = 'visible';
  
  // Get all spans in the introduction
  const spans = introduction.querySelectorAll('span');
  
  // Animate each span with a slight delay between them
  spans.forEach((span, index) => {
    // Create slight randomization in the animation
    const randomDelay = Math.random() * 0.3; // Random delay up to 0.3 seconds
    const randomDuration = 0.6 + Math.random() * 0.4; // Random duration between 0.6 and 1 second
    
    span.style.animationName = 'textAppear';
    span.style.animationDuration = `${randomDuration}s`;
    span.style.animationDelay = `${0.1 + index * 0.03 + randomDelay}s`; // Stagger the animations
    span.style.animationFillMode = 'forwards';
    span.style.animationTimingFunction = 'cubic-bezier(0.25, 0.1, 0.25, 1.0)';
  });
  
  

  // Add click event for tabs - Updated for toggle functionality
  const tabs = document.querySelectorAll('.tab');
  const worksContent = document.querySelector('.works-grid');
  const resumeContent = document.querySelector('.resume-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabType = this.getAttribute('data-tab');
      
      // Remove active class from currently active tab
      document.querySelector('.tab-active').classList.remove('tab-active');
      document.querySelector('.tab-active').classList.add('tab');
      
      // Add active class to clicked tab
      this.classList.remove('tab');
      this.classList.add('tab-active');
      
      // Toggle content visibility based on tab
      if (tabType === 'works') {
        worksContent.style.display = 'grid';
        resumeContent.style.display = 'none';
      } else if (tabType === 'resume') {
        worksContent.style.display = 'none';
        resumeContent.style.display = 'block';
      }
      
      console.log('Tab clicked:', this.innerText);
    });
  });


  console.log("DOM fully loaded - Project Page");
  updateProjectPageFromStorage();
  
  
});
