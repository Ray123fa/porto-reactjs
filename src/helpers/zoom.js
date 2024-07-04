const zoomIn = (element) => {
  element.style.transform = "scale(1.25)";
  element.style.transition = "transform 0.5s";
};

const zoomOut = (element) => {
  element.style.transform = "scale(1)";
};

const imgOpen = (element) => {
  window.open(element.src, "_blank");
};

export { zoomIn, zoomOut, imgOpen };
