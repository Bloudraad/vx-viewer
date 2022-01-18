const fs = require('fs');
const sharp = require('sharp');

let i = 1;
const sortedFiles = fs
  .readdirSync('./cypress/screenshots/index.js/')
  .sort((a, b) =>
    parseInt(a.replace('.png', '')) > parseInt(b.replace('.png', '')) ? 1 : -1,
  );
console.log(sortedFiles);
for (let file of sortedFiles) {
  console.log(i, file);
  i++;
}
