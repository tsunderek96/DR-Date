const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const congratsMessage = document.getElementById('congrats');

noButton.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener('click', () => {
    congratsMessage.style.display = 'block';

    // Generate the QR Code for the invitation
    const qrData = 'Welcome to the Valentine’s Invitation! 🎉';
    const qrcode = new QRCode(document.getElementById('
