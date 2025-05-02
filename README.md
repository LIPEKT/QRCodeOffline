# QR Code Offline Firefox Add-on

This is a Firefox add-on that generates QR codes from the current website or custom text input, and works offline. It does not require an internet connection once installed.

## Table of Contents
0. [File Structure](#file-structure)
1. [Usage Instructions](#usage-instructions)
2. [Requirements](#requirements)

---

## File Structure

QRCodeOffline/
├── manifest.json
├── background/
│   └── background.js
├── popup/
│   ├── popup.html
│   ├── popup.js
│   └── popup.css
├── icons/
│   ├── icon-16.png
│   ├── icon-48.png
│   └── icon-96.png
├── lib/
│   └── qrcode.min.js
├── assets/
│   └── logo.png
└── README.md

Note: This can also be directly downloaded from my public [GitHub repository](https://github.com/LIPEKT/QRCodeOffline).

---

## Usage Instructions

### 1. Clone or Download the Repository
Clone the repository or download the source code to your local machine.

### 2. Verify the Code
Ensure all source files are present in the project:
- `manifest.json`
- `background/`
- `popup/`
- `icons/`
- `lib/qrcode.min.js`
- `assets/logo.png`

Note: **qrcode.min.js** is included directly from [QRCode.js GitHub repository](https://github.com/davidshimjs/qrcodejs/blob/master/qrcode.min.js).

---

## Requirements

- **Operating System**: Any one is fine (as long as it can run a browser.)
- **Browser**: Firefox (latest stable version) and Microsoft Edge (also last stable version)

No additional dependencies are required.
