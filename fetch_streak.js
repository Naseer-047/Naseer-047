import fs from 'fs';

const url = "https://streak-stats.demolab.com/?user=Naseer-047&background=ffffff&ring=2563eb&fire=2563eb&currStreakNum=2563eb&currStreakLabel=0f172a&sideNums=0f172a&sideLabels=64748b&dates=64748b&hide_border=true&border_radius=8&v=999";

console.log("Fetching SVG...");
try {
  const res = await fetch(url, { signal: AbortSignal.timeout(60000) });
  const data = await res.text();
  
  if (res.ok && data.includes('<svg')) {
    fs.writeFileSync('assets/streak.svg', data);
    console.log("Successfully saved assets/streak.svg");
  } else {
    console.log("Failed. Status:", res.status);
    console.log("Response:", data.substring(0, 100));
  }
} catch (err) {
  console.log("Error:", err.message);
}
