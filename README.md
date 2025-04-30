# QR Code Offline Firefox Add-on

This is a Firefox add-on that generates QR codes from the current website or custom text input, and works offline. It does not require an internet connection once installed.

## Table of Contents
0. [File Structure] (#file-structure)
1. [Build Instructions](#build-instructions)
2. [Requirements](#requirements)
3. [Build Script](#build-script)

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

Note: This can also be directly downloaded from [My public GitHub repository](https://github.com/LIPEKT/QRCodeOffline).

---

## Build Instructions

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

### 3. Set up the Build Environment
Make sure your build environment matches the following:
- **Operating System**: Ubuntu 22.04 (other Linux-based systems should work, but I never tested it to guarantee 100%)
- **No special dependencies** are required, as the source code does not use any build tools such as npm or Webpack. However, make sure `zip` is available/installed to create the package.

### 4. Package the Extension
To package the extension, follow these steps:
1. Open your Terminal in the root directory of the project.
2. Run the following instructions to create a `.zip` file:
    ```bash
    zip -r QRCodeOffline.zip ./* -x "*.git*" -x "*.DS_Store"
    ```
    This will create a `QRCodeOffline.zip` file, excluding unwanted files like `.git` or system files (`.DS_Store`) just in case.

---

## Requirements

- **Operating System**: Ubuntu 22.04 (other Linux-based Ubuntu systems may work)
- **Browser**: Firefox (latest stable version)
- **Tools**:
  - `zip` for packaging the extension. This is typically pre-installed on Ubuntu.

No additional dependencies are required since this is a manual build process. At least I built it this way pretty quickly since I just created the files, and compressed it through the terminal once I got to the /local/where/the/files/are.

---

## Build Script

For easier automation of the build process, you can use the following bash script.

### `build.sh`:

```bash
#!/bin/bash

# Build script for QR Code Offline Firefox Add-on

# Ensure we're in the correct directory
if [ ! -d "QRCodeOffline" ]; then
    echo "Error: QRCodeOffline directory not found!"
    exit 1
fi

cd QRCodeOffline

# Create the zip file excluding git and system files
echo "Packaging the extension..."
zip -r QRCodeOffline.zip ./* -x "*.git*" -x "*.DS_Store"

echo "Extension packaged as QRCodeOffline.zip"

# Done
echo "Build process complete. You can now test the .zip file."
```

Ensure the script has execute permissions:
    chmod +x build.sh

Run the script:
    ./build.sh