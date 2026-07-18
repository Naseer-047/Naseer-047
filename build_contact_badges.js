import fs from 'fs';

// Read the custom logo and convert to base64
const logoBuffer = fs.readFileSync('assets/np-logo-custom.webp');
const base64Logo = 'data:image/webp;base64,' + logoBuffer.toString('base64');

const style = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&amp;display=swap');
  
  .btn {
    stroke-width: 1;
    rx: 6;
    ry: 6;
  }
  
  .text-mono {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    font-weight: 700;
    fill: #ffffff;
  }
  
  .text-dark {
    fill: #0d1117;
  }

  .icon {
    fill: #ffffff;
  }
`;

function createBadge(filename, className, fill, stroke, iconSvg, text, textX, textClass, hasLogo = false) {
  const content = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 40" width="160" height="40">
  <defs>
    <style>
      ${style}
      .${className} { fill: ${fill}; stroke: ${stroke}; }
    </style>
  </defs>

  <rect x="2" y="2" width="156" height="36" class="btn ${className}" />
  
  ${hasLogo ? `<image href="${base64Logo}" x="12" y="6" width="28" height="28" />` : ''}
  ${iconSvg}
  
  <text x="${textX}" y="25" class="text-mono ${textClass}">${text}</text>
</svg>`;

  fs.writeFileSync(filename, content.trim());
  console.log(`Generated ${filename}`);
}

// 1. Portfolio Badge
createBadge(
  'assets/badge-portfolio.svg',
  'btn-portfolio',
  '#ffffff',
  '#e5e7eb',
  '',
  'PORTFOLIO',
  '55',
  'text-dark',
  true
);

// 2. LinkedIn Badge
createBadge(
  'assets/badge-linkedin.svg',
  'btn-linkedin',
  '#0A66C2',
  '#0A66C2',
  '<path d="M42 28h-4V16h4v12zm-2-13.4c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4zm16 13.4h-4v-6.3c0-1.5-.6-2.5-1.9-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.5-.1.8v6.6h-4s.1-10.9 0-12h4v1.7c.5-.8 1.5-2 3.6-2 2.6 0 4.6 1.7 4.6 5.4v6.9z" class="icon" />',
  'LINKEDIN',
  '65',
  '',
  false
);

// 3. Email Badge
createBadge(
  'assets/badge-email.svg',
  'btn-email',
  '#EA4335',
  '#EA4335',
  '<path d="M42 25l12-8-12-5v5l8 2-8 2v4z" class="icon" />',
  'EMAIL',
  '62',
  '',
  false
);

// 4. Location Badge
createBadge(
  'assets/badge-location.svg',
  'btn-location',
  '#10B981',
  '#10B981',
  '<path d="M42 16c0-3.3 2.7-6 6-6s6 2.7 6 6c0 4.5-6 10-6 10s-6-5.5-6-10zm6-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" class="icon" />',
  'BASED IN',
  '60',
  '',
  false
);

console.log('All individual contact badges generated successfully.');
