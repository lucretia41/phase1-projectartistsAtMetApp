console.log("works")
fetch("http:localhost:3000/art").then(response => response.json()).then(json => console.log(json))
