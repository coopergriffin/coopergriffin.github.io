const body = document.body;

// Define an array of colors you want to cycle through
const colors = ['#fff', '#ffe', '#ffd', '#ffc', '#ffb'];

// Function to update the background color based on scroll position
function updateBackgroundColor() {
  // Calculate the scroll percentage
  const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  
  // Calculate the index of the color based on scroll percentage
  const colorIndex = Math.floor(scrollPercentage *0.2);
  
  // Update the background color
  body.style.backgroundColor = colors[colorIndex];
}

// Attach the updateBackgroundColor function to the window's scroll event
window.addEventListener('scroll', updateBackgroundColor);