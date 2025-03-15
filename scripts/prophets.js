
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    
    const data = await response.json();

    console.table(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        // Create a section element for the card
        let card = document.createElement("section");
        card.classList.add("card");

        // Create an h2 element for the prophet's full name
        let fullName = document.createElement("h2");
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Create an img element for the prophet's portrait
        let portrait = document.createElement("img");
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy"); // Improves page load performance
        portrait.setAttribute("width", "200");
        portrait.setAttribute("height", "250");

        // Append elements to the card section
        card.appendChild(fullName);
        card.appendChild(portrait);

        // Append the card section to the "cards" container
        cards.appendChild(card);
    });
};
const filterProphets = async (filterType) => {
    const response = await fetch(url);
    const data = await response.json();
    let filteredProphets;

    switch (filterType) {
        case 'born-utah':
            filteredProphets = data.prophets.filter(prophet => prophet.birthplace.includes("Utah"));
            break;
        case 'born-outside-us':
            filteredProphets = data.prophets.filter(prophet => !prophet.birthplace.includes("United States"));
            break;
        case 'age-95plus':
            filteredProphets = data.prophets.filter(prophet => (prophet.death - prophet.birth) >= 95);
            break;
        case 'children-10plus':
            filteredProphets = data.prophets.filter(prophet => prophet.numofchildren >= 10);
            break;
        case 'president-15years':
            filteredProphets = data.prophets.filter(prophet => prophet.length !== null && prophet.length >= 15);
            break;
        default:
            filteredProphets = data.prophets;
    }

    displayProphets(filteredProphets);
};

// Add event listeners to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterProphets(button.dataset.filter);
    });
});

// Call the function to fetch and display the data
getProphetData();