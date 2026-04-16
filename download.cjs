const fs = require('fs');
const https = require('https');
const path = require('path');

const fileId = '1kzjYiO2i6srh5fPHkPdaF0_o9s61cTPS';
const url = `https://drive.google.com/uc?export=download&id=${fileId}`;

function download(url, dest) {
  https.get(url, (res) => {
    if (res.statusCode === 302 || res.statusCode === 303) {
      download(res.headers.location, dest);
    } else {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Download completed');
      });
    }
  }).on('error', (err) => {
    console.error('Error:', err.message);
  });
}

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir);
}

download(url, path.join(publicDir, 'profile2.jpg'));
