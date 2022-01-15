const fs = require('fs');
const sharp = require('sharp');

!fs.existsSync('./previews_output') && fs.mkdirSync('./previews_output');

const fileMap = {};
for (let file of fs.readdirSync('./previews_raw')) {
  const [_, yearStr, monthStr, dateStr, hourStr, minuteStr, secondStr] = file
    .replace('.png', '')
    .split('_');
  const dateCreated = new Date(
    parseInt(yearStr),
    parseInt(monthStr) - 1,
    parseInt(dateStr),
    parseInt(hourStr),
    parseInt(minuteStr),
    parseInt(secondStr),
  );
  fileMap[dateCreated.toISOString()] = file;
}
const sortedOrder = Object.keys(fileMap).sort();
const backgroundColors = [
  '#FDFFB6',
  '#FFD6A5',
  '#FFADAD',
  '#FFC6FF',
  '#BDB2FF',
  '#A0C4FF',
  '#9BF6FF',
  '#99E1DC',
  '#8EEDD6',
  '#A6ECA8',
  '#CAFFBF',
  '#D9ED92',
];

(async function main() {
  for (let i = 0; i < sortedOrder.length; i++) {
    const input = await sharp(`./previews_raw/${fileMap[sortedOrder[i]]}`)
      .extract({
        left: 112,
        top: 0,
        width: 400,
        height: 400,
      })
      .toBuffer();
    await new Promise((resolve, reject) => {
      sharp({
        create: {
          width: 400,
          height: 400,
          channels: 4,
          background: backgroundColors[i % backgroundColors.length],
        },
      })
        .composite([
          {
            input,
          },
        ])
        .toFile(`./previews_output/${i + 1}.png`, (err, data) => {
          if (err) {
            return reject(err);
          }
          resolve(data);
        });
    });
  }
})();
