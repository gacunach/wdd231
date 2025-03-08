
const currentYear = new Date().getFullYear();

const currentyearelemnt = document.getElementById('currentyear');

const copyrightText = '&copy' + currentYear;

currentyearelemnt.innerHTML = copyrightText;

const lastmodifiedTS = document.lastModified;

const lastmodifiedDate = new Date(lastmodifiedTS);

const formattedDate = lastmodifiedDate.toLocaleString();

const lastModifiedElement = document.getElementById('lastModified');

lastModifiedElement.textContent = 'Last Modified: ' + formattedDate;

function toggleMenu() {
    document.querySelector("nav").classList.toggle("active");
}
