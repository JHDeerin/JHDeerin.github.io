const openTime = 3000;
const rootPath = "/";

let openEyesImgData = null;
let closedEyesImgData = null;

// Function to fetch an image and convert it to a data URL
// This is needed because just swapping the image url directly will trigger a
// network request to re-fetch the image, using additional bandwidth
// NOTE: This doesn't seem to work if you load a page via file://, I think due
// to CORS, so you'll need to use a web server
function loadImageAsDataURL(url) {
  return fetch(url)
    .then(response => response.blob())
    .then(blob => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    });
}

function setFavicon(href) {
  document.getElementById("favicon").href = href;
}

function swapFavicon(state) {
  isBlinking = state === "blinking";
  if (isBlinking) {
    const blinkTime = Math.round(Math.random()*300 + 200);
    setFavicon(closedEyesImgData);
    setTimeout(() => swapFavicon("open"), blinkTime);
  } else {
    setFavicon(openEyesImgData);
    setTimeout(() => swapFavicon("blinking"), openTime);
  }
}

// Load both images as data URLs
Promise.all([
  loadImageAsDataURL(`${rootPath}assets/images/favicon-eyes-open.png`),
  loadImageAsDataURL(`${rootPath}assets/images/favicon-eyes-closed.png`)
]).then(([openData, closedData]) => {
  openEyesImgData = openData;
  closedEyesImgData = closedData;
  // Start the blinking once data is loaded
  setFavicon(openEyesImgData);
  setTimeout(() => swapFavicon("open"), openTime);
});