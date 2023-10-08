let glasses = 0;
const glassHeight = 150; // height of the glass in pixels
const totalGlasses = 8; // change this value to set your daily goal

const glass = document.querySelector('.glass');
const bubbles = document.querySelector('.bubbles');
const progressBar = document.querySelector('.progress');
const counter = document.querySelector('.counter');

const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');

plusBtn.addEventListener('click', () => {
    if (glasses < totalGlasses) {
        glasses++;
        updateWaterLevel();
    }
});

minusBtn.addEventListener('click', () => {
    if (glasses > 0) {
        glasses--;
        updateWaterLevel();
    }
});

function updateWaterLevel() {
    const percentage = (glasses / totalGlasses) * 100;
    const waterHeight = (percentage / 100) * glassHeight;
    glass.style.height = `${waterHeight}px`;
    progressBar.style.width = `${percentage}%`;
    bubbles.style.bottom = `${10 + waterHeight}px`;
    counter.textContent = `${glasses} ${glasses === 1 ? 'glass' : 'glasses'}`;
}
