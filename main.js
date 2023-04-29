console.log("works")
fetch("http:localhost:3000/artworks")
    .then(response => response.json())
    .then(artworks => {
      const container = document.querySelector("ul#artworkList");  
      artworks.forEach(artwork => {
      })
      
      });


