// Create img & vid + inject into HTML

import { imgClass } from "./imgClass.js";
import { videoClass } from "./videoClass.js";

export function createImage(
  id,
  photographerId,
  title,
  image,
  video,
  tags,
  likes,
  date,
  price,
  description,
  userId = null
) {
  let htmlToReturn = "";
  if (image) {
    let imageC = new imgClass(
      id,
      photographerId,
      title,
      image,
      tags,
      likes,
      date,
      price,
      description
    );
    // eslint-disable-next-line func-style
    let generateImageHtml = (imgClassObject) => {
      const photoSec = document.createElement("div");
      photoSec.setAttribute("class", "photo");
      document.getElementById("photoSection").appendChild(photoSec);
      const img = document.createElement("img");
      const picture = `./img/Photos/${imgClassObject.image}`;
      img.setAttribute("src", picture);
      img.setAttribute("class", "imgMin");
      img.setAttribute("alt", imgClassObject.description);
      photoSec.appendChild(img);
      const footer = document.createElement("div");
      footer.setAttribute("class", "footerPhoto");
      photoSec.appendChild(footer);
      const picDescription = document.createElement("p");
      picDescription.setAttribute("class", "picDescription");
      picDescription.textContent = imgClassObject.title;
      footer.appendChild(picDescription);
      const likeSection = document.createElement("div");
      likeSection.setAttribute("class", "likeSection");
      likeSection.setAttribute("id", "like" + imgClassObject.id);
      footer.appendChild(likeSection);
      const textLike = document.createElement("p");
      textLike.setAttribute("class", "nbLike");
      textLike.setAttribute("id", "nbLike" + imgClassObject.id);
      textLike.textContent = imgClassObject.likes;
      likeSection.appendChild(textLike);
      const logoLike = document.createElement("i");
      logoLike.setAttribute("class", "fas fa-heart");
      logoLike.setAttribute("aria-label", "likes");
      likeSection.appendChild(logoLike);
    };
    if (userId == photographerId) {
      htmlToReturn = generateImageHtml(imageC);
    }
    return {
      date,
      description,
      htmlToReturn,
      id,
      image,
      likes,
      photographerId,
      price,
      tags,
      title
    };
  }

  if (video) {
    let videoC = new videoClass(
      id,
      photographerId,
      title,
      video,
      tags,
      likes,
      date,
      price,
      description
    );
    // eslint-disable-next-line func-style
    let generateImageHtml = (vidClassObject) => {
      const videoSec = document.createElement("div");
      videoSec.setAttribute("class", "video");
      document.getElementById("photoSection").appendChild(videoSec);
      const vid = document.createElement("video");
      const picture = `./img/videos/${vidClassObject.video}`;
      vid.setAttribute("class", "imgMin");
      const source = document.createElement("source");
      source.setAttribute("src", picture);
      source.setAttribute("type", "video/mp4");
      source.setAttribute("alt", vidClassObject.description);
      vid.appendChild(source);
      videoSec.appendChild(vid);
      const footer = document.createElement("div");
      footer.setAttribute("class", "footerPhoto");
      videoSec.appendChild(footer);
      const picDescription = document.createElement("p");
      picDescription.setAttribute("class", "picDescription");
      picDescription.textContent = vidClassObject.title;
      footer.appendChild(picDescription);
      const likeSection = document.createElement("div");
      likeSection.setAttribute("class", "likeSection");
      likeSection.setAttribute("id", "like" + vidClassObject.id);
      footer.appendChild(likeSection);
      const textLike = document.createElement("p");
      textLike.setAttribute("class", "nbLike");
      textLike.setAttribute("id", "nbLike" + vidClassObject.id);
      textLike.textContent = vidClassObject.likes;
      likeSection.appendChild(textLike);
      const logoLike = document.createElement("i");
      logoLike.setAttribute("class", "fas fa-heart");
      logoLike.setAttribute("aria-label", "likes");
      likeSection.appendChild(logoLike);
    };
    if (userId == photographerId) {
      htmlToReturn = generateImageHtml(videoC);
    }
    return {
      date,
      description,
      htmlToReturn,
      id,
      likes,
      photographerId,
      price,
      tags,
      title,
      video
    };
  }
  return console.log("Error");
}
