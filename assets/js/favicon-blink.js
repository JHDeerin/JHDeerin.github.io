function getRelativePathToRoot() {
  // Get the current path, which will be something like "/path/to/current/page.html"
  let currentPath = window.location.pathname;
  // if running on my local filesystem, replace to match the browser format
  currentPath = currentPath.replace("/C:/Users/2016d/Documents/Projects/github/website-redesign-2025", "");
  // Split by "/" and remove the filename (last element)
  const pathParts = currentPath.split('/').filter(Boolean);
  // Remove the last part if it contains a file extension (likely the HTML file)
  const dirParts = pathParts.slice(0, pathParts[pathParts.length - 1]?.includes('.') ? -1 : undefined);
  // Create a relative path with the appropriate number of "../" segments
  return dirParts.length ? '../'.repeat(dirParts.length) : './';
}

function setFavicon(href) {
  document.getElementById("favicon").href = href;
}

const openTime = 3000;
const rootPath = getRelativePathToRoot();

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