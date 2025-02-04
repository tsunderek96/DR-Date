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
    noButton.style.display = 'none';
    congratsMessage.style.display = 'block';
    
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ''; // Clear previous content

    // Text to encode in the QR code
    const qrData = "Hi Ms Roxanne Lee, thank you for accepting the kind invitation.";

    // Generate QR code
    new QRCode(qrcodeContainer, {
        text: qrData,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});

noButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default action for 'no' button
});
