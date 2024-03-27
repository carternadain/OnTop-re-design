// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll events and trigger animations
  function handleScroll() {
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('fade-in');
      }
    });
  }
  
  // Attach scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Initial check when the page loads
  handleScroll();
  
  