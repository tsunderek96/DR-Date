document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    const congratsMessage = document.getElementById('congrats');
    const qrcodeContainer = document.getElementById('qrcode');
    const qrCodeContainer = document.getElementById('qr-code');

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
        noButton.style.display = 'none';
        congratsMessage.style.display = 'block';

    noButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default action for 'no' button
    });
});
