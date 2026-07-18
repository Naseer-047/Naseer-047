import fs from 'fs';

// Read the custom logo and convert to base64
const logoBuffer = fs.readFileSync('assets/np-logo-custom.webp');
const base64Logo = 'data:image/webp;base64,' + logoBuffer.toString('base64');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 80" width="800" height="80">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&amp;display=swap');
      
      .btn {
        stroke-width: 2;
        rx: 8;
        ry: 8;
        transition: all 0.3s ease;
      }
      
      .btn-portfolio {
        fill: #ffffff;
        stroke: #e5e7eb;
        filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
      }
      .btn-portfolio:hover {
        stroke: #a3e635;
        transform: translateY(-2px);
      }

      .btn-linkedin {
        fill: #0A66C2;
        stroke: #0A66C2;
        filter: drop-shadow(0 4px 6px rgba(10,102,194,0.3));
      }
      .btn-linkedin:hover {
        stroke: #60A5FA;
        transform: translateY(-2px);
      }

      .btn-email {
        fill: #EA4335;
        stroke: #EA4335;
        filter: drop-shadow(0 4px 6px rgba(234,67,53,0.3));
      }
      .btn-email:hover {
        stroke: #F87171;
        transform: translateY(-2px);
      }

      .btn-location {
        fill: #10B981;
        stroke: #10B981;
        filter: drop-shadow(0 4px 6px rgba(16,185,129,0.3));
      }
      .btn-location:hover {
        stroke: #34D399;
        transform: translateY(-2px);
      }

      .text-mono {
        font-family: 'JetBrains Mono', monospace;
        font-size: 14px;
        font-weight: 700;
        fill: #ffffff;
      }
      
      .text-dark {
        fill: #0d1117;
      }

      .icon {
        fill: #ffffff;
      }
      
      a {
        cursor: pointer;
      }
    </style>
  </defs>

  <!-- Button 1: Portfolio -->
  <a href="https://naseerpasha.me" target="_blank" class="btn-group">
    <rect x="40" y="20" width="160" height="40" class="btn btn-portfolio" />
    <image href="${base64Logo}" x="55" y="26" width="28" height="28" />
    <text x="90" y="45" class="text-mono text-dark">PORTFOLIO</text>
  </a>

  <!-- Button 2: LinkedIn -->
  <a href="https://linkedin.com/in/naseer-pasha" target="_blank" class="btn-group">
    <rect x="220" y="20" width="160" height="40" class="btn btn-linkedin" />
    <!-- LinkedIn Logo approximation -->
    <path d="M250 48h-4V36h4v12zm-2-13.4c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4zm16 13.4h-4v-6.3c0-1.5-.6-2.5-1.9-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.5-.1.8v6.6h-4s.1-10.9 0-12h4v1.7c.5-.8 1.5-2 3.6-2 2.6 0 4.6 1.7 4.6 5.4v6.9z" class="icon" />
    <text x="275" y="45" class="text-mono">LINKEDIN</text>
  </a>

  <!-- Button 3: Email -->
  <a href="mailto:contact@naseerpasha.com" target="_blank" class="btn-group">
    <rect x="400" y="20" width="160" height="40" class="btn btn-email" />
    <!-- Paper Plane Logo -->
    <path d="M425 45l14-10-14-6v6l10 2-10 2v6z" class="icon" />
    <text x="455" y="45" class="text-mono">EMAIL</text>
  </a>

  <!-- Button 4: Based In -->
  <a href="#" class="btn-group">
    <rect x="580" y="20" width="160" height="40" class="btn btn-location" />
    <!-- Map Pin Logo -->
    <path d="M605 32c-3.3 0-6 2.7-6 6 0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6zm0 8.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" class="icon" />
    <text x="635" y="45" class="text-mono">BASED IN</text>
  </a>

</svg>
`;

fs.writeFileSync('assets/contact-badges.svg', svg);
console.log('Contact badges SVG generated');
