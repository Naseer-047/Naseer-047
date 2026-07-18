import { Jimp } from 'jimp';
import fs from 'fs';

async function generatePerfectSvg() {
  try {
    const image = await Jimp.read('assets/me.png');
    
    // The dashed box in the SVG is from x=20 to x=260 (width 240) 
    // and y=20 to y=230 (height 210).
    // We will resize/crop the image to exactly 240x210.
    image.cover({ w: 240, h: 210 });
    
    // Save as JPG for compression
    await image.write('assets/me_perfect.jpg');
    
    const buffer = fs.readFileSync('assets/me_perfect.jpg');
    const base64 = buffer.toString('base64');
    const dataUri = `data:image/jpeg;base64,${base64}`;
    
    let svg = fs.readFileSync('assets/retro-header.svg', 'utf8');
    
    // The replacement block for the entire right section inside the dashed borders
    const replacement = `
    <!-- Perfect Holographic Generation Animation -->
    <defs>
      <!-- Neon Green Tint Filter -->
      <filter id="neon-tint">
        <feColorMatrix type="matrix" values="
          0.639 0 0 0 0
          0.902 0 0 0 0
          0.208 0 0 0 0
          0 0 0 1 0" />
      </filter>
      
      <!-- Scan Mask -->
      <clipPath id="scan-mask">
        <rect x="20" y="20" width="240" height="0">
          <animate attributeName="height" values="0;210;210;210;0" keyTimes="0;0.5;0.8;0.9;1" dur="4s" repeatCount="indefinite" />
        </rect>
      </clipPath>
    </defs>
    
    <g>
      <!-- Base faint wireframe/scanlines background for the box -->
      <rect x="20" y="20" width="240" height="210" fill="url(#grid)" opacity="0.1" />
      
      <!-- The Photo itself, tinted neon green and clipped by the animating mask -->
      <image href="${dataUri}" x="20" y="20" width="240" height="210" preserveAspectRatio="xMidYMid slice" filter="url(#neon-tint)" clip-path="url(#scan-mask)" opacity="0.9"/>
      
      <!-- The Laser Scanning Line that follows the mask -->
      <line x1="20" y1="20" x2="260" y2="20" stroke="var(--accent)" stroke-width="2" opacity="0.8">
        <animate attributeName="y1" values="20;230;230;230;20" keyTimes="0;0.5;0.8;0.9;1" dur="4s" repeatCount="indefinite" />
        <animate attributeName="y2" values="20;230;230;230;20" keyTimes="0;0.5;0.8;0.9;1" dur="4s" repeatCount="indefinite" />
      </line>
      
      <!-- Glowing scanning beam block -->
      <rect x="20" y="20" width="240" height="40" fill="var(--accent)" opacity="0.15">
        <animate attributeName="y" values="-20;190;190;190;-20" keyTimes="0;0.5;0.8;0.9;1" dur="4s" repeatCount="indefinite" />
      </rect>
    </g>
`;

    // We need to remove the High Resolution Clear ASCII Portrait OR whatever is there.
    // We will just find the Decorative moon surface and insert right before it.
    // First, let's strip out any old blocks.
    svg = svg.replace(/<!-- High Resolution Clear ASCII Portrait[\s\S]*?<\/g>\s+/, '');
    svg = svg.replace(/<!-- Photo Generation Animation -->[\s\S]*?<\/g>\s+/, '');
    
    // Insert new block before Decorative moon surface
    const insertIdx = svg.indexOf('<!-- Decorative moon surface -->');
    if (insertIdx > -1) {
      svg = svg.substring(0, insertIdx) + replacement + '\n    ' + svg.substring(insertIdx);
      fs.writeFileSync('assets/retro-header.svg', svg);
      console.log('Successfully generated perfect photo animation!');
    } else {
      console.log('Failed to find insertion point.');
    }
    
  } catch (err) {
    console.error(err);
  }
}

generatePerfectSvg();
