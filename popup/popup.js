// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', async () => {
  const textInput = document.getElementById('textInput');
  const generateBtn = document.getElementById('generateBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const qrCodeContainer = document.getElementById('qrcode');

  let qrCode;

  function generateQRCode(text) {
    qrCodeContainer.innerHTML = "";
    qrCode = new QRCode(qrCodeContainer, {
      text: text,
      width: 200,
      height: 200,
      useSVG: true
    });
  }

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && tab.url) {
      generateQRCode(tab.url);
      textInput.placeholder = tab.url;
    }
  } catch (error) {
    console.error("Falha ao tentar obter link do site:", error);
  }

  generateBtn.addEventListener('click', () => {
    const text = textInput.value.trim() || textInput.placeholder;
    if (text) {
      generateQRCode(text);
    }
  });

  downloadBtn.addEventListener('click', () => {
    const canvas = qrCodeContainer.querySelector('canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } else {
      alert('QR code indisponível para download!');
    }
  });
});