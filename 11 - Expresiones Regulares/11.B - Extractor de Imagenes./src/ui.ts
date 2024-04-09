import { extractImages } from "./motor";

const textArea = document.getElementById("textarea");
const extractButton = document.getElementById("extract-button");
const imageList = document.getElementById("images-list");

const getHtml = () => {
  if (textArea && textArea instanceof HTMLTextAreaElement) {
    return textArea.value;
  } else {
    return "";
  }
};

const showImageList = () => {
  const html = getHtml();
  const images = extractImages(html);

  if (imageList && imageList instanceof HTMLUListElement) {
    imageList.innerHTML = "";
    images.forEach((image) => {
      const li = document.createElement("li");
      li.textContent = image;
      imageList.appendChild(li);
    });
  }
};

export const init = () => {
  if (extractButton && extractButton instanceof HTMLButtonElement) {
    extractButton.addEventListener("click", showImageList);
  }
};
