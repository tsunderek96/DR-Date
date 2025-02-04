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

        // Biometric animation sequence
        const biometricMessage = document.getElementById('biometric-message');
        const biometricConfirmation = document.getElementById('biometric-confirmation');

        setTimeout(() => {
            biometricMessage.classList.add('show');
        }, 500); // Show "Verifying Biometrics..." after 500ms

        setTimeout(() => {
            biometricMessage.classList.remove('show');
            biometricConfirmation.classList.add('show');
        }, 3000); // After 3 seconds, show "Biometrics Confirmed"

        // QR Code Generation
        setTimeout(() => {
            // Make the QR code container visible
            qrCodeContainer.style.visibility = 'visible';

            // Generate the QR code with the final confirmation message
            const qrData = "Thank you for accepting the invitation, Ms. Your attendance has been confirmed, see you there!";

            // Use the QRCode.toCanvas method (new approach)
            QRCode.toCanvas(qrcodeContainer, qrData, {
                width: 200,
                height: 200,
                color: {
                    dark: "#000000", // Dark color
                    light: "#ffffff" // Light color
                }
            }, function(error) {
                if (error) console.error(error);
            });
        }, 3000); // Delay QR code generation until after biometrics confirmation
    });

    noButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default action for 'no' button
    });
});
