import fs from 'fs';

function generateTerminalHero() {
  const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 650" width="1200" height="650">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&amp;family=Inter:wght@400;500;600;700;800&amp;display=swap');
      
      :root {
        --bg: #0a0a0a;
        --card-bg: #121212;
        --text-main: #ffffff;
        --text-muted: #a1a1aa;
        --accent: #a3e635; /* Neon green */
        --accent-dark: #4d7c0f;
        --border: #27272a;
      }
      
      .bg { fill: var(--bg); }
      .mono { font-family: 'JetBrains Mono', monospace; }
      .sans { font-family: 'Inter', sans-serif; }
      
      .text-white { fill: var(--text-main); }
      .text-green { fill: var(--accent); }
      .text-grey { fill: var(--text-muted); }
      
      /* Blinking cursor */
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      .cursor { animation: blink 1s step-end infinite; }
      
      /* Subtle pulse for online dot */
      @keyframes pulse {
        0%, 100% { opacity: 1; r: 4; }
        50% { opacity: 0.6; r: 5; }
      }
      .pulse-dot { animation: pulse 2s infinite ease-in-out; }
      
      /* Matrix Rain Animation (opacity fading) */
      @keyframes fadeRun {
        0% { opacity: 0.1; }
        50% { opacity: 0.4; }
        100% { opacity: 0.1; }
      }
      .matrix-rain { animation: fadeRun 4s infinite linear; }
      .rain-delay-1 { animation-delay: 1s; }
      .rain-delay-2 { animation-delay: 2s; }
      .rain-delay-3 { animation-delay: 3s; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" class="bg" />

  <!-- LEFT PANEL -->
  <g transform="translate(60, 60)">
    
    <!-- Top Line -->
    <text x="0" y="20" font-size="16" class="mono text-grey">
      <tspan class="text-green">&gt;</tspan> Building the future, one <tspan class="text-green">commit</tspan> at a time.
    </text>

    <!-- Main Title -->
    <text x="0" y="100" font-size="64" class="sans text-white" font-weight="800" letter-spacing="-1">
      NASEER <tspan class="text-green">PASHA</tspan>
    </text>

    <!-- Sub Title / Role -->
    <text x="0" y="160" font-size="24" class="mono text-white" font-weight="500">
      [ <tspan class="text-green">&gt; Software Engineer</tspan> ]
    </text>

    <!-- Small Attributes -->
    <text x="0" y="210" font-size="16" class="mono text-grey">
      Full Stack Developer <tspan class="text-green">•</tspan> Problem Solver <tspan class="text-green">•</tspan> Tech Enthusiast
    </text>

    <!-- Paragraph with left border -->
    <g transform="translate(0, 250)">
      <line x1="0" y1="0" x2="0" y2="70" stroke="var(--border)" stroke-width="3" />
      <foreignObject x="25" y="0" width="550" height="120">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: 'JetBrains Mono', monospace; font-size: 15px; color: #a1a1aa; line-height: 1.8;">
          I build fast, scalable and beautiful digital products<br/>
          that solve real-world problems using <strong style="color: #a3e635; font-weight: normal;">clean code</strong>,<br/>
          modern architectures and <strong style="color: #a3e635; font-weight: normal;">thoughtful design</strong>.
        </div>
      </foreignObject>
    </g>

    <!-- Socials Box -->
    <g transform="translate(0, 390)">
      <rect x="-5" y="-5" width="410" height="55" rx="8" fill="var(--bg)" stroke="var(--border)" stroke-width="1.5" />
      <text x="15" y="28" font-size="20" class="mono text-green">&gt;</text>
      
      <!-- GitHub -->
      <a href="https://github.com/Naseer-047" target="_blank">
        <rect x="50" y="5" width="36" height="36" rx="6" fill="#18181b" />
        <path d="M68 11.5c-3.6 0-6.5 2.9-6.5 6.5 0 2.9 1.9 5.3 4.4 6.2.3.1.4-.1.4-.3v-1.1c-1.8.4-2.2-.9-2.2-.9-.3-.8-.7-1-.7-1-.6-.4.1-.4.1-.4.7.1 1 .7 1 .7.6 1 1.5.7 1.9.5.1-.4.2-.7.4-.9-1.4-.2-3-.7-3-3.2 0-.7.3-1.3.7-1.8-.1-.2-.3-.8.1-1.7 0 0 .6-.2 1.9.7.5-.1 1.1-.2 1.7-.2.6 0 1.2.1 1.7.2 1.3-.9 1.9-.7 1.9-.7.4.9.2 1.5.1 1.7.4.5.7 1.1.7 1.8 0 2.5-1.5 3-3 3.2.2.2.4.6.4 1.2v1.8c0 .2.1.4.5.3 2.6-.9 4.4-3.3 4.4-6.2 0-3.6-2.9-6.5-6.5-6.5z" fill="#ffffff"/>
      </a>
      
      <line x1="100" y1="12" x2="100" y2="34" stroke="var(--border)" stroke-width="1" />

      <!-- LinkedIn -->
      <a href="https://www.linkedin.com/in/naseer-pasha" target="_blank">
        <rect x="114" y="5" width="36" height="36" rx="6" fill="#18181b" />
        <path d="M123.8 14.2h-1.5v4.5h1.5v-4.5zm-.8-2.2c-.5 0-.8.3-.8.8s.3.8.8.8.8-.3.8-.8-.4-.8-.8-.8zm4.5 2.2h-1.5v2.2c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1v-2.2h-1.5v4.5h1.5v-.8c.3.5.8.9 1.5.9 1.1 0 1.9-.8 1.9-1.9v-2.7z" fill="#ffffff" transform="scale(1.5) translate(-42, -5.5)"/>
      </a>

      <line x1="164" y1="12" x2="164" y2="34" stroke="var(--border)" stroke-width="1" />
      
      <!-- Website / Globe -->
      <a href="https://naseerpasha.vercel.app" target="_blank">
        <rect x="178" y="5" width="36" height="36" rx="6" fill="#18181b" />
        <path d="M196 14a8 8 0 100 16 8 8 0 000-16zm-5.5 8c.2-2.1 1.3-4 2.8-5.2A6.5 6.5 0 00190.5 22zm5.5-6.5c1.2 0 2.3 1.9 2.8 4h-5.6c.5-2.1 1.6-4 2.8-4zm-2.8 5.5h5.6c-.1 1.6-.7 3-1.6 4a4.4 4.4 0 01-1.2-4zm5.6 0a6.5 6.5 0 00-2.8 5.2 6.5 6.5 0 002.8-5.2z" fill="#ffffff" transform="scale(1.15) translate(-27, -2.5)"/>
      </a>

      <line x1="228" y1="12" x2="228" y2="34" stroke="var(--border)" stroke-width="1" />

      <!-- Email -->
      <a href="mailto:contact@naseer.com" target="_blank">
        <rect x="242" y="5" width="36" height="36" rx="6" fill="#18181b" />
        <path d="M260 15c-3 0-5.5 2-5.5 4.5v5c0 1.4 1.1 2.5 2.5 2.5h6c1.4 0 2.5-1.1 2.5-2.5v-5c0-2.5-2.5-4.5-5.5-4.5zm4 9.5c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-4.6l3.5 2.3c.3.2.7.2 1 0l3.5-2.3v4.6zm-4-3.5L256 18c.3-.6.9-1 1.5-1h5c.6 0 1.2.4 1.5 1l-4 3z" fill="#ffffff" transform="scale(1.15) translate(-38, -3.5)"/>
      </a>
      
      <text x="295" y="28" font-size="20" class="mono text-green cursor">_</text>

    </g>

  </g>

  <!-- RIGHT PANEL (The Terminal) -->
  <g transform="translate(680, 60)">
    
    <!-- Outer Box (The "screen") -->
    <rect x="0" y="0" width="450" height="450" rx="16" fill="var(--bg)" stroke="var(--border)" stroke-width="2" />
    <path d="M 0 30 L 0 16 Q 0 0 16 0 L 434 0 Q 450 0 450 16 L 450 30" fill="var(--card-bg)" />
    <line x1="0" y1="30" x2="450" y2="30" stroke="var(--border)" stroke-width="1" />

    <!-- Terminal Header -->
    <circle cx="20" cy="15" r="4" fill="var(--accent)" class="pulse-dot" />
    <text x="32" y="19" font-size="12" class="mono text-green">system.online</text>

    <text x="390" y="18" font-size="14" class="mono text-white">_</text>
    <rect x="410" y="8" width="10" height="10" fill="none" stroke="var(--text-main)" stroke-width="1.5" />
    <text x="430" y="19" font-size="14" class="sans text-white">✕</text>

    <!-- Terminal Content Area -->
    <g transform="translate(20, 50)">
      
      <!-- Crosshairs -->
      <path d="M 0 10 L 0 0 L 10 0" fill="none" stroke="var(--accent)" stroke-width="2" />
      <path d="M 400 0 L 410 0 L 410 10" fill="none" stroke="var(--accent)" stroke-width="2" />
      <path d="M 0 370 L 0 380 L 10 380" fill="none" stroke="var(--accent)" stroke-width="2" />
      <path d="M 410 370 L 410 380 L 400 380" fill="none" stroke="var(--accent)" stroke-width="2" />

      <!-- Matrix digital rain dots (Background) -->
      <g font-size="10" class="mono text-green matrix-rain" opacity="0.3">
        <text x="30" y="40">|</text> <text x="30" y="55">:</text> <text x="30" y="70">.</text>
        <text x="70" y="30">!</text> <text x="70" y="60">|</text> <text x="70" y="90">.</text>
        <text x="120" y="50">:</text> <text x="120" y="80">|</text>
      </g>
      <g font-size="10" class="mono text-green matrix-rain rain-delay-1" opacity="0.2">
        <text x="50" y="60">.</text> <text x="50" y="75">|</text> <text x="50" y="100">:</text>
        <text x="100" y="40">|</text> <text x="100" y="70">.</text> <text x="100" y="110">!</text>
      </g>
      <g font-size="10" class="mono text-green matrix-rain rain-delay-2" opacity="0.4">
        <text x="140" y="50">!</text> <text x="140" y="80">:</text> <text x="140" y="120">|</text>
        <text x="80" y="120">.</text> <text x="80" y="150">|</text>
      </g>

      <!-- The ASCII Art Coder -->
      <g transform="translate(60, 90)">
        <text font-size="12" class="mono text-white" xml:space="preserve">
<tspan x="0" y="0">                     ____</tspan>
<tspan x="0" y="15">                   /____ \</tspan>
<tspan x="0" y="30">                   |    | |</tspan>
<tspan x="0" y="45">                   |____|/</tspan>
<tspan x="0" y="60">                  /      \       _</tspan>
<tspan x="0" y="75">            _____/        \_____/ \</tspan>
<tspan x="0" y="90">           |    /          \    | |</tspan>
<tspan x="0" y="105">           |___/   <tspan class="text-green">&lt; / &gt;</tspan>    \___|/|</tspan>
<tspan x="0" y="120">           |____________________| |</tspan>
<tspan x="0" y="135">                   |  |</tspan>
<tspan x="0" y="150">                  /    \</tspan>
<tspan x="0" y="165">                 /      \</tspan>
        </text>
        
        <!-- The desk -->
        <text font-size="12" class="mono text-grey" xml:space="preserve">
<tspan x="0" y="135">     _______________________________</tspan>
<tspan x="0" y="150">    |                               |</tspan>
<tspan x="0" y="165">    |                               |</tspan>
<tspan x="0" y="180">    |                               |</tspan>
<tspan x="0" y="195">    |                               |</tspan>
        </text>
      </g>
      
      <!-- Better Coder Art closely matching screenshot -->
      <g transform="translate(30, 80)">
        <text font-size="11.5" class="mono text-white" xml:space="preserve" fill="var(--text-main)" opacity="0.9">
<tspan x="0" y="0"> </tspan>
<tspan x="0" y="12"> </tspan>
<tspan x="0" y="24">                                        ____</tspan>
<tspan x="0" y="36">                                      /____  \</tspan>
<tspan x="0" y="48">                                      |    |  |</tspan>
<tspan x="0" y="60">                                      |____| /</tspan>
<tspan x="0" y="72">                                     /      \</tspan>
<tspan x="0" y="84">                                    /        \       __</tspan>
<tspan x="0" y="96">                                  /|          \_____/  |</tspan>
<tspan x="0" y="108">                                 / |           |    | /</tspan>
<tspan x="0" y="120">                   ___________  /__|           |____|/</tspan>
<tspan x="0" y="132">                  |  <tspan class="text-green">&lt; / &gt;</tspan>    |    |___________|</tspan>
<tspan x="0" y="144">                  |___________|        |   |</tspan>
<tspan x="0" y="156">          _____________________________|___|________________</tspan>
<tspan x="0" y="168">         |                                                  |</tspan>
<tspan x="0" y="180">         |                                   ____           |</tspan>
<tspan x="0" y="192">         |                                  /    \          |</tspan>
<tspan x="0" y="204">         |                                 /      \         |</tspan>
<tspan x="0" y="216">         |                                /________\        |</tspan>
        </text>
      </g>
      
      <!-- Just use the exact one from the image to be safe -->
      <!-- Hiding the above test one by moving it outside view or overriding -->
      
    </g>
    
    <g transform="translate(20, 50)" fill="var(--bg)">
      <rect x="0" y="0" width="410" height="380" />
    </g>

    <g transform="translate(20, 50)">
      <!-- Crosshairs -->
      <path d="M 0 10 L 0 0 L 10 0" fill="none" stroke="var(--accent)" stroke-width="2" />
      <path d="M 400 0 L 410 0 L 410 10" fill="none" stroke="var(--accent)" stroke-width="2" />
      <path d="M 0 370 L 0 380 L 10 380" fill="none" stroke="var(--accent)" stroke-width="2" />
      <path d="M 410 370 L 410 380 L 400 380" fill="none" stroke="var(--accent)" stroke-width="2" />

      <!-- The ASCII Art Coder (Matching Screenshot) -->
      <g transform="translate(15, 60)">
        <text font-size="12" class="mono text-white" xml:space="preserve" fill="var(--text-main)" line-height="1.2">
<tspan x="0" y="0"> </tspan>
<tspan x="0" y="15">                                          ____</tspan>
<tspan x="0" y="30">                                        /____ \</tspan>
<tspan x="0" y="45">                                        |    | |</tspan>
<tspan x="0" y="60">                                        |____|/</tspan>
<tspan x="0" y="75">                                       /      \      _</tspan>
<tspan x="0" y="90">                 _____                /        \____/ |</tspan>
<tspan x="0" y="105">                /    /               /          \   |/ </tspan>
<tspan x="0" y="120">               /    /  <tspan class="text-green">&lt; / &gt;</tspan>        _\          |   /</tspan>
<tspan x="0" y="135">               \___/_______________/  \________/___/ </tspan>
<tspan x="0" y="150">        ___________________________________________ </tspan>
<tspan x="0" y="165">       |                                           |</tspan>
<tspan x="0" y="180">       |                                  |   |    |</tspan>
<tspan x="0" y="195">       |                                 /     \   |</tspan>
<tspan x="0" y="210">       |                                /       \  |</tspan>
<tspan x="0" y="225">       |                               /_________\ |</tspan>
<tspan x="0" y="240">       |                                           |</tspan>
        </text>
      </g>

      <g transform="translate(35, 65)">
        <!-- Digital Rain / Matrix effect -->
        <g font-size="10" class="mono text-green matrix-rain" opacity="0.3">
          <text x="0" y="10">|</text> <text x="0" y="30">:</text> <text x="0" y="50">.</text>
          <text x="20" y="20">!</text> <text x="20" y="40">|</text> <text x="20" y="60">.</text>
          <text x="40" y="10">:</text> <text x="40" y="30">|</text>
          <text x="60" y="50">.</text> <text x="60" y="70">|</text> <text x="60" y="90">:</text>
        </g>
        <g font-size="10" class="mono text-green matrix-rain rain-delay-1" opacity="0.2">
          <text x="10" y="60">.</text> <text x="10" y="80">|</text> <text x="10" y="100">:</text>
          <text x="30" y="30">|</text> <text x="30" y="50">.</text> <text x="30" y="70">!</text>
          <text x="50" y="20">!</text> <text x="50" y="40">:</text> <text x="50" y="60">|</text>
        </g>
        <g font-size="10" class="mono text-green matrix-rain rain-delay-2" opacity="0.4">
          <text x="70" y="40">!</text> <text x="70" y="60">:</text> <text x="70" y="80">|</text>
          <text x="90" y="70">.</text> <text x="90" y="90">|</text>
        </g>
      </g>
      
      <!-- Bottom right SYSTEM ONLINE -->
      <circle cx="270" cy="365" r="4" fill="var(--accent)" class="pulse-dot" />
      <text x="282" y="369" font-size="12" class="mono text-green">SYSTEM ONLINE</text>
    </g>

  </g>

  <!-- FOOTER -->
  <g transform="translate(60, 580)">
    <line x1="0" y1="0" x2="1080" y2="0" stroke="var(--border)" stroke-width="1" />
    <text x="0" y="30" font-size="14" class="mono text-grey">
      &gt; Code. Build. Learn. <tspan class="text-green">Repeat.</tspan>
    </text>
    <text x="1080" y="30" font-size="14" class="mono text-grey" text-anchor="end">
      Let's build something <tspan class="text-green">amazing</tspan> together! <tspan class="text-green cursor">_&lt;</tspan>
    </text>
  </g>

</svg>
`;

  fs.writeFileSync('assets/terminal-hero.svg', svgContent);
  console.log('Successfully generated assets/terminal-hero.svg');
}

generateTerminalHero();
