import fs from 'fs';

const projectSvgTemplate = (title, emoji, desc) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" width="400" height="120">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&amp;display=swap');
      .bg { fill: #121212; stroke: #27272a; stroke-width: 2; rx: 8; }
      .text-green { fill: #a3e635; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: bold; }
      .text-grey { fill: #a1a1aa; font-family: 'JetBrains Mono', monospace; font-size: 13px; }
      .emoji { font-size: 24px; }
    </style>
  </defs>
  <rect x="2" y="2" width="396" height="116" class="bg" />
  <text x="20" y="40" class="emoji">${emoji}</text>
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

const projects = [
  { name: 'project-cns.svg', title: '> CNS Cloud Nexus', emoji: '☁️', desc: ['Personal secure cloud infrastructure', 'built with Node & Docker.'] },
  { name: 'project-gcc.svg', title: '> GCC Developer OS', emoji: '💻', desc: ['A minimal, developer-focused OS', 'environment and tools.'] },
  { name: 'project-smart.svg', title: '> Smart Study Buddy', emoji: '🧠', desc: ['AI-powered learning assistant for', 'students and self-learners.'] },
  { name: 'project-resume.svg', title: '> AI Resume Analyzer', emoji: '📄', desc: ['Automated resume parsing and ATS', 'scoring system using OpenAI.'] }
];

projects.forEach(p => fs.writeFileSync('assets/' + p.name, projectSvgTemplate(p.title, p.emoji, p.desc)));
fs.writeFileSync('assets/timeline.svg', timelineSvg);
fs.writeFileSync('assets/quote-retro.svg', quoteSvg);

console.log('All missing assets generated!');
