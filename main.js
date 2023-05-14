// document.addEventListener("DOMContentLoaded", function () {
//     console.log('The DOM has loaded');
// });


// fetch("http://localhost:3000/artData")
//     .then(res => res.json())
//     .then(artData => {
//         artistsDisplay(artData),
//             showCaseArtist([0]),
//             console.log(artData)
//     })

// const artistDisplay = document.querySelector("#artists-display")

// // const artistName = document.querySelector("name")
// // const artistdate = document.querySelector("date")
// // const artistImage = document.querySelector(".detail-image")
// // const artistTitle = document.querySelector("title")

// function artistsDisplay(artData) {
//     artData.forEach(artwork => {
//         const eachArtist = document.createElement("img")
//         eachArtist.src = artistImage
//         artistDisplay.appendChild(eachArtist)
//         eachArtist.addEventListener('click', event => {
//             showCaseArtist(artwork)
//         })
//         eachArtist.addEventListener('mouseover', event => {
//             addGlow(event, eachArtist)
//         })

//     });
// }
// function addGlow(event, artistImage) {
//     const colors = ['red', 'blue', 'yellow', 'green'];
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];

//     artistImage.style.borderColor = randomColor;
//     artistImage.style.borderWidth = '5px';
//     artistImage.style.borderStyle = 'solid';
//     artistImage.style.transiton = 'border-color 0.5s, border-width 0.5s';

//     setTimeout(() => {
//         artistImage.style.borderColor = '';
//         artistImage.style.borderWidth = '';
//         artistImage.style.borderStyle = '';
//         artistImage.style.transiton = '';

//     }, 1000);
// }

// function addGlowToMainArtists(event, artistImage) {
//     const colors = ['red', 'blue', 'yellow', 'green'];
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];

//     artistImage.style.borderColor = randomColor;
//     artistImage.style.borderWidth = '5px';
//     artistImage.style.borderStyle = 'solid';
//     artistImage.style.transiton = 'border-color 0.5s, border-width 0.5s';

// }

// function showCaseArtist() {
//     artistName.textContent = artist.artistName
//     artistdate.textContent = artist.date
//     artistImage.src = artistImage
//     artistImage.addEventListener('mouseover', event => {
//         addGlowToMainArtists(event, artistImage);

//     })
// }

// console.log()










// const renderCards = (artData) => {
//     const cardContainer = document.getElementById("card-container");
//     artData.forEach((cardInfo) => {
//         const imgConatiner = document.createElement("div");

//         const img = document.createElement("img");
//         const name = document.createElement("p");
//         const date = document.createElement("p");

//         name.textContent = cardInfo.name
//         date.textContent = "1860"

//         imgContainer.append(img, name, date)

//         img.src = cardInfo.image;
//         img.addEventListener("click", (event) => {
//             console.log(cardInfo)
//             const pName = document.createElement("p")
//             pName.textContent = cardInfo.name
//             console.log(pName)
//         })

//         cardContainer.appendChild(imgConatiner);

//     });
// };

// const fetchData = () => {
//     return fetch("http://localhost:3000/artData")
//         .then(res => renderCards.json())
//         .then(info => {
//             console.log(info.data)
//             renderCards(info.data.artists)
//             return info
//         })
// }

// const addEventListenerToNavLinks = () => {
//     const links = document.querySelectorAll(".link")
//     links.forEach(link => {
//         link.addEventListener("click", (e) => {
//             console.log(e)
//             console.log(e.target)
//             debugger

//             fetch("http://localhost:3000/artData")
//                 .then(res => res.json())
//                 .then(info => {
//                     renderCards(info.data.artists)

//                 })
//         })
//     })
// }
// addEventListenerToNavLinks()
// fetchData()




















const card = document.getElementById("card")



function renderOneArtist(artwork) {
    // Build Artist


    const artcard = document.createElement('li')
    artcard.className = 'artcard'
    artcard.innerHTML = `
   <img src="${artwork.imageURL}">
    <div>
    <h4>${artwork.artistName}</h4>
    <p>
        <span class="like-count">${artwork.likes}</span> Liked
    </p>
    <p>${artwork.title}</p>
    <p>${artwork.date}</p>

    </div> `



    {/* add artist to dom */ }
    console.log(artcard)

    document.querySelector('#artist-list').append(artcard)
}
console.log("hi from mainjs")

// function initialize() {
//     artdata.forEach(artist => renderOneArtist(artist))
// }
// initialize()
function getAllArtists() {
    fetch('http://localhost:3000/artdata')
        .then(res => res.json())
        .then(artdata => artdata.forEach(artwork => renderOneArtist(artwork)))

}

// {/* }get data and render artists to dom*/ }

function initialize() {
    getAllArtists()
    // console.log("get all artists")
}
initialize()




{
    document.addEventListener("DOMContentLoaded", function () {
        console.log('The DOM has loaded');
        // const createButton = document.createElement("button")
        // createButton.innerText = 'like'
        // document.body.append(createButton);
        // document.getElementById("button").addEventListener("click", function () {
        //     alert("click")
        // })
    });

    console.log("this loads the dom");

}
const divs = document.querySelectorAll('div')
const addGlobalEventListener = document

addGlobalEventListener("mouseover", "div", event => {
    const colors = ["red", "green", "yellow", "blue"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    divs.style.borderColor = randomColor;
    divs.style.borderWidth = '5px';
    divs.style.borderStyle = 'solid';
    divs.style.transition = 'border-color 0.5s, border-width 0.5s';

    setTimeout(() => {
        divs.style.borderColor = '';
        divs.style.borderWidth = '';
        divs.style.borderStyle = '';
        divs.style.transition = '';

    })
},

    function addGlobalEventListener(type, selector, callback) {
        document.addEventListener(type, event => {
            if (e.target.matches(selector)) callback(event)
        })
    }

)


// const image = document.querySelector("#artist-list");
// function toggleGlow() {
//     image.classList.toggle('glow')
// }
// image.addEventListener("click", toggleGlow);


console.log("works")


// function addGlow(card) {
//     const colors = ["red", "green", "yellow", "blue"];
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     card.style.borderColor = randomColor;
//     card.style.borderWidth = '5px';
//     card.style.borderStyle = 'solid';
//     card.style.transition = 'border-color 0.5s, border-width 0.5s';

//     setTimeout(() => {
//         card.style.borderColor = '';
//         card.style.borderWidth = '';
//         card.style.borderStyle = '';
//         card.style.transition = '';

//         // const cards = document.getElementsByClassName("card");
//         for (const card of cards) {
//             card.addEventListener("mouseover", addGlow("card"));
//         }
//         // addGlow()

//     }, 1000);
// }
// addGlow()

// const glow = document.getElementsByClassName("card");
// glow.addEventListener("mouseover", addGlow());


// function addGlow(div) {
//     "mouseover", e => {
//         function addGlobalEventListener(type, selector, callback) {
//             document.addEventListener(type, e => {
//                 if (e.target.matches(selector)) callback(e)
//             })
//         }

//     }
//     const colors = ["red", "green", "yellow", "blue"];
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     div.style.borderColor = randomColor;
//     div.style.borderWidth = '5px';
//     div.style.borderStyle = 'solid';
//     div.style.transition = 'border-color 0.5s, border-width 0.5s';

//     setTimeout(() => {
//         div.style.borderColor = '';
//         div.style.borderWidth = '';
//         div.style.borderStyle = '';
//         div.style.transition = '';

//         const card = document.getElementsByClassName("artcard");
//         for (const artcard of card) {
//             artcard.addEventListener("mouseover", addGlow("artcard"));
//         }
//         addGlow(div)
//         const glow = document.getElementsByClassName("artcard");
//         glow.addEventListener("mouseover", addGlow());
//     }, 1000);
// }
// console.log(addGlow)

// function addGlobalEventListener(type, selector, callback) {
//     document.addEventListener(type, e => {
//         if (e.target.matches(selector)) callback(e)
//     })
// }


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
