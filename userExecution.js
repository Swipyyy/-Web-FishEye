import { myRequest, listOfPhotographers, listOfMedias } from "./constante.js";
import { utilisateur, medias } from "./classes.js";
import {
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
} from "./injectHTML.js";
import { loadUserPage } from "./userPage.js";

function letsgo() {
  var userUrl = window.location.search;
  const urlParams = new URLSearchParams(userUrl);
  let idUser = urlParams.get("id");

  loadUserPage(
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
    medias
  );
}

letsgo();
