const cardContainer = document.getElementById("card-containter");


let urlParams = new URLSearchParams(location.search);
let characterId = urlParams.get("id");

fetch(`https://animation-backend.onrender.com/characters/9`)
  .then((res) => res.json())
  .then((data) => {
    cardContainer.innerHTML = `
        <div id="card">
            <h1 id="name">${data.name}</h1>
            <p id="showName">Show Name: ${data.showName}</p>
            <img src="${data.imageUrl}" id="card-img" width=200>
        </div>
        `;
  })