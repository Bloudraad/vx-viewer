const fs = require('fs');

!fs.existsSync('./metadata_output') && fs.mkdirSync('./metadata_output');

const outfitMap = {
  Rainy: 'Raincoat',
  'Beach Ocean': 'Hawaiian Shirt',
  Desert: 'Egyptian Outfit',
  Volcano: 'Volcano Singlet',
  Mountain: 'Backpack',
  'Night Sky': 'Moon Shirt',
  Lakeside: 'Fishing Outfit',
  Wilderness: 'Military Jacket',
  Sunset: 'Sunset Shirt',
  Industrial: 'Business Suit',
  'Sunrise Gradient': 'None',
  'Melon Gradient': 'Melon Shirt',
  'Chickpea Gradient': 'Chicken Shirt',
  'Disco Gradient': 'Disco Jacket',
  'Purple Mimosa Gradient': 'Purple Mimosa Shirt',
  'Sea Current Gradient': 'Sea Current Shirt',
  'Mariner Gradient': 'Mariner Shirt',
  'Celestial Gradient': 'Illuminati Shirt',
  'Camarón Gradient': 'Shrimp Shirt',
  "Baby's Breath Gradient": 'Flower Shirt',
  'Peachy Gradient': 'Peach Shirt',
  'Salmon Gradient': 'Salmon Shirt',
  'Violet Gradient': 'Violet Flower Shirt',
  'Cherry Blossom Gradient': 'Cherry Blossom Shirt',
  'Windjammer Gradient': 'Ship Shirt',
  'Corally Gradient': 'Coral Shirt',
  'Byzantine Gradient': 'Byzantine Imperial Dress',
  'Turquoise Gradient': 'Turquoise Volcano Singlet',
  'Ice Cold Gradient': 'Iceberg Symbol Shirt',
  'Rolling Stone Gradient': 'Rolling Stone Shirt',
  'Purpureus Gradient': 'Purpureus Flower Shirt',
  'Radiant Orchid Gradient': 'Orchid Flower Shirt',
  'Barracuda Gradient': 'Barracuda Fish Shirt',
  'Bamboo Forest': 'Bamboo Armor',
  'Starry Night': 'Starry Shirt',
  Cloudy: 'Cloud Shirt',
  'Midnight Navy Gradient': 'Navy Jacket',
  'Royal Lavender Gradient': 'Lavender Flower Shirt',
};

const rawMetadataFiles = fs.readdirSync('./metadata_raw').sort();

(async function main() {
  for (let i = 0; i < rawMetadataFiles.length; i++) {
    let { attributes } = require(`./metadata_raw/${rawMetadataFiles[i]}`);
    attributes = attributes.map((v) => {
      if (v.trait_type === 'Background') {
        v.value = outfitMap[v.value];
        v.trait_type = 'Outfit';
      }
      return v;
    });
    const metadata = {
      image: `https://storage.googleapis.com/cryptotrexnft/vxpreviews/${
        i + 1
      }.png`,
      name: `CryptoTrex VX #${i + 1}`,
      attributes,
      animation_url: `https://vxviewer.cryptotrexnft.com/#${i + 1}`,
      iframe_url: `https://vxviewer.cryptotrexnft.com/#${i + 1}`,
    };
    await new Promise((resolve, reject) => {
      fs.writeFile(
        `./metadata_output/${i + 1}.json`,
        Buffer.from(JSON.stringify(metadata, null, '\t')),
        (err) => {
          if (err) {
            return reject(err);
          }
          resolve();
        },
      );
    });
  }
})();
