import sharp from "sharp";
import { writeFileSync } from "fs";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#4f46e5"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#bg)"/>
  <text x="256" y="280" font-family="system-ui,-apple-system,BlinkMacSystemFont,sans-serif" font-size="240" font-weight="700" fill="white" text-anchor="middle" dominant-baseline="central" letter-spacing="-8">SK</text>
</svg>`;

const svgBuffer = Buffer.from(svg);

// Generate multiple sizes
const sizes = [16, 32, 48, 64, 128, 180, 192, 512];

for (const size of sizes) {
  await sharp(svgBuffer).resize(size, size).png().toFile(`public/icon-${size}.png`);
}

// apple-touch-icon
await sharp(svgBuffer).resize(180, 180).png().toFile("public/apple-touch-icon.png");

// Main favicon.ico (32x32 PNG, browsers accept PNG as .ico)
await sharp(svgBuffer).resize(32, 32).png().toFile("public/favicon.ico");

// Large icon for web manifest
await sharp(svgBuffer).resize(192, 192).png().toFile("public/icon-192.png");
await sharp(svgBuffer).resize(512, 512).png().toFile("public/icon-512.png");

// SVG version
writeFileSync("public/favicon.svg", svg);

console.log("All favicons generated.");
