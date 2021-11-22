// Inject Page Function

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
  createImage
) {
  const response = await fetch(myRequest);
  const importer = await response.json();
  importer.media.sort((a, b) => {
    return b.likes - a.likes; // LIKES FILTER AT LOADING
  });
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
      createImage(
        p.id,
        p.photographerId,
        p.title,
        p.image,
        p.video,
        p.tags,
        p.likes,
        p.date,
        p.price,
        p.description,
        idUser
      )
    );
  }
  console.log(listOfMedias);
  listOfPhotographers.forEach((photographers) => {
    if (photographers.id == idUser) {
      injectUserBanner(photographers); // INJECT HTML (see JS file)
      injectUserTags(photographers);
      injectUserFilter();
      injectContactForm(photographers);
      injectContact(photographers);
      const modalOpen = document.querySelectorAll(".openContact"); // CONTACT MODAL
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
          console.log(first, last, email, textMessage); // OUTPUT
          modalBg.style.display = "none";
        })
      );
    }
  });

  listOfMedias.sort((a, b) => {
    return a.likes - b.likes; // LIKES FILTER FOR LIGHTBOX
  });

  listOfMedias.forEach((medias) => {
    if (medias.photographerId == idUser) {
      console.log(medias);
      if (medias.image) {
        injectLightbox(medias);
      }
      if (medias.video) {
        injectLightboxVideo(medias);
      }
      let likeCount = document.getElementById("like" + medias.id); // LIKE INCREMENT
      let like = document.getElementById("nbLike" + medias.id);
      let numberlike = like.innerHTML;
      let likeOk = false;
      likeCount.addEventListener("click", function incrementer() {
        console.log(likeOk);
        if (likeOk == false) {
          numberlike++;
          like.innerHTML = numberlike;
          likeOk = true;
          compteurLike();
        } else if (likeOk == true) {
          numberlike--;
          like.innerHTML = numberlike;
          likeOk = false;
          compteurLike();
        }
      });
    }
  });
  injectLightBoxControls();

  let selectItem = document.querySelector("#sortByList"); // SELECT FILTER
  selectItem.addEventListener("change", function () {
    var index = selectItem.selectedIndex;
    document.getElementById("photoSection").innerHTML = "";
    document.getElementById("modal-content").innerHTML = "";
    if (index === 2) {
      listOfMedias.sort((b, a) => {
        return a.title.localeCompare(b.title); // TITLE FILTER
      });
      injectLightBoxControls();
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
          let likeOk = false;
          likeCount.addEventListener("click", function incrementer() {
            console.log(likeOk);
            if (likeOk == false) {
              numberlike++;
              like.innerHTML = numberlike;
              likeOk = true;
              compteurLike();
            } else if (likeOk == true) {
              numberlike--;
              like.innerHTML = numberlike;
              likeOk = false;
              compteurLike();
            }
          });
        }
      });
      lightBox();
    }
    if (index === 1) {
      listOfMedias.sort((a, b) => {
        return new Date(a.date) - new Date(b.date); // DATE FILTER
      });
      injectLightBoxControls();
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
          let likeOk = false;
          likeCount.addEventListener("click", function incrementer() {
            console.log(likeOk);
            if (likeOk == false) {
              numberlike++;
              like.innerHTML = numberlike;
              likeOk = true;
              compteurLike();
            } else if (likeOk == true) {
              numberlike--;
              like.innerHTML = numberlike;
              likeOk = false;
              compteurLike();
            }
          });
        }
      });
      lightBox();
    }
    if (index === 0) {
      listOfMedias.sort((a, b) => {
        return a.likes - b.likes; // LIKE FILTER
      });
      injectLightBoxControls();
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
          let likeOk = false;
          likeCount.addEventListener("click", function incrementer() {
            console.log(likeOk);
            if (likeOk == false) {
              numberlike++;
              like.innerHTML = numberlike;
              likeOk = true;
              compteurLike();
            } else if (likeOk == true) {
              numberlike--;
              like.innerHTML = numberlike;
              likeOk = false;
              compteurLike();
            }
          });
        }
      });
      lightBox();
    }
  });
  // TOTAL LIKES
  function compteurLike() {
    let like = document.querySelectorAll(".nbLike");
    let compteur = 0;
    console.log(like);
    for (let i = 0; i < like.length; i++) {
      let numberLike = like[i].innerHTML;
      let finalCount = parseInt(numberLike, Number);
      compteur += finalCount;
    }
    document.getElementById("nbTotalLike").innerHTML = compteur;
  }
  compteurLike();
}

export { loadUserPage };
