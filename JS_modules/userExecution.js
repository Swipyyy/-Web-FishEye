// USER MAIN FILE - EXECUTED AT OPENING
import {
  injectContact,
  injectContactForm,
  injectLightBoxControls,
  injectLightbox,
  injectLightboxVideo,
  injectPics,
  injectUserBanner,
  injectUserFilter,
  injectUserTags,
  injectVideos
} from "./injectHTML.js";
import { listOfMedias, listOfPhotographers, myRequest } from "./constante.js";
import { createImage } from "./mediaFactory.js";
import { lightBox } from "./lightbox.js";
import { loadUserPage } from "./userPage.js";
import { utilisateur } from "./userClass.js";

async function letsgo() {
  var userUrl = window.location.search;
  const urlParams = new URLSearchParams(userUrl); // SEARCH ID
  let idUser = urlParams.get("id");

  await loadUserPage(
    // SEE USERPAGE.JS
    myRequest,
    listOfPhotographers,
    listOfMedias,
    idUser,
    injectUserBanner,
    injectUserTags,
    injectUserFilter,
    injectPics,
    injectVideos,
    injectContact,
    injectLightbox,
    injectLightboxVideo,
    injectLightBoxControls,
    injectContactForm,
    utilisateur,
    createImage
  );
  lightBox();
}
letsgo();
