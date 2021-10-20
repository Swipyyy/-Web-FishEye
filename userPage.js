// SEARCH ID

async function loadUserPage(
  myRequest,
  listOfPhotographers,
  listOfMedias,
  idUser,
  injectUserBanner,
  injectUserFilter,
  injectPics,
  injectVideos,
  injectContact,
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
        p.price
      )
    );
  }
  console.log(listOfPhotographers);
  listOfPhotographers.forEach((photographers) => {
    if (photographers.id == idUser) {
      injectUserBanner(photographers); // INJECT HTML (see JS file)
      injectUserFilter();
      injectContact(photographers);
      const modalOpen = document.querySelectorAll(".openContact");
      const modalBg = document.querySelector(".bground");
      const closeModalBtn = document.querySelectorAll("#close");
      const sendButton = document.querySelectorAll("#button");
      modalOpen.forEach((btn) =>
        btn.addEventListener("click", function launchModal() {
          modalBg.style.display = "block";
        })
      );
      closeModalBtn.forEach((btn) =>
        btn.addEventListener("click", function closeModal() {
          modalBg.style.display = "none";
        })
      );
      // sendButton.forEach((btn) =>
      //   btn.addEventListener("click", function dispData() {
      //     let FD = new FormData(form);
      //     console.log(FD);
      //   })
      // );
    }
  });
  listOfMedias.sort((a, b) => {
    return a.likes - b.likes;
  });

  listOfMedias.forEach((medias) => {
    if (medias.photographerId == idUser) {
      if (medias.image) {
        injectPics(medias); // INJECT PICS
      }
      if (medias.video) {
        injectVideos(medias); // INJECTS VIDEOS
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

  let selectItem = document.querySelector("#sortByList");
  selectItem.addEventListener("change", function () {
    var index = selectItem.selectedIndex;
    console.log(index);
    document.getElementById("photoSection").innerHTML = "";
    if (index === 2) {
      listOfMedias.sort((b, a) => {
        return a.title.localeCompare(b.title); // TITLE FILTER
      });
      listOfMedias.forEach((medias) => {
        if (medias.photographerId == idUser) {
          if (medias.image) {
            injectPics(medias);
          }
          if (medias.video) {
            injectVideos(medias);
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
          }
          if (medias.video) {
            injectVideos(medias);
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
          }
          if (medias.video) {
            injectVideos(medias);
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
}

export { loadUserPage };
