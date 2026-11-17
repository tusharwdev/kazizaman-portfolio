const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, 'public', 'gallery');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const blobDir = 'C:/Users/zaman/.android/studio/agent/conversations/Biyebari-470c05fdfea21bfeabbe6bb676dd7e/12631389-42d2-4711-9c5d-dabdc977a9b8/blobs';

const blobIds = [
  '08b364ec-cf00-4614-84f1-8a47b5d4cd36',
  '0db911ef-c869-44af-ae24-5d7754f46491',
  '40db42fd-80bf-4b2b-a8c3-b16842e40eed',
  '54aca2b6-444b-409a-8887-30f69e3c9d72',
  '7eb17c85-dae4-465f-9233-fd40e5884bcc',
  '93ddc000-5685-47ad-bfd6-b24c4d5017aa',
  'a9e16f55-c640-45da-af7d-8a3a7047f2fa',
  'c62bc4d5-6cd2-4f39-bd6d-9a1a520b9885',
  'e9b4a6a4-fee2-4bef-b011-3b9ea8d4a1c8'
];

async function inspectAndProcess() {
  let count = 1;
  for (const id of blobIds) {
    const src = path.join(blobDir, `${id}.blob`);
    if (!fs.existsSync(src)) {
      console.error(`Missing blob: ${src}`);
      continue;
    }

    const image = sharp(src);
    const meta = await image.metadata();
    console.log(`Blob ${id}: width=${meta.width}, height=${meta.height}, format=${meta.format}, size=${fs.statSync(src).size}`);

    const baseName = `photo-${count}`;
    const jpgPath = path.join(targetDir, `${baseName}.jpg`);
    const webpPath = path.join(targetDir, `${baseName}.webp`);

    // High quality JPEG optimization (max dimension 2400px for crystal clear quality)
    await sharp(src)
      .resize({ width: 2400, height: 2400, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(jpgPath);

    await sharp(src)
      .resize({ width: 2400, height: 2400, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 88 })
      .toFile(webpPath);

    console.log(`  -> Saved ${baseName}.jpg (${fs.statSync(jpgPath).size} bytes)`);
    count++;
  }
}

inspectAndProcess();
