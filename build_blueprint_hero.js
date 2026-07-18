import fs from 'fs';

const width = 850;
const height = 380;

const style = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&amp;family=Inter:wght@400;700;800&amp;display=swap');
  
  :root {
    --bg: #ffffff;
    --text-main: #0f172a;
    --text-muted: #64748b;
    --text-faint: #cbd5e1;
    --accent: #2563eb;
    --accent-light: #eff6ff;
    --accent-blue: #3b82f6;
    --grid-color: rgba(15, 23, 42, 0.06);
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #0d1117;
      --text-main: #c9d1d9;
      --text-muted: #8b949e;
      --text-faint: #30363d;
      --accent: #58a6ff;
      --accent-light: #1f2937;
      --accent-blue: #3b82f6;
      --grid-color: rgba(201, 209, 217, 0.05);
    }
  }

  .bg { fill: var(--bg); transition: fill 0.3s; }
  .mono { font-family: 'JetBrains Mono', monospace; }
  .sans { font-family: 'Inter', sans-serif; }
  
  .text-main { fill: var(--text-main); }
  .text-muted { fill: var(--text-muted); }
  .text-faint { fill: var(--text-faint); }
  .text-accent { fill: var(--accent); }
  
  .text-xs { font-size: 10px; }
  .text-sm { font-size: 12px; }
  .text-md { font-size: 16px; }
  .text-lg { font-size: 24px; }
  .text-xl { font-size: 32px; font-weight: 800; letter-spacing: -0.5px; }
  
  .line { fill: none; stroke: var(--accent-blue); stroke-width: 1.5; stroke-dasharray: 4 2; opacity: 0.6; }
  .line-solid { fill: none; stroke: var(--accent-blue); stroke-width: 1.5; opacity: 0.8; }
  .node { fill: var(--bg); stroke: var(--accent-blue); stroke-width: 1.5; }
  .node-fill { fill: var(--accent-light); stroke: var(--accent-blue); stroke-width: 1.5; }
  
  .arrow { fill: var(--accent-blue); opacity: 0.8; }
`;

function drawPath(points, dash = false) {
  const path = points.map((p, i) => (i === 0 ? "M " + p[0] + " " + p[1] : "L " + p[0] + " " + p[1])).join(' ');
  const classname = dash ? 'line' : 'line-solid';
  
  const end = points[points.length - 1];
  const prev = points[points.length - 2];
  let angle = 0;
  if (end[0] > prev[0]) angle = 0; 
  else if (end[0] < prev[0]) angle = 180; 
  else if (end[1] > prev[1]) angle = 90; 
  else angle = -90; 
  
  return "<path d=\"" + path + "\" class=\"" + classname + "\" />" +
    "<polygon points=\"" + (end[0]-5) + "," + (end[1]-4) + " " + (end[0]+1) + "," + end[1] + " " + (end[0]-5) + "," + (end[1]+4) + "\" class=\"arrow\" transform=\"rotate(" + angle + " " + end[0] + " " + end[1] + ")\" />";
}

function rectNode(x, y, w, h, text, isFill = false) {
  return "<rect x=\"" + x + "\" y=\"" + y + "\" width=\"" + w + "\" height=\"" + h + "\" rx=\"4\" class=\"" + (isFill ? 'node-fill' : 'node') + "\" />" +
    "<text x=\"" + (x + w/2) + "\" y=\"" + (y + h/2 + 3) + "\" class=\"mono text-xs text-main\" text-anchor=\"middle\">" + text + "</text>";
}

function hexNode(x, y, size, text) {
  const points = [
    [x, y - size],
    [x + size * 0.866, y - size/2],
    [x + size * 0.866, y + size/2],
    [x, y + size],
    [x - size * 0.866, y + size/2],
    [x - size * 0.866, y - size/2]
  ].map(p => p.join(',')).join(' ');
  
  return "<polygon points=\"" + points + "\" class=\"node\" />" +
    "<text x=\"" + x + "\" y=\"" + (y + 3) + "\" class=\"mono text-xs text-main\" text-anchor=\"middle\">" + text + "</text>";
}

function dbNode(x, y, w, h, text) {
  return "<path d=\"M " + x + " " + (y+10) + " C " + x + " " + (y-2) + ", " + (x+w) + " " + (y-2) + ", " + (x+w) + " " + (y+10) + " L " + (x+w) + " " + (y+h-10) + " C " + (x+w) + " " + (y+h+2) + ", " + x + " " + (y+h+2) + ", " + x + " " + (y+h-10) + " Z\" class=\"node-fill\" />" +
    "<path d=\"M " + x + " " + (y+10) + " C " + x + " " + (y+22) + ", " + (x+w) + " " + (y+22) + ", " + (x+w) + " " + (y+10) + "\" class=\"line-solid\" />" +
    "<text x=\"" + (x + w/2) + "\" y=\"" + (y + h/2 + 5) + "\" class=\"mono text-xs text-main\" text-anchor=\"middle\">" + text + "</text>";
}

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <style>${style}</style>
    <!-- 5-8% opacity grid -->
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="var(--grid-color)" />
    </pattern>
  </defs>
  
  <rect width="100%" height="100%" class="bg" />
  <rect width="100%" height="100%" fill="url(#grid)" />

  <!-- Top-left subtle monospace code banner -->
  <text x="30" y="40" class="mono text-xs text-muted">
    <tspan x="30" dy="0">// Engineering elegant systems.</tspan>
    <tspan x="30" dy="16">// Solving complex problems.</tspan>
  </text>

  <!-- Left Side: Typography -->
  <g transform="translate(40, 180)">
    <text x="0" y="0" class="mono text-sm text-accent" letter-spacing="3">SYSTEM DESIGN</text>
    <text x="0" y="30" class="sans text-xl text-main">
      <tspan x="0" dy="0">Complex Systems.</tspan>
      <tspan x="0" dy="36">Simple Experiences.</tspan>
    </text>
  </g>

  <!-- Background Subtle Annotations (Senior Eng Terms) -->
  <text x="350" y="30" class="mono text-xs text-faint" opacity="0.4" font-weight="700">SCALABILITY</text>
  <text x="650" y="40" class="mono text-xs text-faint" opacity="0.4" font-weight="700">OBSERVABILITY</text>
  <text x="450" y="350" class="mono text-xs text-faint" opacity="0.4" font-weight="700">FAULT TOLERANCE</text>
  <text x="700" y="340" class="mono text-xs text-faint" opacity="0.4" font-weight="700">CONSISTENCY</text>
  <text x="40" y="340" class="mono text-xs text-faint" opacity="0.4" font-weight="700">PERFORMANCE</text>

  <!-- Tiny Details (Micro Text scattered) -->
  <text x="320" y="90" class="mono text-xs text-muted" opacity="0.6">Latency: 12ms</text>
  <text x="500" y="70" class="mono text-xs text-muted" opacity="0.6">99.99%</text>
  <text x="760" y="155" class="mono text-xs text-muted" opacity="0.6">Cache Hit</text>
  <text x="660" y="170" class="mono text-xs text-muted" opacity="0.6">Async</text>
  <text x="500" y="220" class="mono text-xs text-muted" opacity="0.6">Queue Depth: 0</text>
  <text x="760" y="320" class="mono text-xs text-muted" opacity="0.6">Event Bus</text>
  <text x="560" y="280" class="mono text-xs text-muted" opacity="0.6">P95: &lt;50ms</text>

  <!-- Right Side: Architecture Diagram -->
  <g transform="translate(0, 0)">
    
    <!-- Paths / Routing -->
    ${drawPath([[300, 110], [330, 110]])}
    ${drawPath([[380, 110], [420, 110]])}
    ${drawPath([[490, 110], [530, 110]])}
    ${drawPath([[590, 110], [610, 110], [610, 70], [650, 70]])} <!-- API to Auth -->
    ${drawPath([[590, 110], [630, 110], [630, 150], [665, 150]])} <!-- API to Redis -->
    ${drawPath([[590, 110], [610, 110], [610, 220], [650, 220]])} <!-- API to Queue -->
    
    ${drawPath([[730, 220], [750, 220]])} <!-- Queue to Workers -->
    ${drawPath([[790, 240], [790, 260]])} <!-- Workers to Primary DB -->
    
    ${drawPath([[730, 280], [660, 280]], true)} <!-- Primary DB to Replica (Async Sync) -->
    
    <!-- Nodes -->
    ${hexNode(280, 110, 25, 'Users')}
    ${hexNode(355, 110, 25, 'CDN')}
    
    ${rectNode(420, 95, 70, 30, 'Load Bal.')}
    ${rectNode(530, 85, 60, 50, 'API Gateway')}
    
    ${rectNode(650, 55, 60, 30, 'Auth', true)}
    ${dbNode(665, 130, 50, 40, 'Redis')}
    
    ${rectNode(650, 205, 80, 30, 'Queue', true)}
    ${rectNode(750, 200, 80, 40, 'Workers')}
    
    ${dbNode(730, 260, 120, 50, 'Primary DB')}
    ${dbNode(580, 260, 80, 40, 'Replica')}

  </g>
</svg>
`;

fs.writeFileSync('assets/blueprint-hero.svg', svg.trim());
console.log('Premium Blueprint Hero generated successfully!');
