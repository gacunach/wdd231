const currentYear = new Date().getFullYear();
const currentyearelemnt = document.getElementById('currentyear');
const copyrightText = '&copy' + currentYear;
currentyearelemnt.innerHTML = copyrightText;
const lastmodifiedTS = document.lastModified;
const lastmodifiedDate = new Date(lastmodifiedTS);
const formattedDate = lastmodifiedDate.toLocaleString();
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = 'Last Modified: ' + formattedDate;

const url = "../data.json";
const container = document.querySelector('#cards'); 

async function getCompanies() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayCompanies(data.companies);
    } catch (error) {
        console.error('Error fetching company data:', error);
    }
}

function displayCompanies(companies) {
    container.innerHTML = '';
    companies.forEach(company => {
        const card = document.createElement('section');
        card.classList.add('company-card');

        const img = document.createElement('img');
        img.setAttribute('src', `images/${company.image}`);
        img.setAttribute('alt', company.name);
        img.setAttribute('loading', 'lazy');

        const name = document.createElement('h2');
        name.textContent = company.name;

        const address = document.createElement('p');
        address.textContent = `📍 ${company.address}`;

        const phone = document.createElement('p');
        phone.textContent = `📞 ${company.phone}`;

        const website = document.createElement('a');
        website.setAttribute('href', company.website);
        website.setAttribute('target', '_blank');
        website.textContent = 'Visit Website';

        const membership = document.createElement('p');
        membership.textContent = `Membership Level: ${company.membership}`;

        card.append(img, name, address, phone, website, membership);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', getCompanies);

