import { Jimp } from 'jimp';

async function convertToAscii(imagePath, targetWidth = 40) {
  const chars = ['@', '%', '#', '*', '+', '=', '-', ':', '.', ' '];
  
  try {
    const image = await Jimp.read(imagePath);
    
    // Resize image
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    const aspect = h / w;
    // Monospace height to width ratio is roughly 1.6 - 2.0
    // So if we have width=40, the height should be proportionally smaller
    const targetHeight = Math.floor(targetWidth * aspect * 0.55);
    
    image.resize({ w: targetWidth, h: targetHeight });
    image.greyscale();
    
    let asciiArt = '';
    
    for (let y = 0; y < targetHeight; y++) {
      let row = '';
      for (let x = 0; x < targetWidth; x++) {
        // Get the greyscale value from 0 to 255
        // jimp returns hex rgba, we just need r since it's greyscale
        const hex = image.getPixelColor(x, y);
        const r = (hex >> 24) & 255;
        
        // Map 0-255 to 0-9
        let charIndex = Math.floor(r / 25.6);
        if (charIndex > 9) charIndex = 9;
        
        row += chars[charIndex];
      }
      asciiArt += row + '\n';
    }
    
    console.log(asciiArt);
  } catch (err) {
    console.error('Error:', err);
  }
}

convertToAscii('assets/me.png');
