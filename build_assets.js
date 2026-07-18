import fs from 'fs';

const projectSvgTemplate = (title, iconPath, desc) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" width="400" height="120">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&amp;display=swap');
      .bg { fill: #0d1117; stroke: #30363d; stroke-width: 1.5; rx: 6; }
      .text-green { fill: #58a6ff; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: bold; }
      .text-grey { fill: #8b949e; font-family: 'JetBrains Mono', monospace; font-size: 13px; }
      .icon { fill: #58a6ff; }
    </style>
  </defs>
  <rect x="2" y="2" width="396" height="116" class="bg" />
  <g transform="translate(20, 25) scale(1.2)">
    <path class="icon" d="${iconPath}" />
  </g>
  <text x="60" y="40" class="text-green">${title}</text>
  <text x="20" y="75" class="text-grey">${desc[0]}</text>
  <text x="20" y="95" class="text-grey">${desc[1] || ''}</text>
</svg>
`;

const timelineSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 150" width="800" height="150">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&amp;display=swap');
      .text-green { fill: #a3e635; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: bold; }
      .text-grey { fill: #a1a1aa; font-family: 'JetBrains Mono', monospace; font-size: 13px; }
      .line { stroke: #27272a; stroke-width: 2; }
      .dot { fill: #121212; stroke: #a3e635; stroke-width: 2; r: 6; }
    </style>
  </defs>
  <line x1="50" y1="75" x2="750" y2="75" class="line" />
  
  <circle cx="100" cy="75" class="dot" />
  <text x="100" y="45" class="text-green" text-anchor="middle">2021</text>
  <text x="100" y="105" class="text-grey" text-anchor="middle">Hello World</text>

  <circle cx="300" cy="75" class="dot" />
  <text x="300" y="45" class="text-green" text-anchor="middle">2023</text>
  <text x="300" y="105" class="text-grey" text-anchor="middle">First Freelance</text>

  <circle cx="500" cy="75" class="dot" />
  <text x="500" y="45" class="text-green" text-anchor="middle">2024</text>
  <text x="500" y="105" class="text-grey" text-anchor="middle">Full Stack Eng</text>

  <circle cx="700" cy="75" class="dot" />
  <text x="700" y="45" class="text-green" text-anchor="middle">Present</text>
  <text x="700" y="105" class="text-grey" text-anchor="middle">Building CNS</text>
</svg>
`;

const quoteSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 120" width="300" height="120">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&amp;display=swap');
      .bg { fill: #121212; stroke: #a3e635; stroke-width: 1; rx: 8; stroke-dasharray: 4 4; }
      .text-green { fill: #a3e635; font-family: 'JetBrains Mono', monospace; font-size: 14px; }
      .text-white { fill: #ffffff; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: bold; }
    </style>
  </defs>
  <rect x="5" y="5" width="290" height="110" class="bg" />
  <text x="20" y="35" class="text-green">/* Quote of the day */</text>
  <text x="20" y="65" class="text-white">"Make it work, make it</text>
  <text x="20" y="90" class="text-white"> right, make it fast."</text>
</svg>
`;

const icons = {
  cloud: 'M17.5 19.125c2.25 0 4.25-1.922 4.25-4.25 0-2.28-1.89-4.14-4.156-4.234A7.476 7.476 0 0 0 10.5 4.5a7.476 7.476 0 0 0-7.094 6.14A4.249 4.249 0 0 0 0 14.875c0 2.328 2 4.25 4.25 4.25h13.25Z',
  terminal: 'M2.5 4h19c.825 0 1.5.675 1.5 1.5v13c0 .825-.675 1.5-1.5 1.5h-19C1.675 20 1 19.325 1 18.5v-13C1 4.675 1.675 4 2.5 4Zm8.375 11.5L5.125 9.75 6.185 8.69l4.69 4.69-4.69 4.69-1.06-1.06 5.75-5.75ZM11 14h6v1.5h-6V14Z',
  brain: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93Zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39Z',
  document: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6Zm2 16H8v-2h8v2Zm0-4H8v-2h8v2Zm-3-5V3.5L18.5 9H13Z'
};

const projects = [
  { name: 'project-cns.svg', title: '> CNS Cloud Nexus', icon: icons.cloud, desc: ['Personal secure cloud infrastructure', 'built with Node &amp; Docker.'] },
  { name: 'project-gcc.svg', title: '> GCC Developer OS', icon: icons.terminal, desc: ['A minimal, developer-focused OS', 'environment and tools.'] },
  { name: 'project-smart.svg', title: '> Smart Study Buddy', icon: icons.brain, desc: ['AI-powered learning assistant for', 'students and self-learners.'] },
  { name: 'project-resume.svg', title: '> AI Resume Analyzer', icon: icons.document, desc: ['Automated resume parsing and ATS', 'scoring system using OpenAI.'] }
];

projects.forEach(p => fs.writeFileSync('assets/' + p.name, projectSvgTemplate(p.title, p.icon, p.desc)));
fs.writeFileSync('assets/timeline.svg', timelineSvg);
fs.writeFileSync('assets/quote-retro.svg', quoteSvg);

console.log('All missing assets generated!');
