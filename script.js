const texts = ["Backend Developer", "Python Developer", "API Developer", "Django Developer"];
let index = 0;
let charIndex = 0;
const typingSpeed = 100; 
const erasingSpeed = 50; 
const delayBetweenTexts = 2000; 
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

document.querySelectorAll('.buttons button').forEach(button => {
	button.addEventListener('click', () => {
		const url = button.getAttribute('data-url');
		window.open(url, '_blank');
	});
});