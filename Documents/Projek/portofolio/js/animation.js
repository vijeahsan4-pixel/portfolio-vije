// Typing effect for hero text
const typingText = document.querySelector('.hero p');

const words = [
  'IT Support',
  'Networking',
  'Web Development'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typingText) return;

  const currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingText.textContent = currentWord.substring(0, charIndex);

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

// Start typing effect
window.addEventListener('load', typeEffect);


// Fade-in animation for sections
const fadeElements = document.querySelectorAll('.section, .card, .about-box');

const fadeIn = () => {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', fadeIn);
window.addEventListener('load', fadeIn);