// Get the theme switcher checkbox
const themeSwitcher = document.getElementById('theme-switcher');
  
// Check if there's a saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme or default to light theme
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeSwitcher.checked = true;
}

// Add event listener to the theme switcher
themeSwitcher.addEventListener('change', function() {
  if (this.checked) {
    // Switch to dark mode
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    // Switch to light mode
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});

// Check for system preference if no saved preference
if (!savedTheme) {
  // Check if user prefers dark mode at the OS level
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (prefersDarkMode) {
    document.body.classList.add('dark-mode');
    themeSwitcher.checked = true;
    localStorage.setItem('theme', 'dark');
  }
}


