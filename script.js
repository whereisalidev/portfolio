const texts = ["Backend Developer", "Python Developer", "API Developer", "Django Developer"];
let index = 0;
let charIndex = 0;
const typingSpeed = 100; // Adjust typing speed
const erasingSpeed = 50; // Adjust erasing speed
const delayBetweenTexts = 2000; // Delay before switching to next text
const typewriterElement = document.getElementById("typewriter");

function type() {
    if (charIndex < texts[index].length) {
        typewriterElement.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenTexts);
    }
}

function erase() {
    if (charIndex > 0) {
        typewriterElement.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});
