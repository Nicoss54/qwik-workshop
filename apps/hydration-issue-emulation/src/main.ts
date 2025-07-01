function initializeCounter(containerElement: Document, countId: string, buttonId: string) {
  // Your code here:
  // 1. Get countElement and incrementButton using querySelector on containerElement
  // 2. Initialize count
  // 3. Add click event listener to incrementButton
  // 4. Inside the listener, increment count, update countElement.textContent, and log to console.
}

const DomContentLoaded = () => {
  console.log('Starting simple, non-optimized hydration...');
  // Call initializeCounter for count-one, passing 'document'
  // Call initializeCounter for count-two, passing 'document'
  console.log('Simple hydration completed.');
};

document.addEventListener('DOMContentLoaded', DomContentLoaded);

window.onbeforeunload = () => {
  document.removeEventListener('DOMContentLoaded', DomContentLoaded);
};
