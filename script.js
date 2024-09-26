const hamburger = document.querySelector('.hamburger');
const hamburgerList = document.querySelector('.hamburgerList');

const readMoreButton = document.getElementById('readMore');
const readMoreContent = document.getElementById('readMoreContent');

// Improved toggle function for reusability and clarity
function toggleElement(element) {
  const currentDisplay = element.style.display;
  element.style.display = currentDisplay === 'none' ? 'block' : 'none';
}

// Attach event listeners using the toggle function
hamburger.addEventListener('click', () => toggleElement(hamburgerList));
readMoreButton.addEventListener('click', () => toggleElement(readMoreContent));
