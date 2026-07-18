import fs from 'fs';

const width = 450;
const height = 180;

const style = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&amp;display=swap');
  
  :root {
    --bg: #ffffff;
    --text-main: #0f172a;
    --text-muted: #64748b;
    --accent: #2563eb;
    --accent-blue: #3b82f6;
    --accent-purple: #8b5cf6;
    --border-color: #cbd5e1;
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #0d1117;
      --text-main: #c9d1d9;
      --text-muted: #8b949e;
      --accent: #58a6ff;
      --accent-blue: #79c0ff;
      --accent-purple: #d2a8ff;
      --border-color: #30363d;
    }
  }

  .bg { fill: var(--bg); transition: fill 0.3s; }
  .mono { font-family: 'JetBrains Mono', monospace; }
  .text-main { fill: var(--text-main); }
  .text-muted { fill: var(--text-muted); }
  .text-accent { fill: var(--accent); }
  
  .border { 
    stroke: var(--border-color); 
    stroke-width: 1; 
    stroke-dasharray: 4 4; 
    fill: none; 
  }
  
  .tag { 
    fill: transparent; 
    stroke: var(--border-color); 
    stroke-width: 1; 
    rx: 4; 
  }
  
  .tag-text { 
    fill: var(--text-muted); 
    font-size: 10px; 
  }
`;

function createCard(title, desc, tags, stars, forks, iconSvg, filename) {
  let tagsSvg = '';
  let currentX = 25;
  tags.forEach(tag => {
    // approx width based on char count
    const tagWidth = tag.length * 7 + 10;
    tagsSvg += `
      <rect x="${currentX}" y="115" width="${tagWidth}" height="20" class="tag" />
      <text x="${currentX + 5}" y="129" class="mono tag-text">${tag}</text>
    `;
    currentX += tagWidth + 10;
  });

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs><style>${style}</style></defs>
  <rect width="100%" height="100%" class="bg" rx="8" />
  
  <!-- Dashed Border -->
  <rect x="5" y="5" width="${width - 10}" height="${height - 10}" rx="6" class="border" />
  
  <!-- Icon -->
  <g transform="translate(25, 20)">
    ${iconSvg}
  </g>
  
  <!-- Title -->
  <text x="25" y="75" font-size="14" font-weight="700" class="mono text-accent">${title}</text>
  
  <!-- Description -->
  <text x="25" y="95" font-size="12" class="mono text-muted">
    ${desc.map((line, i) => `<tspan x="25" dy="${i === 0 ? 0 : 16}">${line}</tspan>`).join('')}
  </text>
  
  <!-- Tags -->
  <g>
    ${tagsSvg}
  </g>
  
  <!-- Stats -->
  <g transform="translate(25, 155)">
    <!-- Star -->
    <path d="M8 2l1.83 3.71 4.09.59-2.96 2.89.7 4.08-3.66-1.92L4.34 13.27l.7-4.08-2.96-2.89 4.09-.59L8 2z" fill="none" stroke="var(--text-muted)" stroke-width="1.5"/>
    <text x="20" y="10" font-size="12" class="mono text-muted">${stars}</text>
    
    <!-- Fork -->
    <path d="M48 2c-1.1 0-2 .9-2 2v2.59l3 3V12h-2v2h6v-2h-2V9.59l3-3V4c0-1.1-.9-2-2-2z" fill="none" stroke="var(--text-muted)" stroke-width="1.5" transform="scale(0.8) translate(50, 0)"/>
    <text x="65" y="10" font-size="12" class="mono text-muted">${forks}</text>
  </g>
</svg>`;
  fs.writeFileSync(filename, svg.trim());
}

// 1. CNS
createCard(
  "CNS - Cloud Nexus Stream",
  ["Personal media cloud platform", "for seamless streaming, sync", "and sharing."],
  ["MERN", "Socket.io", "FFmpeg", "Docker"],
  "120", "32",
  `<path d="M18.8 9.2C18.4 5.6 15.5 3 12 3 9.4 3 7 4.6 6 6.9 2.6 7.4 0 10.4 0 14c0 3.9 3.1 7 7 7h11c3.9 0 7-3.1 7-7 0-3.6-2.8-6.6-6.2-6.8z" fill="none" stroke="var(--accent-blue)" stroke-width="2"/>`,
  "assets/project-cns.svg"
);

// 2. GCC
createCard(
  "GCC Developer OS",
  ["Developer ecosystem platform", "for my college coding club."],
  ["MERN", "Redis", "BullMQ", "AI"],
  "85", "21",
  `<rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="var(--accent)" stroke-width="2"/><path d="M6 10l3 3-3 3M12 16h6" fill="none" stroke="var(--accent)" stroke-width="2"/>`,
  "assets/project-gcc.svg"
);

// 3. Smart Study
createCard(
  "Smart Study Buddy",
  ["AI powered study companion", "for students."],
  ["React Native", "Node.js", "MongoDB"],
  "63", "18",
  `<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2V3zm20 0h-6a4 4 0 00-4 4v14a3 3 0 013-3h6V3z" fill="none" stroke="var(--accent-purple)" stroke-width="2"/>`,
  "assets/project-smart.svg"
);

// 4. Resume
createCard(
  "AI Resume Analyzer",
  ["Analyze resumes and get AI", "powered suggestions."],
  ["Next.js", "Groq API", "TailwindCSS"],
  "47", "11",
  `<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zm-7 8h8m-8 4h8" fill="none" stroke="var(--text-main)" stroke-width="2"/>`,
  "assets/project-resume.svg"
);

console.log('Project cards generated successfully with dynamic light/dark themes!');
