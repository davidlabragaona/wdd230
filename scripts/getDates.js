function getLastModified() {
    return `Last Modification: ${document.lastModified}`;
}

function getCopyrightYear() {
    const name = 'David Labra Gaona';
    const course = 'WDD 230 Project';
    const date = new Date();
    return `&copy; ${date.getFullYear()} Lobos Chamber | <b>${name}</b> | ${course} | `;
}

document.querySelector("#copyright").innerHTML = getCopyrightYear();
document.querySelector("#lastModified").textContent = getLastModified();