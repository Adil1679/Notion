let liters = 0;

const addBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');
const counter = document.querySelector('.counter');

addBtn.addEventListener('click', () => {
    liters++;
    updateWaterLevel();
});

removeBtn.addEventListener('click', () => {
    if (liters > 0) {
        liters--;
        updateWaterLevel();
    }
});

function updateWaterLevel() {
    const wave = document.querySelector('.wave');
    wave.style.height = `${liters * 30}px`; // Adjust this value for the desired wave height
    counter.textContent = `${liters} ${liters === 1 ? 'liter' : 'liters'}`;
}
