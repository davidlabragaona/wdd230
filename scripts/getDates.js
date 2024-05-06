function getLastModified() {
    return `Last Modification: ${document.lastModified}`;
}

function getCopyrightYear() {
    const name = 'David Labra Gaona';
    const location = 'Buenos Aires, Argentina';
    const date = new Date();
    return `${date.getFullYear()} - ${name} - ${location}`;
}

document.querySelector("footer").firstElementChild.textContent = getCopyrightYear();
document.querySelector("#lastModified").textContent = getLastModified();