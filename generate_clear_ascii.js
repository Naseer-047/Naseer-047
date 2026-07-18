import { Jimp } from 'jimp';
import fs from 'fs';

async function generateClearAscii() {
  const chars = [' ', '.', ':', '-', '=', '+', '*', '#', '%', '@'];
  // Reversing the chars if the background is dark. 
  // Wait, if we want the person to be bright green and background black,
  // Dark pixels should be ' ' and bright pixels should be '@'.
  
  try {
    const image = await Jimp.read('assets/me.png');
    
    // We want the width to fit in ~240px. At font-size 4px, width of one mono char is ~2.4px.
    // So 240 / 2.4 = 100 characters.
    const targetWidth = 90;
    
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    const aspect = h / w;
    // Mono font aspect ratio is usually ~2.0 (height is 2x width).
    // So we adjust the height to maintain visual proportions.
    const targetHeight = Math.floor(targetWidth * aspect * 0.5);
    
    image.resize({ w: targetWidth, h: targetHeight });
    image.greyscale();
    
    // Normalize contrast so the face pops out
    image.normalize();
    image.contrast(0.2); // slightly boost contrast

    let svgText = '';
    
    for (let y = 0; y < targetHeight; y++) {
      let row = '';
      for (let x = 0; x < targetWidth; x++) {
        const hex = image.getPixelColor(x, y);
        const r = (hex >> 24) & 255;
        
        // Map 0-255 to 0-9
        let charIndex = Math.floor((r / 255) * 9);
        row += chars[charIndex];
      }
      // Escape XML characters just in case, though these chars don't need it except & < > but we don't have them
      svgText += `      <text y="${y * 4}">${row}</text>\n`;
    }
    
    fs.writeFileSync('clear_ascii.txt', svgText);
    console.log('ASCII generated! Width:', targetWidth, 'Height:', targetHeight);
  } catch (err) {
    console.error(err);
  }
}

generateClearAscii();
