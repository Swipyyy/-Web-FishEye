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
} from "/injectHTML.js";
import { listOfMedias, listOfPhotographers, myRequest } from "/constante.js";
import { loadUserPage } from "/userPage.js";
import { medias } from "/mediaClass.js";
import { utilisateur } from "/userClass.js";

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
