import fs from 'fs';

let svg = fs.readFileSync('assets/retro-header.svg', 'utf8');
const base64 = fs.readFileSync('base64_image.txt', 'utf8');

const replacement = `
    <!-- Photo Generation Animation -->
    <defs>
      <clipPath id="scan-clip">
        <rect x="0" y="0" width="140" height="0">
          <animate attributeName="height" values="0;140;140;140;0" keyTimes="0;0.5;0.8;0.9;1" dur="4s" repeatCount="indefinite" />
        </rect>
      </clipPath>
      <filter id="glitch">
        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/>
      </filter>
    </defs>
    
    <g transform="translate(30, 10)">
      <!-- Background grid scanning -->
      <rect x="0" y="0" width="140" height="140" fill="none" stroke="var(--accent)" stroke-width="0.5" opacity="0.2" />
      
      <!-- The Photo -->
      <image href="${base64}" width="140" height="140" clip-path="url(#scan-clip)" opacity="0.9"/>
      
      <!-- Scanning laser line -->
      <line x1="0" y1="0" x2="140" y2="0" stroke="var(--accent)" stroke-width="2" opacity="0.8">
        <animate attributeName="y1" values="0;140;140;140;0" keyTimes="0;0.5;0.8;0.9;1" dur="4s" repeatCount="indefinite" />
        <animate attributeName="y2" values="0;140;140;140;0" keyTimes="0;0.5;0.8;0.9;1" dur="4s" repeatCount="indefinite" />
      </line>
      <rect x="0" y="0" width="140" height="20" fill="var(--accent)" opacity="0.2">
        <animate attributeName="y" values="-20;120;120;120;-20" keyTimes="0;0.5;0.8;0.9;1" dur="4s" repeatCount="indefinite" />
      </rect>
    </g>
`;

const startIndex = svg.indexOf('<!-- ASCII Art Portrait (Animated Glitch) -->');
const endIndex = svg.indexOf('</g>', startIndex) + 4;

if (startIndex > -1 && endIndex > -1) {
  svg = svg.substring(0, startIndex) + replacement + svg.substring(endIndex);
  fs.writeFileSync('assets/retro-header.svg', svg);
  console.log('Successfully updated retro-header.svg with animated base64 photo.');
} else {
  console.error('Could not find ASCII block to replace.');
}
