import fs from 'fs';
import { Jimp, JimpMime } from 'jimp';

async function run() {
  const image = await Jimp.read('assets/me.png');
  image.resize({ w: 400 });
  const buffer = await image.getBuffer(JimpMime.jpeg, { quality: 80 });
  const base64 = 'data:image/jpeg;base64,' + buffer.toString('base64');
  
  let matrixLayers = '';
  const safeChars = '0101#*!%@$=+-|:';
  for(let layer=1; layer<=4; layer++) {
    let asciiGrid = '';
    for(let row=0; row<35; row++) {
      let rowStr = '';
      for(let col=0; col<35; col++) {
        rowStr += safeChars.charAt(Math.floor(Math.random() * safeChars.length)) + ' ';
      }
      asciiGrid += `<text x="0" y="${row * 12 + 10}" font-size="10" class="mono text-green">${rowStr}</text>\n`;
    }
    matrixLayers += `<g class="matrix-layer matrix-layer-${layer}">${asciiGrid}</g>\n`;
  }
  
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&amp;display=swap');
      
      :root {
        --bg: #0a0a0a;
        --accent: #a3e635;
        --border: #27272a;
      }
      
      .bg { fill: var(--bg); }
      .mono { font-family: 'JetBrains Mono', monospace; }
      .text-green { fill: var(--accent); }
      
      @keyframes decode1 { 0%, 10% { opacity: 1; } 11%, 100% { opacity: 0; } }
      @keyframes decode2 { 0%, 10% { opacity: 0; } 11%, 20% { opacity: 1; } 21%, 100% { opacity: 0; } }
      @keyframes decode3 { 0%, 20% { opacity: 0; } 21%, 30% { opacity: 1; } 31%, 100% { opacity: 0; } }
      @keyframes decode4 { 0%, 30% { opacity: 0; } 31%, 40% { opacity: 1; } 41%, 100% { opacity: 0; } }
      @keyframes revealImage { 
        0%, 30% { opacity: 0; }
        35%, 90% { opacity: 1; }
        95%, 100% { opacity: 0; }
      }
      
      .matrix-layer-1 { animation: decode1 8s infinite; }
      .matrix-layer-2 { animation: decode2 8s infinite; }
      .matrix-layer-3 { animation: decode3 8s infinite; }
      .matrix-layer-4 { animation: decode4 8s infinite; }
      .profile-image { animation: revealImage 8s infinite; }
    </style>
    
    <clipPath id="circle-clip-dark">
      <circle cx="200" cy="200" r="190" />
    </clipPath>
  </defs>

  <rect width="100%" height="100%" class="bg" />

  <circle cx="200" cy="200" r="192" fill="none" stroke="var(--border)" stroke-width="4" />
  <circle cx="200" cy="200" r="192" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="15 10">
    <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="10s" repeatCount="indefinite" />
  </circle>
  
  <g clip-path="url(#circle-clip-dark)">
    ${matrixLayers}
    <image xlink:href="${base64}" href="${base64}" x="10" y="10" width="380" height="380" preserveAspectRatio="xMidYMid slice" class="profile-image" />
  </g>
</svg>
`;

  fs.writeFileSync('assets/matrix_avatar.svg', svg);
  console.log('Avatar SVG generated');
}
run();
