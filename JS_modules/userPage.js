/* eslint-disable max-lines */
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
          const error = {
            "emailN": document.createElement("span"),
            "firstN": document.createElement("span"),
            "lastN": document.createElement("span"),
            "messageN": document.createElement("span")
          };
          // eslint-disable-next-line require-unicode-regexp
          let letters = /^[a-zA-Z_-]+$/;
          // eslint-disable-next-line require-unicode-regexp
          let mailTest = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
          let finalError = 0;
          // Prénom Vide
          if (first == "") {
            finalError += 1;
            document.getElementById("errorFirst").appendChild(error.firstN); // Liaison au DIV parent
            error.firstN.style.cssText =
              "display: block; color:#B81C0C; font-size:0.9rem; padding-top: 0.2rem; padding-bottom: 0.5rem"; // Style du SPAN
            error.firstN.textContent = "Merci de compléter ce champ"; // TextNode avec message d'alerte
          } else if (letters.test(first) == false) {
            finalError += 1;
            document.getElementById("errorFirst").appendChild(error.firstN);
            error.firstN.style.cssText =
              "display: block; color:#B81C0C; font-size:0.9rem; padding-top: 0.2rem; padding-bottom: 0.5rem";
            error.firstN.textContent = "Merci d'indiquer un prénom valide";

            // Nom
          } else if (last == "") {
            finalError += 1;
            document.getElementById("errorLast").appendChild(error.lastN);
            error.lastN.style.cssText =
              "display: block; color:#B81C0C; font-size:0.9rem; padding-top: 0.2rem; padding-bottom: 0.5rem";
            error.lastN.textContent = "Merci de compléter ce champ";
          } else if (letters.test(last) == false) {
            finalError += 1;
            document.getElementById("errorFirst").appendChild(error.lastN);
            error.lastN.style.cssText =
              "display: block; color:#B81C0C; font-size:0.9rem; padding-top: 0.2rem; padding-bottom: 0.5rem";
            error.lastN.textContent = "Merci d'indiquer un nom valide";

            // Email
          } else if (email == "") {
            finalError += 1;
            document.getElementById("errorMail").appendChild(error.emailN);
            error.emailN.style.cssText =
              "display: block; color:#B81C0C; font-size:0.9rem; padding-top: 0.2rem; padding-bottom: 0.5rem";
            error.emailN.textContent =
              "Merci de saisir une adresse mail valide";
          } else if (mailTest.test(email) == false) {
            finalError += 1;
            document.getElementById("errorMail").appendChild(error.emailN);
            error.emailN.style.cssText =
              "display: block; color:#B81C0C; font-size:0.9rem; padding-top: 0.2rem; padding-bottom: 0.5rem";
            error.emailN.textContent =
              "Merci de saisir une adresse mail valide";

            // Message
          } else if (textMessage == "") {
            finalError += 1;
            document.getElementById("message").appendChild(error.messageN);
            error.messageN.style.cssText =
              "display: block; color:#B81C0C; font-size:0.9rem; padding-top: 0.2rem; padding-bottom: 0.5rem";
            error.messageN.textContent = "Merci de compléter ce champ";

            // Envoi
          } else if (finalError == 0) {
            console.log(first, last, email, textMessage);
            modalBg.style.display = "none";
          }
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
