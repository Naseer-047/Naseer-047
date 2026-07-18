import { Jimp } from 'jimp';
import fs from 'fs';

async function processImage() {
  try {
    const image = await Jimp.read('assets/me.png');
    
    // Resize to a small thumbnail to keep SVG size small (around 150x150)
    image.resize({ w: 140, h: 140 });
    
    // Save as JPEG to get high compression
    await image.write('assets/me_small.jpg');
    
    // Read the file and convert to base64
    const buffer = fs.readFileSync('assets/me_small.jpg');
    const base64 = buffer.toString('base64');
    
    fs.writeFileSync('base64_image.txt', `data:image/jpeg;base64,${base64}`);
    console.log('Successfully created base64 image, length:', base64.length);
  } catch (err) {
    console.error('Error:', err);
  }
}

processImage();
