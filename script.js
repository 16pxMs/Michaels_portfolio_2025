
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Animate the introduction text
  const introduction = document.getElementById('introduction');
  
  // Set initial state
  introduction.style.opacity = '0';
  introduction.style.transform = 'translateY(20px)';
  
  // Trigger animation
  setTimeout(() => {
    introduction.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    introduction.style.opacity = '1';
    introduction.style.transform = 'translateY(0)';
  }, 300);

  // Add click event for tabs
  const tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // This is just a placeholder for tab functionality
      // You could expand this to show different content based on the tab clicked
      console.log('Tab clicked:', tab.innerText);
    });
  });
});
