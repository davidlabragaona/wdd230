const copyright = () => {
    let paragraph = document.querySelector('#first');
    paragraph.innerHTML = `&copy; ${(new Date().getFullYear())} David Labra Gaona | Buenos Aires - Argentina `;
};

const lastModified = () => {
    let paragraph = document.querySelector('#lastModified');
    paragraph.innerHTML = `Last modification: ${document.lastModified}`;
}

copyright();
lastModified();