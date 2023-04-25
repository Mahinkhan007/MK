const typedTextElement = document.querySelector(".typed-text");
const cursorElement = document.querySelector(".cursor"); // Element for cursor with .cursor class

let index = 0;

function type() {
  if (index < text.length) {
    typedTextElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100); // Adjust typing speed (in milliseconds) as desired
  } else {
    cursorElement.classList.add("blink"); // Add .blink class to show blinking cursor after typing is complete
  }
}

// Check if the section is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Trigger typing animation when the section is in viewport
function triggerTypingAnimation() {
  if (isInViewport(typingAnimation)) {
    type();
    window.removeEventListener("scroll", triggerTypingAnimation);
  }
}

window.addEventListener("scroll", triggerTypingAnimation);
