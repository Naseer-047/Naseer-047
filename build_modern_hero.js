import fs from 'fs';

function generateModernHero() {
  // Read the user image and convert to Base64
  let userImageBase64 = '';
  try {
    const buffer = fs.readFileSync('assets/me.png');
    userImageBase64 = `data:image/png;base64,${buffer.toString('base64')}`;
  } catch (err) {
    console.error('Error reading assets/me.png. Fallback to placeholder.', err);
    userImageBase64 = ''; // Will render broken image if missing
  }

  const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&amp;family=Inter:wght@400;500;600;800&amp;family=JetBrains+Mono:wght@400;700&amp;display=swap');
      
      :root {
        --bg: #ffffff;
        --grid: #f1f5f9;
        --text-main: #0f172a;
        --text-muted: #475569;
        --accent: #2563eb;
        --accent-light: #60a5fa;
        --card-bg: #ffffff;
        --dark-bg: #0f172a;
      }
      
      .bg { fill: var(--bg); }
      .marker { font-family: 'Caveat', cursive; }
      .sans { font-family: 'Inter', sans-serif; }
      .mono { font-family: 'JetBrains Mono', monospace; }
      
      .shadow { filter: drop-shadow(0 10px 15px rgba(0,0,0,0.05)) drop-shadow(0 4px 6px rgba(0,0,0,0.05)); }
      .shadow-dark { filter: drop-shadow(0 20px 25px rgba(0,0,0,0.15)) drop-shadow(0 10px 10px rgba(0,0,0,0.1)); }
      
      .sketch-line { stroke: var(--text-main); stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .sketch-line-blue { stroke: var(--accent); stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      
      /* Hover Animations */
      .float { animation: float 6s ease-in-out infinite; }
      .float-delayed { animation: float 6s ease-in-out infinite; animation-delay: 2s; }
      .float-fast { animation: float 4s ease-in-out infinite; animation-delay: 1s; }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
    </style>

    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--grid)" stroke-width="1.5"/>
    </pattern>
    
    <clipPath id="photo-clip">
      <!-- Rounded organic clip path for the photo if it has a background -->
      <path d="M 50,0 C 150,-20 250,50 280,150 C 300,250 220,380 150,400 C 50,420 -20,300 0,150 C 10,50 10,20 50,0 Z" />
    </clipPath>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" class="bg" />
  <rect width="100%" height="100%" fill="url(#grid)" />

  <!-- TOP LEFT: Logo & Subtitle -->
  <g transform="translate(60, 50)">
    <!-- NP Logo sketch -->
    <text x="0" y="50" font-size="70" class="marker" font-weight="700" fill="var(--text-main)">N</text>
    <text x="35" y="50" font-size="70" class="marker" font-weight="700" fill="var(--accent)">P</text>
    
    <line x1="-10" y1="60" x2="80" y2="55" class="sketch-line" opacity="0.3" />
    <line x1="-5" y1="5" x2="-5" y2="70" class="sketch-line" opacity="0.3" />
    
    <text x="120" y="25" font-size="16" class="sans" font-weight="600" fill="var(--text-main)">Naseer Pasha</text>
    <text x="120" y="45" font-size="14" class="sans" font-weight="500" fill="var(--text-main)">
      <tspan fill="var(--accent)">Full Stack</tspan> Developer
    </text>
  </g>

  <!-- LEFT: Main Typography -->
  <g transform="translate(40, 200)">
    <!-- Small top badge text -->
    <circle cx="10" cy="-30" r="5" fill="var(--accent)" />
    <text x="25" y="-25" font-size="14" class="marker" font-weight="700" fill="var(--text-main)" transform="rotate(-2)">I BUILD END TO END DIGITAL SOLUTIONS</text>
    <path d="M 25,-15 Q 150,-25 280,-15" class="sketch-line-blue" opacity="0.5" />
    
    <!-- Big Headings -->
    <text x="0" y="40" font-size="65" class="marker" font-weight="700" fill="var(--text-main)" transform="rotate(-3)">IDEAS</text>
    <text x="20" y="110" font-size="65" class="marker" font-weight="700" fill="var(--accent)" transform="rotate(-3)">TO FULL STACK</text>
    <text x="0" y="180" font-size="65" class="marker" font-weight="700" fill="var(--text-main)" transform="rotate(-3)">EXPERIENCES.</text>
    
    <!-- Paragraph -->
    <foreignObject x="0" y="220" width="380" height="150">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: 'Inter', sans-serif; font-size: 15px; color: #475569; line-height: 1.6;">
        I'm a <strong style="color: #2563eb;">Full Stack Developer</strong> who loves crafting <strong style="color: #2563eb;">scalable web applications</strong>, beautiful interfaces and robust backends that solve real world problems.
      </div>
    </foreignObject>
    
    <!-- Social Icons -->
    <g transform="translate(0, 360)">
      <!-- GitHub -->
      <a href="https://github.com/Naseer-047" target="_blank">
        <circle cx="15" cy="15" r="15" fill="none" stroke="var(--text-main)" stroke-width="2"/>
        <path d="M15 6C10 6 6 10 6 15c0 4 2.6 7.4 6.2 8.6.4.1.6-.2.6-.4v-1.5c-2.5.5-3-1.2-3-1.2-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6 1 .1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-2-.2-4.1-1-4.1-4.5 0-1 .4-1.8 1-2.4-.1-.2-.4-1.1.1-2.4 0 0 .8-.3 2.5.9.7-.2 1.5-.3 2.3-.3.8 0 1.6.1 2.3.3 1.7-1.2 2.5-.9 2.5-.9.5 1.3.2 2.2.1 2.4.6.6 1 1.4 1 2.4 0 3.5-2.1 4.3-4.1 4.5.3.3.6.8.6 1.7v2.5c0 .2.2.5.6.4 3.6-1.2 6.2-4.6 6.2-8.6 0-5-4-9-9-9z" fill="var(--text-main)"/>
      </a>
      
      <!-- LinkedIn -->
      <a href="https://www.linkedin.com/in/naseer-pasha" target="_blank">
        <circle cx="65" cy="15" r="15" fill="none" stroke="var(--text-main)" stroke-width="2"/>
        <path d="M60.5 11h-2v6h2v-6zm-1-3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm6 3h-2v3c0 .8-.6 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-3h-2v6h2v-1c.4.6 1 1.2 2 1.2 1.4 0 2.5-1.1 2.5-2.5v-3.2z" fill="var(--text-main)" transform="scale(1.2) translate(-9, -2)"/>
      </a>
      
      <line x1="110" y1="0" x2="110" y2="30" class="sketch-line" opacity="0.3"/>
      
      <!-- Buttons -->
      <g transform="translate(130, 0)">
        <rect x="0" y="-5" width="140" height="40" rx="20" fill="var(--text-main)" class="shadow"/>
        <text x="70" y="20" font-size="12" class="sans" font-weight="600" fill="#fff" text-anchor="middle">Explore My Work ↗</text>
      </g>
      
      <g transform="translate(280, 0)">
        <rect x="0" y="-5" width="140" height="40" rx="20" fill="#fff" stroke="var(--text-main)" stroke-width="1.5" class="shadow"/>
        <text x="70" y="20" font-size="12" class="sans" font-weight="600" fill="var(--text-main)" text-anchor="middle">View My Resume ↓</text>
      </g>
    </g>
  </g>

  <!-- CENTER: The Photo -->
  <g transform="translate(420, 150)">
    <!-- Blue sketchy outline behind the photo -->
    <circle cx="170" cy="170" r="185" class="sketch-line-blue" stroke-width="3" stroke-dasharray="15 10" opacity="0.8" transform="rotate(15 170 170)" />
    <circle cx="170" cy="170" r="175" class="sketch-line-blue" stroke-width="1.5" opacity="0.5" transform="rotate(-15 170 170)" />
    
    <!-- Photo embedded -->
    <!-- Circular clip path -->
    <defs>
      <clipPath id="circle-clip">
        <circle cx="170" cy="170" r="170" />
      </clipPath>
    </defs>
    <image href="${userImageBase64}" x="0" y="0" width="340" height="340" preserveAspectRatio="xMidYMid slice" clip-path="url(#circle-clip)"/>
  </g>

  <!-- RIGHT SIDE: The Tech Doodles -->
  <g transform="translate(820, 100)">
    
    <!-- Arrow pointing to tech -->
    <path d="M -20,-10 Q -40,20 -10,40" stroke="var(--accent)" stroke-width="2" fill="none" class="sketch-line-blue"/>
    <text x="-20" y="-20" font-size="16" class="marker" font-weight="700" fill="var(--text-main)" transform="rotate(-5)">THE FULL STACK</text>
    <text x="-15" y="-3" font-size="16" class="marker" font-weight="700" fill="var(--text-main)" transform="rotate(-5)">I WORK WITH</text>
    
    <!-- Tech Stack Box -->
    <g transform="translate(10, 20)" class="float">
      <rect x="0" y="0" width="300" height="70" rx="12" fill="var(--card-bg)" stroke="#e2e8f0" stroke-width="1" class="shadow"/>
      <!-- Simple circles for tech logos to keep SVG clean without needing hundreds of paths -->
      <g transform="translate(20, 20)">
        <circle cx="15" cy="15" r="15" fill="#61dafb" opacity="0.2"/><text x="15" y="20" font-size="10" font-weight="800" fill="#000" text-anchor="middle">Re</text>
        <circle cx="65" cy="15" r="15" fill="#68a063" opacity="0.2"/><text x="65" y="20" font-size="10" font-weight="800" fill="#000" text-anchor="middle">No</text>
        <circle cx="115" cy="15" r="15" fill="#000000" opacity="0.1"/><text x="115" y="20" font-size="10" font-weight="800" fill="#000" text-anchor="middle">Ex</text>
        <circle cx="165" cy="15" r="15" fill="#4db33d" opacity="0.2"/><text x="165" y="20" font-size="10" font-weight="800" fill="#000" text-anchor="middle">Mg</text>
        <circle cx="215" cy="15" r="15" fill="#38b2ac" opacity="0.2"/><text x="215" y="20" font-size="10" font-weight="800" fill="#000" text-anchor="middle">Tw</text>
        <circle cx="265" cy="15" r="15" fill="#3178c6" opacity="0.2"/><text x="265" y="20" font-size="10" font-weight="800" fill="#000" text-anchor="middle">Ts</text>
      </g>
    </g>

    <!-- Code Editor Box -->
    <g transform="translate(30, 110)" class="float-delayed">
      <rect x="0" y="0" width="280" height="150" rx="10" fill="var(--dark-bg)" class="shadow-dark"/>
      <!-- Mac window buttons -->
      <circle cx="15" cy="15" r="4" fill="#ef4444"/>
      <circle cx="30" cy="15" r="4" fill="#f59e0b"/>
      <circle cx="45" cy="15" r="4" fill="#10b981"/>
      <text x="140" y="18" font-size="12" class="mono" fill="#64748b" text-anchor="middle">server.js</text>
      
      <!-- Code lines -->
      <g font-size="11" class="mono" fill="#e2e8f0" transform="translate(15, 45)">
        <text y="0"><tspan fill="#c678dd">const</tspan> app = <tspan fill="#61afef">express</tspan>();</text>
        <text y="20">app.<tspan fill="#61afef">get</tspan>(<tspan fill="#98c379">'/api'</tspan>, (req, res) =&gt; {</text>
        <text y="40">  res.<tspan fill="#61afef">json</tspan>({</text>
        <text y="60">    msg: <tspan fill="#98c379">'Building awesome things 🚀'</tspan></text>
        <text y="80">  });</text>
        <text y="100">});</text>
      </g>
    </g>

    <!-- Database Schema Doodle -->
    <g transform="translate(-10, 280)" class="float-fast">
      <path d="M 90,40 L 150,40" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="4 4" />
      <circle cx="120" cy="40" r="3" fill="var(--accent)" />
      
      <!-- Users Table -->
      <rect x="0" y="0" width="90" height="80" rx="6" fill="var(--card-bg)" stroke="#e2e8f0" stroke-width="1" class="shadow"/>
      <text x="10" y="20" font-size="12" class="sans" font-weight="600" fill="var(--text-main)">users</text>
      <line x1="0" y1="25" x2="90" y2="25" stroke="#e2e8f0" stroke-width="1"/>
      <text x="10" y="40" font-size="10" class="mono" fill="var(--text-muted)">id    <tspan fill="var(--accent)">uuid</tspan></text>
      <text x="10" y="55" font-size="10" class="mono" fill="var(--text-muted)">email <tspan fill="var(--accent)">str</tspan></text>
      <text x="10" y="70" font-size="10" class="mono" fill="var(--text-muted)">hash  <tspan fill="var(--accent)">str</tspan></text>
      
      <!-- Projects Table -->
      <rect x="150" y="0" width="90" height="80" rx="6" fill="var(--card-bg)" stroke="#e2e8f0" stroke-width="1" class="shadow"/>
      <text x="160" y="20" font-size="12" class="sans" font-weight="600" fill="var(--text-main)">projects</text>
      <line x1="150" y1="25" x2="240" y2="25" stroke="#e2e8f0" stroke-width="1"/>
      <text x="160" y="40" font-size="10" class="mono" fill="var(--text-muted)">id    <tspan fill="var(--accent)">uuid</tspan></text>
      <text x="160" y="55" font-size="10" class="mono" fill="var(--text-muted)">title <tspan fill="var(--accent)">str</tspan></text>
      <text x="160" y="70" font-size="10" class="mono" fill="var(--text-muted)">u_id  <tspan fill="var(--accent)">uuid</tspan></text>
      
      <text x="120" y="100" font-size="14" class="marker" fill="var(--text-main)" text-anchor="middle" transform="rotate(-2)">DATABASE DESIGN</text>
      <path d="M 120,110 Q 140,120 160,110" fill="none" class="sketch-line-blue" />
    </g>

    <!-- Deployment Terminal -->
    <g transform="translate(60, 420)" class="float">
      <rect x="0" y="0" width="250" height="100" rx="8" fill="var(--dark-bg)" class="shadow-dark"/>
      <text x="15" y="20" font-size="10" class="mono" fill="#10b981">~/portfolio $</text>
      <text x="15" y="40" font-size="10" class="mono" fill="#e2e8f0">npm run deploy</text>
      <text x="15" y="60" font-size="10" class="mono" fill="#64748b">&gt; Building production bundle...</text>
      <text x="15" y="80" font-size="10" class="mono" fill="#10b981">✓ Deployed to Vercel successfully!</text>
      
      <text x="200" y="130" font-size="16" class="marker" fill="var(--text-main)" text-anchor="middle" transform="rotate(-5)">DEPLOY &amp; SCALE</text>
      <path d="M 230,120 Q 250,100 240,70" stroke="var(--accent)" stroke-width="2" fill="none" class="sketch-line-blue"/>
    </g>

  </g>

  <!-- Sticky Note at bottom right (using simple rotation without transform-origin to avoid github bugs) -->
  <g transform="translate(900, 600) rotate(-5)">
    <rect x="0" y="0" width="160" height="120" rx="4" fill="#bfdbfe" class="shadow-dark"/>
    <text x="15" y="30" font-size="16" class="marker" fill="#1e3a8a">
      <tspan x="15" dy="0">I don't just</tspan>
      <tspan x="15" dy="25">write code, I</tspan>
      <tspan x="15" dy="25">solve problems.</tspan>
    </text>
    <path d="M 120,90 Q 130,100 140,90" fill="none" stroke="#1e3a8a" stroke-width="2"/>
    <path d="M 130,90 L 130,105" fill="none" stroke="#1e3a8a" stroke-width="2"/>
  </g>

</svg>
`;

  fs.writeFileSync('assets/modern-hero.svg', svgContent);
  console.log('Successfully generated assets/modern-hero.svg');
}

generateModernHero();
