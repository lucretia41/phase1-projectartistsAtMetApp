


function renderOneArtist(artwork) {
    //Build Artist

               
    let artcard = document.createElement('li')
    artcard.className = 'artcard'
    artcard.innerHTML = `
   <img src="${artwork.imageURL}">
    <div class="content">
    <h4>${artwork.name}</h4>
    <p>
        $<span class="like-count">${artwork.likes}</span> Liked
    </p>
    <p>${artwork.title}</p>
    </div> `

    {/* add artist to dom */}
    console.log(artcard)
    
    document.querySelector('#artist-list').appendChild(artcard)
}
  console.log("hi from mainjs")
  
//    function initialize(){
//     artdata.forEach(artist => renderOneArtist(artist))
//    }
//    initialize()
 function getAllArtists() {
    fetch('http://localhost:3000/artdata') 
        .then(res => res.json())
        .then(artdata =>  artdata.forEach(artwork => renderOneArtist(artwork)))

 
 }
// // {/* }get data and render artists to dom*/}

function initialize(){
    getAllArtists()
    // console.log("get all artists")
}
initialize()




// {
//         document.addEventListener("DOMContentLoaded", function () {
//             console.log('The DOM has loaded');
//         });

//         console.log("this loads the dom");
    

//         console.log("works")

//         fetch("http:localhost:3000/artworks")
//             .then(response => response.json())
//             .then(artworks => {
//                 const container = document.querySelector("#artworkList");
//                 //   artworks.forEach(artwork => {
//                 //   })

//                 //   });
//             })

//         fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (title) {
//                 console.log(title);

//             });
//     };




//     // console.log("works")
//     // fetch("http:localhost:3000/artworks")
//     //     .then(response => response.json())
//     //     .then(artworks => {
//     //         const container = document.querySelector("ul#artworkList");
//     //         //   artworks.forEach(artwork => {
//     //         //   })

//     //         //   });
//     //     })

//     // fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
//     //     .then(function (response) {
//     //         return response.json();
//     //     })
//     //     .then(function (title) {
//     //         console.log(title);

//     //     });
//     fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID,isHighlight, primarySmallImage, artistDisplayName, artistsDisplayBio]")
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (objectID) {
//             console.log(objectID);
//         });
//     // fetch("https://collectionapi.metmuseum.org/public/collection/v1/search")
//     //     .then(function (res) {
//     //         return res.json();

//     //     })
//     //     .then(function (objectsIDs) {
//     //         console.log(objectsIDs);
//     //     });

//     fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?isOnView=true&q=van gogh")
//         .then(function (res) {
//             return res.json();
//         })
//         .then(function (isOnView) {
//             console.log(isOnView)
//         });
//         fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]")
    



