import fs from 'fs';

let svg = fs.readFileSync('assets/retro-header.svg', 'utf8');
const asciiContent = fs.readFileSync('clear_ascii.txt', 'utf8');

const replacement = `
    <!-- High Resolution Clear ASCII Portrait (Animated) -->
    <g transform="translate(35, 25)" font-size="4" font-weight="700" class="mono text-accent" xml:space="preserve">
      <animate attributeName="opacity" values="0.9;1;0.8;1;0.5;1;0.9;1" keyTimes="0;0.1;0.3;0.4;0.7;0.8;0.9;1" dur="5s" repeatCount="indefinite" />
${asciiContent}
    </g>
`;

// Remove the previous Photo Generation Animation block (which includes <defs> and the <g>)
const startIndex = svg.indexOf('<!-- Photo Generation Animation -->');
const endIndex = svg.indexOf('</g>', startIndex + 150) + 4; // This might miss the end if there are nested <g> tags.

// Let's use regex to safely remove it
const newSvg = svg.replace(/<!-- Photo Generation Animation -->[\s\S]*?<\/g>\s+<\/g>/, replacement + '\n    </g>');

if (newSvg !== svg) {
  fs.writeFileSync('assets/retro-header.svg', newSvg);
  console.log('Successfully injected clear ASCII portrait!');
} else {
  console.log('Failed to match replacement block. Trying manual substring...');
  
  // The block starts with <!-- Photo Generation Animation --> and ends with the first </g> that is a direct child of the translate(650, 40) parent
  const p1 = svg.indexOf('<!-- Photo Generation Animation -->');
  // We know the block ends right before the <!-- Decorative moon surface -->
  const p2 = svg.indexOf('<!-- Decorative moon surface -->');
  if (p1 > -1 && p2 > -1) {
    const finalSvg = svg.substring(0, p1) + replacement + '\n    ' + svg.substring(p2);
    fs.writeFileSync('assets/retro-header.svg', finalSvg);
    console.log('Successfully injected clear ASCII portrait (fallback method)!');
  } else {
    console.log('Completely failed to find insertion point.');
  }
}
