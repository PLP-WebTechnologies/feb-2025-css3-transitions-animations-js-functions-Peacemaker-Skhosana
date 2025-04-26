// Apply saved background color from localStorage on page load
window.onload = function() {
  const savedColor = localStorage.getItem('backgroundColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
}

// Save user's color preference
document.getElementById('saveBtn').addEventListener('click', function() {
  const color = document.getElementById('bgColor').value;
  localStorage.setItem('backgroundColor', color);
  document.body.style.backgroundColor = color;
});

// Animate the button when clicked
const animateBtn = document.getElementById('animateBtn');
animateBtn.addEventListener('click', function() {
  animateBtn.classList.add('bounce');

  // Remove the class after animation completes to allow re-trigger
  setTimeout(() => {
    animateBtn.classList.remove('bounce');
  }, 500); // Match animation duration
});
