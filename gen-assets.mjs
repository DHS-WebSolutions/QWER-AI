import sharp from 'sharp';
import fs from 'node:fs';

const SRC = 'qwer_logo.png';
const PUBLIC = 'public';

// --- Favicon: crop the teal R keycap only (no other keys, no dots) ---
const keyCrop = { left: 1752, top: 200, width: 320, height: 320 };
const padX = 30;
const padY = 30;

// Crop once to a buffer, then build a fresh pipeline per output size
// (chaining .clone() after .extract()/.extend() produced corrupt dimensions
// with the installed sharp/libvips build — safer to re-read a plain buffer).
const keyBuffer = await sharp(SRC)
  .extract(keyCrop)
  .extend({
    top: padY,
    bottom: padY,
    left: padX,
    right: padX,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

for (const [name, size] of Object.entries({
  'favicon-512.png': 512,
  'apple-touch-icon.png': 180,
  'favicon-32.png': 32,
  'favicon-16.png': 16,
})) {
  await sharp(keyBuffer).resize(size, size).toFile(`${PUBLIC}/${name}`);
}

console.log('Favicon assets written.');

// --- OG image: full logo centered on paper background, 1200x630 ---
const meta = await sharp(SRC).metadata();
const targetW = 1200;
const targetH = 630;
const logoW = Math.round(targetW * 0.62);
const logoH = Math.round(logoW * (meta.height / meta.width));

const logoResized = await sharp(SRC).resize(logoW, logoH).toBuffer();

await sharp({
  create: {
    width: targetW,
    height: targetH,
    channels: 4,
    background: { r: 0xfb, g: 0xfa, b: 0xf7, alpha: 1 },
  },
})
  .composite([
    {
      input: logoResized,
      left: Math.round((targetW - logoW) / 2),
      top: Math.round((targetH - logoH) / 2),
    },
  ])
  .png()
  .toFile(`${PUBLIC}/og-image.png`);

console.log('OG image written.');
