function renderOneArtist(artdata){
    //Build Artist
    let artcard = document.createElement('li')
    artcard.className = 'artcard'
    artcard.innerHTML = `
   <img src="${artdata.image}" 
    <div class="content">
    <h4>${artworks.name}</h4>
    <p>
        $<span class="like-count">${artdata.likes}</span> Liked
    </p>
    <p>${artdata.description}</p>
    </div>
    
`
    {/* add artist to dom */}

    document.querySelector('li').appendChild(artcard)
}
   console.log(artcard)
   
   function initialize(){
    artdata.forEach(artdata => renderOneArtist(artdata))
   }
   initialize()
//  function getAllArtists(){
//     fetch('http://localhost:3000/artworks') 
//         .then(res => res.json())
//         .then(artworks => artworks.forEach(artist => renderOneArtist(artist)))
//         //    .then(data => console.log(data))
            
//         }
 
   
// // {/* }get data and render artists to dom*/}

// function initialize(){
//     getAllArtists()
//     // console.log("get all artists")
// }
// initialize()




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
    



