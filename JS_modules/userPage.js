// SEARCH ID

import { lightBox } from "./lightbox.js";

async function loadUserPage(
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
) {
  const response = await fetch(myRequest);
  const importer = await response.json();
  for (let p of importer.photographers) {
    listOfPhotographers.push(
      new utilisateur(
        p.name,
        p.id,
        p.city,
        p.country,
        p.tagline,
        p.price,
        p.portrait,
        p.tags
      )
    );
  }
  for (let p of importer.media) {
    listOfMedias.push(
      new medias(
        p.id,
        p.photographerId,
        p.title,
        p.image,
        p.video,
        p.tags,
        p.likes,
        p.date,
        p.price,
        p.description
      )
    );
  }
  listOfPhotographers.forEach((photographers) => {
    if (photographers.id == idUser) {
      injectUserBanner(photographers); // INJECT HTML (see JS file)
      injectUserTags(photographers);
      injectUserFilter();
      injectContactForm(photographers);
      injectContact(photographers);
      const modalOpen = document.querySelectorAll(".openContact");
      const modalBg = document.querySelector(".bground");
      const closeModalBtn = document.querySelectorAll("#close");
      const sendButton = document.querySelectorAll("#button");
      modalOpen.forEach((btn) =>
        btn.addEventListener("click", function launchModal() {
          modalBg.style.display = "block";
          document.onkeydown = checkKey;
          function checkKey(e) {
            e = e || window.event;

            if (e.keyCode == "27") {
              modalBg.style.display = "none";
            } else if (e.keyCode == "13") {
              let first = document.getElementById("first").value;
              let last = document.getElementById("last").value;
              let email = document.getElementById("email").value;
              let textMessage = document.getElementById("textMessage").value;
              console.log(first, last, email, textMessage);
              modalBg.style.display = "none";
            }
          }
        })
      );
      closeModalBtn.forEach((btn) =>
        btn.addEventListener("click", function closeModal() {
          modalBg.style.display = "none";
        })
      );
      sendButton.forEach((btn) =>
        btn.addEventListener("click", function printForm() {
          let first = document.getElementById("first").value;
          let last = document.getElementById("last").value;
          let email = document.getElementById("email").value;
          let textMessage = document.getElementById("textMessage").value;
          console.log(first, last, email, textMessage);
          modalBg.style.display = "none";
        })
      );
    }
  });
  listOfMedias.sort((a, b) => {
    return a.likes - b.likes;
  });

  listOfMedias.forEach((medias) => {
    if (medias.photographerId == idUser) {
      if (medias.image) {
        injectPics(medias);
        injectLightbox(medias); // INJECT PICS
      }
      if (medias.video) {
        injectVideos(medias);
        injectLightboxVideo(medias); // INJECTS VIDEOS
      }
      let likeCount = document.getElementById("like" + medias.id); // LIKE INCREMENT
      likeCount.addEventListener("click", function incrementer() {
        let like = document.getElementById("nbLike" + medias.id);
        let numberlike = like.innerHTML;
        numberlike++;
        like.innerHTML = numberlike;
      });
    }
  });
  injectLightBoxControls();

  let selectItem = document.querySelector("#sortByList");
  selectItem.addEventListener("change", function () {
    var index = selectItem.selectedIndex;
    document.getElementById("photoSection").innerHTML = "";
    if (index === 2) {
      listOfMedias.sort((b, a) => {
        return a.title.localeCompare(b.title); // TITLE FILTER
      });
      listOfMedias.forEach((medias) => {
        if (medias.photographerId == idUser) {
          if (medias.image) {
            injectPics(medias);
            injectLightbox(medias);
          }
          if (medias.video) {
            injectVideos(medias);
            injectLightboxVideo(medias);
          }
          let likeCount = document.getElementById("like" + medias.id); // LIKE INCREMENT
          let like = document.getElementById("nbLike" + medias.id);
          let numberlike = like.innerHTML;
          likeCount.addEventListener("click", function incrementer() {
            numberlike++;
            like.innerHTML = numberlike;
          });
        }
      });
    }
    if (index === 1) {
      listOfMedias.sort((a, b) => {
        return new Date(a.date) - new Date(b.date); // DATE FILTER
      });
      listOfMedias.forEach((medias) => {
        if (medias.photographerId == idUser) {
          if (medias.image) {
            injectPics(medias);
            injectLightbox(medias);
          }
          if (medias.video) {
            injectVideos(medias);
            injectLightboxVideo(medias);
          }
          let likeCount = document.getElementById("like" + medias.id); // LIKE INCREMENT
          let like = document.getElementById("nbLike" + medias.id);
          let numberlike = like.innerHTML;
          likeCount.addEventListener("click", function incrementer() {
            numberlike++;
            like.innerHTML = numberlike;
          });
        }
      });
    }
    if (index === 0) {
      listOfMedias.sort((a, b) => {
        return a.likes - b.likes; // LIKE FILTER
      });
      listOfMedias.forEach((medias) => {
        if (medias.photographerId == idUser) {
          if (medias.image) {
            injectPics(medias);
            injectLightbox(medias);
          }
          if (medias.video) {
            injectVideos(medias);
            injectLightboxVideo(medias);
          }
          let likeCount = document.getElementById("like" + medias.id); // LIKE INCREMENT
          let like = document.getElementById("nbLike" + medias.id);
          let numberlike = like.innerHTML;
          likeCount.addEventListener("click", function incrementer() {
            numberlike++;
            like.innerHTML = numberlike;
          });
        }
      });
    }
  });
  lightBox();
}

export { loadUserPage };
