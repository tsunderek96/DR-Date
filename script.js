const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const congratsMessage = document.getElementById('congrats');

noButton.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener('click', () => {
    congratsMessage.style.display = 'block';
});

noButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default action for 'no' button
});