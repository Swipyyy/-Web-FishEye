// SEARCH ID

var userUrl = window.location.search;
const urlParams = new URLSearchParams(userUrl);
const idUser = urlParams.get("id");

// IMPORT JSON - FETCH

function importUser() {
  rcq.then((response) => {
    console.log(response);

    const userData = response.json();
    console.log(userData);

    userData
      .then((utilisateur) => {
        // CREATE PAGE WITH MEDIAS
        const userr = utilisateur.photographers; // SEARCH PHOTOGRAPHERS ON JSON
        console.log(userr);

        for (let i = 0; userr[i]; i++) {
          if (userr[i].id == idUser) {
            injectUserBanner(userr, i); // INJECT HTML (see JS file)
            injectUserFilter();
          }
        }

        const medias = utilisateur.media; // SEARCH MEDIAS ON JSON
        medias.sort((a, b) => {
          return a.likes - b.likes;
        });
        for (let i = 0; medias[i]; i++) {
          if (medias[i].photographerId == idUser) {
            if (medias[i].image) {
              injectPics(medias, i); // INJECT PICS
            }
            if (medias[i].video) {
              injectVideos(medias, i); // INJECTS VIDEOS
            }
          }
        }
        return utilisateur;
      })

      .then((utilisateur) => {
        // CREATE FILTERS
        const medias = utilisateur.media;
        let selectItem = document.querySelector("#sortByList");
        selectItem.addEventListener("change", function () {
          var index = selectItem.selectedIndex;
          console.log(index);
          document.getElementById("photoSection").innerHTML = "";
          if (index === 2) {
            medias.sort((b, a) => {
              return a.title.localeCompare(b.title); // TITLE FILTER
            });
            for (let i = 0; medias[i]; i++) {
              if (medias[i].photographerId == idUser) {
                if (medias[i].image) {
                  injectPics(medias, i);
                }
                if (medias[i].video) {
                  injectVideos(medias, i);
                }
              }
            }
          }
          if (index === 1) {
            medias.sort((a, b) => {
              return new Date(a.date) - new Date(b.date); // DATE FILTER
            });
            for (let i = 0; medias[i]; i++) {
              if (medias[i].photographerId == idUser) {
                if (medias[i].image) {
                  injectPics(medias, i);
                }
                if (medias[i].video) {
                  injectVideos(medias, i);
                }
              }
            }
          }
          if (index === 0) {
            medias.sort((a, b) => {
              return a.likes - b.likes; // LIKE FILTER
            });
            for (let i = 0; medias[i]; i++) {
              if (medias[i].photographerId == idUser) {
                if (medias[i].image) {
                  injectPics(medias, i);
                }
                if (medias[i].video) {
                  injectVideos(medias, i);
                }
              }
            }
          }
        });
      });
  });
}
importUser(); // EXECUTE
