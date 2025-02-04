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
    // Hide 'No' button when 'Yes' is clicked
    noButton.style.display = 'none';

    // Show the congratulations message
    congratsMessage.style.display = 'block';

    // Generate the QR Code for the invitation
    const qrData = 'Welcome to the Valentine’s Invitation! 🎉';
    const qrcode = new QRCode(document.getElementById('qrcode'), {
        text: qrData,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});

noButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default action for 'no' button
});
