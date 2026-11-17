const fs = require('fs');
const path = require('path');
const https = require('https');

const CPANEL_URL = 'b201.serverdiana.com';
const AUTH_HEADER = 'cpanel biyebar1:7NZT747GP905RPUCP8V7LH0VN4DKJL3N';
const BASE_TARGET_DIR = '/public_html/kazizaman.online';

function uploadFile(localPath, remoteDir) {
  return new Promise((resolve) => {
    if (!fs.existsSync(localPath)) return resolve(null);
    const boundary = '----cpanelupload' + Date.now();
    const fileName = path.basename(localPath);
    const fileData = fs.readFileSync(localPath);

    const postHead = Buffer.from(
      `--${boundary}\r\n` +
      `Content-Disposition: form-data; name="dir"\r\n\r\n${remoteDir}\r\n` +
      `--${boundary}\r\n` +
      `Content-Disposition: form-data; name="file"; filename="${fileName}"\r\n` +
      `Content-Type: application/octet-stream\r\n\r\n`
    );
    const postTail = Buffer.from(`\r\n--${boundary}--\r\n`);
    const body = Buffer.concat([postHead, fileData, postTail]);

    const options = {
      hostname: CPANEL_URL,
      port: 2083,
      path: '/execute/Fileman/upload_files',
      method: 'POST',
      rejectUnauthorized: false,
      headers: {
        'Authorization': AUTH_HEADER,
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'Content-Length': body.length
      }
    };

    const req = https.request(options, (res) => {
      let resData = '';
      res.on('data', (c) => resData += c);
      res.on('end', () => {
        console.log(`[OK] Uploaded ${fileName} -> ${remoteDir}`);
        resolve(resData);
      });
    });
    req.on('error', (err) => {
      console.error(`[ERR] Failed ${fileName}:`, err.message);
      resolve(null);
    });
    req.write(body);
    req.end();
  });
}

async function uploadDir(localDir, remoteDir) {
  if (!fs.existsSync(localDir)) return;
  const entries = fs.readdirSync(localDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullLocalPath = path.join(localDir, entry.name);
    if (!fs.existsSync(fullLocalPath)) continue;
    if (entry.isDirectory()) {
      const subRemoteDir = `${remoteDir}/${entry.name}`;
      await uploadDir(fullLocalPath, subRemoteDir);
    } else {
      await uploadFile(fullLocalPath, remoteDir);
    }
  }
}

async function run() {
  console.log('Starting deployment to cPanel...');
  const outDir = path.join(__dirname, 'out');
  await uploadDir(outDir, BASE_TARGET_DIR);
  console.log('cPanel Deployment finished!');
}

run();
