window.onload = () => {
    let urlParams = new URLSearchParams(location.search);
    let characterId = urlParams.get('id');
    let cardContainer = document.getElementById("card-container");

    fetch(`http://localhost:8080/characters/${characterId}`)
        .then((res) => res.json())
        .then((character) => {
            cardContainer.innerHTML = `
                <div class="card-body">
                    <h2 class="card-title" id="character-name">Name: ${character.name}</h2>
                    <p class="card-text" id="show-name">Show Name: ${character.showName}</p>
                    <img src="${character.imageUrl}" alt="${character.name}" class="character-image">
                </div>
            `;
        })
        .catch((error) => {
            console.error('Error fetching character:', error);
        });
};