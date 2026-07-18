import fs from 'fs';

const width = 920;
const height = 900;
const bg = '#0d1117'; // GitHub dark mode background
const border = '#30363d';
const textMain = '#c9d1d9';
const textMuted = '#8b949e';
const accent = '#A3E635'; // Neon green

let svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap');
      .bg { fill: ${bg}; }
      .text-main { fill: ${textMain}; font-family: 'Inter', sans-serif; }
      .text-muted { fill: ${textMuted}; font-family: 'Inter', sans-serif; }
      .text-accent { fill: ${accent}; font-family: 'Inter', sans-serif; }
      .mono { font-family: 'JetBrains Mono', monospace; }
      .border { stroke: ${border}; stroke-width: 1; fill: none; }
      .card { fill: #161b22; stroke: ${border}; stroke-width: 1; rx: 8; }
    </style>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="15" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  
  <rect width="100%" height="100%" class="bg" rx="10"/>
`;

// BACKGROUND NETWORKING LINES
svg += `
  <g stroke="${accent}" stroke-width="1" opacity="0.2">
    <path d="M 600,0 L 700,100 L 900,100" fill="none"/>
    <path d="M 700,100 L 750,250 L 920,250" fill="none"/>
    <path d="M 500,200 L 600,280 L 700,280" fill="none"/>
    <circle cx="700" cy="100" r="4" fill="${accent}" filter="url(#glow)" opacity="0.8"/>
    <circle cx="900" cy="100" r="2" fill="${accent}"/>
    <circle cx="600" cy="0" r="2" fill="${accent}"/>
    <circle cx="750" cy="250" r="3" fill="${accent}"/>
    <circle cx="600" cy="280" r="2" fill="${accent}"/>
    
    <!-- Concentric radar circles -->
    <circle cx="700" cy="100" r="60" fill="none" stroke="${accent}" opacity="0.1"/>
    <circle cx="700" cy="100" r="120" fill="none" stroke="${accent}" opacity="0.05"/>
  </g>
`;

// HEADER
svg += `
  <text x="40" y="60" font-size="16" class="text-main font-semibold">Hi, I'm</text>
  <text x="40" y="110" font-size="48" font-weight="800" class="text-main">NASEER</text>
  <text x="245" y="110" font-size="48" font-weight="800" class="text-accent">PASHA</text>
  
  <text x="40" y="150" font-size="14" class="text-muted mono">// Building digital products that make an impact.</text>
  
  <!-- Tags -->
  <g transform="translate(40, 180)">
    <rect x="0" y="0" width="180" height="28" rx="4" stroke="${accent}" stroke-width="1" fill="rgba(163, 230, 53, 0.05)"/>
    <text x="90" y="19" font-size="12" font-weight="600" class="text-accent mono" text-anchor="middle">FULL-STACK DEVELOPER</text>
    
    <rect x="195" y="0" width="130" height="28" rx="4" class="border"/>
    <text x="260" y="19" font-size="12" font-weight="500" class="text-muted mono" text-anchor="middle">PROBLEM SOLVER</text>
    
    <rect x="340" y="0" width="140" height="28" rx="4" class="border"/>
    <text x="410" y="19" font-size="12" font-weight="500" class="text-muted mono" text-anchor="middle">LIFELONG LEARNER</text>
  </g>
  
  <!-- Socials -->
  <g transform="translate(40, 230)" opacity="0.8">
    <rect x="0" y="0" width="36" height="36" rx="8" class="border"/>
    <path d="M18 10a8 8 0 00-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3.7 0 1.4.1 2 .3 1.5-1 2.2-.8 2.2-.8.4 1.1.1 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.6v2.4c0 .2.1.5.6.4A8 8 0 0018 10z" fill="${textMain}"/>
    
    <rect x="50" y="0" width="36" height="36" rx="8" class="border"/>
    <path d="M13 14h2v7h-2v-7zm1-3a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zm3 3h2v1h.1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6V21h-2v-3.5c0-1 0-2.1-1.3-2.1-1.3 0-1.5 1-1.5 2V21h-2v-7z" fill="${textMain}"/>
    
    <rect x="100" y="0" width="36" height="36" rx="8" class="border"/>
    <path d="M14 13.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zm2 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill="${textMain}"/>
    
    <rect x="150" y="0" width="36" height="36" rx="8" class="border"/>
    <path d="M10 13l8 5 8-5v8H10v-8zm8 3.8L11.5 12h13L18 16.8z" fill="${textMain}"/>
  </g>
`;

// TERMINAL
svg += `
  <g transform="translate(680, 60)">
    <rect x="0" y="0" width="200" height="130" class="card"/>
    <text x="15" y="25" font-size="12" class="text-accent mono">naseer@dev:~$ <tspan class="text-main">whoami</tspan></text>
    <text x="15" y="55" font-size="12" class="text-accent mono">&gt; <tspan class="text-muted">Code.</tspan></text>
    <text x="15" y="75" font-size="12" class="text-accent mono">&gt; <tspan class="text-muted">Design.</tspan></text>
    <text x="15" y="95" font-size="12" class="text-accent mono">&gt; <tspan class="text-muted">Ship.</tspan></text>
    <text x="15" y="115" font-size="12" class="text-accent mono">&gt; <tspan class="text-muted">Repeat.</tspan></text>
  </g>
`;

// ABOUT ME & TECH STACK
svg += `
  <g transform="translate(40, 320)">
    <circle cx="5" cy="5" r="3" fill="${accent}"/>
    <text x="15" y="10" font-size="14" font-weight="600" class="text-main mono letter-spacing">ABOUT ME</text>
    <line x1="5" y1="20" x2="5" y2="140" stroke="${border}" stroke-width="2" stroke-dasharray="4 4"/>
    
    <text x="25" y="40" font-size="12" class="text-muted" line-height="1.8">
      <tspan x="25" dy="0">I'm a full-stack developer who loves turning ideas into</tspan>
      <tspan x="25" dy="20">real products. I enjoy working with modern technologies,</tspan>
      <tspan x="25" dy="20">designing scalable systems and learning new things.</tspan>
      <tspan x="25" dy="30">When I'm not coding, you'll find me reading, exploring</tspan>
      <tspan x="25" dy="20">new tech or building something cool.</tspan>
    </text>
  </g>

  <g transform="translate(460, 320)">
    <circle cx="5" cy="5" r="3" fill="${accent}"/>
    <text x="15" y="10" font-size="14" font-weight="600" class="text-main mono letter-spacing">TECH STACK</text>
`;

const stack = [
  {name: 'JavaScript', color: '#F7DF1E', text: '#000', label: 'JS'},
  {name: 'TypeScript', color: '#3178C6', text: '#FFF', label: 'TS'},
  {name: 'React', color: '#61DAFB', text: '#000', label: 'Re'},
  {name: 'Node.js', color: '#339933', text: '#FFF', label: 'Node'},
  {name: 'Express', color: '#EEEEEE', text: '#000', label: 'ex'},
  {name: 'MongoDB', color: '#47A248', text: '#FFF', label: 'MDB'},
  {name: 'TailwindCSS', color: '#06B6D4', text: '#FFF', label: 'TW'},
  {name: 'Python', color: '#3776AB', text: '#FFF', label: 'Py'},
  {name: 'C++', color: '#00599C', text: '#FFF', label: 'C++'},
  {name: 'Git', color: '#F05032', text: '#FFF', label: 'Git'},
  {name: 'Docker', color: '#2496ED', text: '#FFF', label: 'Doc'},
  {name: 'AWS', color: '#FF9900', text: '#000', label: 'AWS'},
  {name: 'Postman', color: '#FF6C37', text: '#FFF', label: 'PM'},
  {name: 'Figma', color: '#F24E1E', text: '#FFF', label: 'Fig'},
  {name: 'Linux', color: '#FCC624', text: '#000', label: 'Lin'},
  {name: 'VS Code', color: '#007ACC', text: '#FFF', label: 'VS'}
];

stack.forEach((tech, i) => {
  const row = Math.floor(i / 8);
  const col = i % 8;
  const x = col * (45 + 10);
  const y = row * (60 + 10) + 30;
  
  svg += `
    <g transform="translate(${x}, ${y})">
      <rect x="0" y="0" width="45" height="45" rx="8" fill="#161b22" stroke="${border}"/>
      <rect x="12" y="10" width="20" height="20" rx="4" fill="${tech.color}"/>
      <text x="22" y="24" font-size="9" font-weight="bold" fill="${tech.text}" text-anchor="middle" font-family="sans-serif">${tech.label}</text>
      <text x="22.5" y="55" font-size="10" class="text-muted" text-anchor="middle">${tech.name}</text>
    </g>
  `;
});

svg += `</g>`;

// FEATURED PROJECTS
svg += `
  <g transform="translate(40, 520)">
    <circle cx="5" cy="5" r="3" fill="${accent}"/>
    <text x="15" y="10" font-size="14" font-weight="600" class="text-main mono letter-spacing">FEATURED PROJECTS</text>
`;

const projects = [
  {title: 'CNS - Cloud Nexus Stream', desc: 'Personal media cloud platform for streaming, sync & sharing.', tags: ['MERN', 'Socket.io', 'FFmpeg', 'Docker'], stars: 120, forks: 32, icon: 'M13 3a7 7 0 00-6 10H5a5 5 0 000 10h14a6 6 0 001-11.9A7 7 0 0013 3z'},
  {title: 'GCC Developer OS', desc: 'Developer ecosystem platform for my college coding club.', tags: ['MERN', 'Redis', 'BullMQ', 'AI'], stars: 85, forks: 21, icon: 'M4 4h16v16H4V4zm2 2v12h12V6H6zm2 3h3v2H8V9zm4 0h3v2h-3V9zm-4 4h7v2H8v-2z'},
  {title: 'Smart Study Buddy', desc: 'AI powered study companion for students.', tags: ['React Native', 'Node.js', 'MongoDB'], stars: 63, forks: 18, icon: 'M12 2l9 4-9 4-9-4 9-4zm0 6l9 4-9 4-9-4 9-4zm0 6l9 4-9 4-9-4 9-4z'},
  {title: 'AI Resume Analyzer', desc: 'Analyze resumes and get AI powered suggestions.', tags: ['Next.js', 'Groq API', 'TailwindCSS'], stars: 47, forks: 11, icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'}
];

projects.forEach((proj, i) => {
  const x = i * (200 + 15);
  svg += `
    <g transform="translate(${x}, 30)">
      <rect x="0" y="0" width="195" height="135" class="card"/>
      <path d="${proj.icon}" fill="none" stroke="${accent}" stroke-width="1.5" transform="translate(15, 15) scale(0.8)"/>
      <text x="15" y="55" font-size="12" font-weight="600" class="text-main">${proj.title}</text>
      
      <text x="15" y="75" font-size="10" class="text-muted">
        <tspan x="15" dy="0">${proj.desc.substring(0, 30)}</tspan>
        <tspan x="15" dy="14">${proj.desc.substring(30, 60)}</tspan>
      </text>
      
      <g transform="translate(15, 105)">
  `;
  
  let tagX = 0;
  proj.tags.forEach(tag => {
    const width = tag.length * 6 + 8;
    svg += `<rect x="${tagX}" y="0" width="${width}" height="14" rx="2" fill="#21262d"/>
            <text x="${tagX + width/2}" y="10" font-size="8" class="text-muted mono" text-anchor="middle">${tag}</text>`;
    tagX += width + 5;
  });
  
  svg += `
      </g>
      <text x="15" y="135" font-size="10" class="text-muted">★ ${proj.stars}   ⑂ ${proj.forks}</text>
    </g>
  `;
});

svg += `</g>`;

// STATS SECTION
svg += `
  <g transform="translate(40, 720)">
    <circle cx="5" cy="5" r="3" fill="${accent}"/>
    <text x="15" y="10" font-size="14" font-weight="600" class="text-main mono letter-spacing">GITHUB STATS</text>
    
    <!-- Graph Card -->
    <g transform="translate(0, 30)">
      <rect x="0" y="0" width="370" height="110" class="card"/>
      <text x="15" y="25" font-size="10" class="text-muted">Total Contributions</text>
      <text x="15" y="50" font-size="24" font-weight="bold" class="text-main">2,143</text>
      <text x="15" y="70" font-size="10" class="text-accent">↑ 32% this year</text>
      
      <g transform="translate(120, 15)">
        <text x="0" y="0" font-size="8" class="text-muted">Jan  Feb  Mar  Apr  May  Jun  Jul</text>
        <g transform="translate(0, 10)">
`;

// Simulate contribution graph
const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
for(let col=0; col<25; col++) {
  for(let row=0; row<6; row++) {
    const intensity = Math.floor(Math.random() * 5);
    svg += `<rect x="${col * 9}" y="${row * 9}" width="7" height="7" rx="1" fill="${colors[intensity]}"/>`;
  }
}

svg += `
        </g>
      </g>
    </g>
    
    <!-- Top Languages Card -->
    <g transform="translate(385, 30)">
      <rect x="0" y="0" width="225" height="110" class="card"/>
      <text x="15" y="25" font-size="10" class="text-muted">TOP LANGUAGES</text>
      
      <g transform="translate(45, 65)">
        <circle cx="0" cy="0" r="30" fill="none" stroke="#F7DF1E" stroke-width="12" stroke-dasharray="190 200"/>
        <circle cx="0" cy="0" r="30" fill="none" stroke="#3178C6" stroke-width="12" stroke-dasharray="60 200" stroke-dashoffset="-80"/>
        <circle cx="0" cy="0" r="30" fill="none" stroke="#3776AB" stroke-width="12" stroke-dasharray="40 200" stroke-dashoffset="-140"/>
      </g>
      
      <g transform="translate(100, 35)">
        <circle cx="0" cy="-3" r="3" fill="#F7DF1E"/><text x="10" y="0" font-size="9" class="text-main">JavaScript</text><text x="95" y="0" font-size="9" class="text-muted" text-anchor="end">42.9%</text>
        <circle cx="0" cy="12" r="3" fill="#3178C6"/><text x="10" y="15" font-size="9" class="text-main">TypeScript</text><text x="95" y="15" font-size="9" class="text-muted" text-anchor="end">21.6%</text>
        <circle cx="0" cy="27" r="3" fill="#3776AB"/><text x="10" y="30" font-size="9" class="text-main">Python</text><text x="95" y="30" font-size="9" class="text-muted" text-anchor="end">16.3%</text>
        <circle cx="0" cy="42" r="3" fill="#00599C"/><text x="10" y="45" font-size="9" class="text-main">C++</text><text x="95" y="45" font-size="9" class="text-muted" text-anchor="end">7.8%</text>
        <circle cx="0" cy="57" r="3" fill="#888888"/><text x="10" y="60" font-size="9" class="text-main">Other</text><text x="95" y="60" font-size="9" class="text-muted" text-anchor="end">11.4%</text>
      </g>
    </g>
    
    <!-- Quote Card -->
    <g transform="translate(625, 30)">
      <rect x="0" y="0" width="215" height="110" class="card"/>
      <text x="15" y="25" font-size="10" class="text-muted">QUOTE</text>
      <text x="15" y="45" font-size="20" font-weight="bold" class="text-accent">“</text>
      <text x="35" y="45" font-size="11" class="text-main">
        <tspan x="35" dy="0">Code is not just</tspan>
        <tspan x="35" dy="15">what I write,</tspan>
        <tspan x="35" dy="15">it's how I solve</tspan>
        <tspan x="35" dy="15">problems.</tspan>
      </text>
      <text x="200" y="95" font-size="10" class="text-accent" text-anchor="end">- Naseer Pasha</text>
    </g>
  </g>
`;

// FOOTER
svg += `
  <g transform="translate(40, 880)">
    <text x="0" y="0" font-size="11" class="text-muted mono">&gt; Building the future, one commit at a time.</text>
    <text x="800" y="0" font-size="11" class="text-muted mono" text-anchor="end">Thanks for visiting! ✨</text>
  </g>
`;

svg += `</svg>`;

fs.writeFileSync('Naseer-Profile.svg', svg);
console.log('Successfully generated Naseer-Profile.svg');
