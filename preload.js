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

const rexNumber = window.location.hash
  ? window.location.hash.replace('#', '')
  : '6';
const convertedRexNumber = parseInt(rexNumber);
document.querySelector('body').style.backgroundColor =
  backgroundColors[convertedRexNumber % backgroundColors.length];
document.querySelector('#viewer').innerHTML = `
    <model-viewer
      style="width: 100vw; height: 100vh"
      src="https://storage.googleapis.com/cryptotrexnft/vxgltf/${rexNumber}.gltf"
      camera-controls
      orientation="0deg 0deg 210deg"
      shadow-intensity="1"
    />`;

document.querySelector('#viewer model-viewer').addEventListener('load', () => {
  document.querySelector('#loader').style.display = 'none';
});
