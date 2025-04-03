
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

  // Add click event for tabs
  const tabs = document.querySelectorAll('.tab');
  const activeTab = document.querySelector('.tab-active');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from currently active tab
      activeTab.classList.remove('tab-active');
      activeTab.classList.add('tab');
      
      // Add active class to clicked tab
      this.classList.remove('tab');
      this.classList.add('tab-active');
      
      console.log('Tab clicked:', tab.innerText);
    });
  });
});
