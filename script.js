
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
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
  
  // Animate the selected works section
  const selectedWorks = document.getElementById('selected-works');
  setTimeout(() => {
    selectedWorks.style.opacity = '1';
    selectedWorks.style.transform = 'translateX(0)';
  }, 1000); // Start after introduction animation has begun

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

  // Mouse glow effect - Enhanced version similar to helloshivam.com
  const mainContainer = document.querySelector('.main-container');
  const glowEffect = document.createElement('div');
  glowEffect.classList.add('glow-effect');
  mainContainer.appendChild(glowEffect);

  // Trail elements array
  const trailElements = [];
  const trailCount = 3; // Fewer trail elements for a cleaner look
  
  // Create trail elements
  for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    trail.style.opacity = 0.6 - (i * 0.2); // Decrease opacity for each trail element
    trail.style.transform = 'scale(' + (1 - (i * 0.15)) + ')'; // Decrease size for each trail element
    mainContainer.appendChild(trail);
    trailElements.push({
      element: trail,
      x: 0,
      y: 0
    });
  }

  // Mouse move handler with improved detection for middle content
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportCenter = viewportWidth / 2;
    const centerMargin = viewportWidth * 0.25; // 25% margin from center
    
    // Check if mouse is in the middle section of the page
    const isMiddleSection = mouseX > (viewportCenter - centerMargin) && 
                          mouseX < (viewportCenter + centerMargin);
    
    // Check if mouse is over any text or important element
    const elements = document.elementsFromPoint(mouseX, mouseY);
    const isOverText = elements.some(el => {
      // Check if element is text or contains important text
      return el.tagName === 'SPAN' || 
             el.classList.contains('work-id') || 
             el.classList.contains('work-title') ||
             el.classList.contains('tab') ||
             el.classList.contains('tab-active') ||
             el.id === 'introduction' ||
             el.classList.contains('introduction') ||
             el.classList.contains('content');
    });
    
    // Update main glow position - hide in middle section or over text
    if (!isOverText && !isMiddleSection) {
      glowEffect.style.left = `${mouseX}px`;
      glowEffect.style.top = `${mouseY}px`;
      glowEffect.style.opacity = '0.7';
      
      // Add subtle movement to make it more dynamic
      const randomOffsetX = (Math.random() - 0.5) * 10;
      const randomOffsetY = (Math.random() - 0.5) * 10;
      
      // Update trail positions with delay
      setTimeout(() => {
        // Shift old positions
        for (let i = trailElements.length - 1; i > 0; i--) {
          trailElements[i].x = trailElements[i-1].x;
          trailElements[i].y = trailElements[i-1].y;
        }
        
        // Update first trail to current mouse position with slight random offset
        trailElements[0].x = mouseX + randomOffsetX;
        trailElements[0].y = mouseY + randomOffsetY;
        
        // Apply positions to elements
        trailElements.forEach((trail, index) => {
          if (trail.x && trail.y) {
            trail.element.style.left = `${trail.x}px`;
            trail.element.style.top = `${trail.y}px`;
            trail.element.style.opacity = (isOverText || isMiddleSection) ? '0' : (0.6 - (index * 0.2));
          }
        });
      }, 60); // Slightly longer delay for smoother effect
    } else {
      // Hide glow and trails when over text or in middle section
      glowEffect.style.opacity = '0';
      trailElements.forEach(trail => {
        trail.element.style.opacity = '0';
      });
    }
  });

  // Hide glow when mouse leaves the window
  document.addEventListener('mouseleave', () => {
    glowEffect.style.opacity = '0';
    trailElements.forEach(trail => {
      trail.element.style.opacity = '0';
    });
  });
});
