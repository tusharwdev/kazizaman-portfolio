const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, 'public', 'certificates');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const blobDir = 'C:/Users/zaman/.android/studio/agent/conversations/Biyebari-470c05fdfea21bfeabbe6bb676dd7e/12631389-42d2-4711-9c5d-dabdc977a9b8/blobs';

const blobMapping = [
  {
    id: '1a1484cc-88bb-480d-acd9-1b1538bec693',
    filename: 'scout-jamboree-2010',
    title: '৩য় মুরাদানগর উপজেলা স্কাউট সমাবেশ ২০১০ (সনদপত্র)',
    issueDate: '৩০/১২/২০১০',
    issuer: 'বাংলাদেশ স্কাউটস, মুরাদানগর উপজেলা, কুমিল্লা'
  },
  {
    id: 'd69d6415-48a1-492d-84d4-615cf5169666',
    filename: 'union-parishad-certificate-2016',
    title: 'ইউনিয়ন পরিষদ চারিত্রিক ও জাতীয়তা সনদপত্র',
    issueDate: '০৯/০৪/২০১৬',
    issuer: '৮নং চাপিতলা ইউনিয়ন পরিষদ, মুরাদানগর, কুমিল্লা'
  },
  {
    id: 'd816a735-9a85-4520-ad30-dc64a37b2d1d',
    filename: 'bidduth-scout-camp-2011',
    title: 'বিদ্যুৎ ক্যাম্প ২০১১ (সনদপত্র)',
    issueDate: '২১/১২/২০১১',
    issuer: 'বিদ্যুৎ বিভাগ (পাওয়ার ডিভিশন) ও বাংলাদেশ স্কাউটস'
  }
];

async function run() {
  for (const item of blobMapping) {
    const src = path.join(blobDir, `${item.id}.blob`);
    if (!fs.existsSync(src)) {
      console.error(`Missing blob: ${src}`);
      continue;
    }

    const image = sharp(src);
    const metadata = await image.metadata();
    console.log(`Processing ${item.filename}: Original width=${metadata.width}, height=${metadata.height}, format=${metadata.format}`);

    // High quality JPEG optimization (max width 2000px for crystal clear document reading)
    const jpgPath = path.join(targetDir, `${item.filename}.jpg`);
    await sharp(src)
      .resize({ width: 2000, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(jpgPath);

    // Modern WebP optimization
    const webpPath = path.join(targetDir, `${item.filename}.webp`);
    await sharp(src)
      .resize({ width: 2000, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(webpPath);

    console.log(`Optimized ${item.filename}:`);
    console.log(`  - JPEG: ${fs.statSync(jpgPath).size} bytes`);
    console.log(`  - WEBP: ${fs.statSync(webpPath).size} bytes`);
  }
}

run();
