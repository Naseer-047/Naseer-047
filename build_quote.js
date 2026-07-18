import fs from 'fs';

const quotes = [
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
  { text: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
  { text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.", author: "Dan Salomon" }
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

// Simple word wrap
const words = randomQuote.text.split(' ');
let lines = [];
let currentLine = '';
words.forEach(word => {
  if ((currentLine + word).length > 50) {
    lines.push(currentLine.trim());
    currentLine = word + ' ';
  } else {
    currentLine += word + ' ';
  }
});
lines.push(currentLine.trim());

const svgHeight = 120 + (lines.length * 25);

let textElements = lines.map((line, i) => `
  <text x="30" y="${60 + (i * 25)}" font-size="18" class="mono text-white">
    ${i === 0 ? '<tspan class="text-green">"</tspan>' : ''}${line}${i === lines.length - 1 ? '<tspan class="text-green">"</tspan>' : ''}
  </text>
`).join('');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 ${svgHeight}" width="800" height="${svgHeight}">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400&amp;display=swap');
      
      .bg { fill: #ffffff; stroke: #e2e8f0; stroke-width: 2; rx: 8; ry: 8; }
      .mono { font-family: 'JetBrains Mono', monospace; }
      .text-green { fill: #2563eb; }
      .text-white { fill: #0f172a; }
      .text-grey { fill: #64748b; }
      
      .blink { animation: blinker 1s linear infinite; }
      @keyframes blinker { 50% { opacity: 0; } }
    </style>
  </defs>

  <rect x="1" y="1" width="798" height="${svgHeight - 2}" class="bg" />

  <!-- Terminal Header -->
  <g transform="translate(20, 25)">
    <circle cx="0" cy="0" r="6" fill="#ff5f56" />
    <circle cx="20" cy="0" r="6" fill="#ffbd2e" />
    <circle cx="40" cy="0" r="6" fill="#27c93f" />
    <text x="70" y="5" font-size="14" class="mono text-grey" font-weight="700">~/quote-of-the-day.sh</text>
  </g>

  <line x1="0" y1="40" x2="800" y2="40" stroke="#e2e8f0" stroke-width="1" />

  <!-- Quote Text -->
  ${textElements}

  <!-- Author -->
  <text x="770" y="${svgHeight - 25}" font-size="16" class="mono text-grey" text-anchor="end" font-style="italic">
    — ${randomQuote.author} <tspan class="text-green blink">_</tspan>
  </text>
</svg>
`;

fs.writeFileSync('assets/quote.svg', svg);
console.log('Quote SVG generated');
