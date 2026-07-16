const fs = require('fs');
const path = require('path');

const replacements = {
  '1596701258287-2efc2e0b5efd': '1598974357801-cbca100e65d3',
  '1599385960416-2c9b4e34f89d': '1553284965-83fd3e82fa5a',
  '1522064104273-500b1d033a00': '1508974239320-0a029497e820',
  '1518174415518-e3da3422079f': '1543877087-ebf71fde2be1',
  '1549447291-5374465b6f3c': '1534528741775-53994a69daeb',
  '1504961812423-fb94e1d1f0ec': '1506794778202-cad84cf45f1d',
  '1579541592065-da8a15e49bc9': '1507003211169-0a1dd7228f2d',
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    for (const [bad, good] of Object.entries(replacements)) {
      if (content.includes(bad)) {
        content = content.split(bad).join(good);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
