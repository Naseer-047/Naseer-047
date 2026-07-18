import fs from 'fs';

const projectSvgTemplate = (title, iconPaths, desc, color) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" width="400" height="120">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&amp;display=swap');
      
      .card {
        fill: #09090b;
        stroke: #27272a;
        stroke-width: 1.5;
        rx: 12;
      }
      
      .title {
        fill: #fafafa;
        font-family: 'Outfit', sans-serif;
        font-size: 18px;
        font-weight: 800;
        letter-spacing: 0.5px;
      }
      
      .desc {
        fill: #a1a1aa;
        font-family: 'Outfit', sans-serif;
        font-size: 13px;
        font-weight: 400;
      }

      .icon-bg {
        fill: ${color}20;
        rx: 10;
      }
      
      .icon-path {
        fill: none;
        stroke: ${color};
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      
      /* Subtle CSS Animation */
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-3px); }
        100% { transform: translateY(0px); }
      }
      
      .container {
        cursor: pointer;
      }
      
      .container:hover .card {
        stroke: ${color};
        stroke-width: 2;
        transition: all 0.3s ease;
      }
      
      .container:hover .icon-group {
        animation: float 2s ease-in-out infinite;
      }
    </style>
    
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#18181b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#09090b;stop-opacity:1" />
    </linearGradient>

    <!-- Glowing shadow for icon -->
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <g class="container">
    <!-- Background Card -->
    <rect x="2" y="2" width="396" height="116" class="card" fill="url(#grad1)" />
    
    <!-- Icon Box -->
    <rect x="20" y="20" width="45" height="45" class="icon-bg" />
    
    <g class="icon-group" transform="translate(30, 30)" filter="url(#glow)">
      ${iconPaths.map(p => `<path class="icon-path" d="${p}" />`).join('')}
    </g>
    
    <!-- Text -->
    <text x="85" y="40" class="title">${title}</text>
    <text x="85" y="68" class="desc">${desc[0]}</text>
    <text x="85" y="88" class="desc">${desc[1] || ''}</text>
    
    <!-- Bottom Tech Dot -->
    <circle cx="85" cy="104" r="4" fill="${color}" />
    <text x="95" y="108" class="desc" style="font-size: 11px; fill: ${color}">${desc[2] || 'TypeScript'}</text>
  </g>
</svg>
`;

const icons = {
  // Lucide style stroke-based icons (24x24 viewBox)
  cloud: [
    'M17.5 19a9 9 0 1 0-11.8 0',
    'M12 12v9'
  ], // simple cloud, let's use actual lucide cloud paths:
  lucideCloud: [
    'M17.5 19a9 9 0 1 0-11.8 0', // this isn't right, let me use standard feather/lucide paths:
  ],
  server: [
    'M2 4h20v6H2z',
    'M2 14h20v6H2z',
    'M6 7h.01',
    'M6 17h.01'
  ],
  terminal: [
    'M4 17l6-6-6-6',
    'M12 19h8'
  ],
  sparkles: [
    'M9 2L10 6L14 7L10 8L9 12L8 8L4 7L8 6L9 2Z',
    'M17 12L17.5 14L19.5 14.5L17.5 15L17 17L16.5 15L14.5 14.5L16.5 14L17 12Z'
  ],
  code: [
    'M16 18l6-6-6-6',
    'M8 6l-6 6 6 6'
  ]
};

const projects = [
  { name: 'project-cns.svg', title: 'CNS Cloud Nexus', icon: icons.server, desc: ['Personal secure cloud infrastructure', 'built with Node &amp; Docker.', 'Node.js'], color: '#38bdf8' },
  { name: 'project-gcc.svg', title: 'GCC Developer OS', icon: icons.terminal, desc: ['A minimal, developer-focused OS', 'environment and tools.', 'C++'], color: '#a3e635' },
  { name: 'project-smart.svg', title: 'Smart Study Buddy', icon: icons.sparkles, desc: ['AI-powered learning assistant for', 'students and self-learners.', 'Python'], color: '#f472b6' },
  { name: 'project-resume.svg', title: 'AI Resume Analyzer', icon: icons.code, desc: ['Automated resume parsing and ATS', 'scoring system using OpenAI.', 'React'], color: '#fbbf24' }
];

projects.forEach(p => fs.writeFileSync('assets/' + p.name, projectSvgTemplate(p.title, p.icon, p.desc, p.color)));

console.log('All missing assets generated!');
