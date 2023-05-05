document.addEventListener("DOMContentLoaded", function() {
    console.log('The DOM has loaded');
});

console.log("this loads the dom");


console.log("works")
fetch("http:localhost:3000/artworks")
    .then(response => response.json())
    .then(artworks => {
        const container = document.querySelector("ul#artworkList");
        //   artworks.forEach(artwork => {
        //   })

        //   });
    })

fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
    .then(function (response) {
        return response.json();
    })
    .then(function (title) {
        console.log(title);

    });
// fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (objectID) {
//         console.log(objectID);
//     });
// fetch("https://collectionapi.metmuseum.org/public/collection/v1/search")
//     .then(function (res) {
//         return res.json();

//     })
//     .then(function (objectsIDs) {
//         console.log(objectsIDs);
//     });

fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?isOnView=true&q=vincent van gogh")
    .then(function (res) {
        return res.json();
    })
    .then(function (isOnView) {
        console.log(isOnView)
    });







