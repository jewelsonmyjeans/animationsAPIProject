window.onload = () => {
    let cardContainer = document.getElementById("card-container");

    fetch(`https://animation-backend.onrender.com/characters`)
        .then((res) => res.json())
        .then((characters) => {
            // Check if characters is an array
            if (Array.isArray(characters)) {
                characters.forEach((character) => {
                    cardContainer.innerHTML += `
                        <div class="card-body">
                            <h2 class="card-title" id="character-name">${character.name}</h2>
                            <p class="card-text" id="show-name">Show Name: ${character.showName}</p>
                            <img src="${character.imageUrl}" alt="${character.name}" class="character-image">
                        </div>
                    `;
                });
            } else {
                console.error('Invalid response format. Expected an array of characters.');
            }
        })
        .catch((error) => {
            console.error('Error fetching characters:', error);
        });
};
