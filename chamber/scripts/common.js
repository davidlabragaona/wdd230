const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
const darkButton = document.querySelector("#drkBtn");
const main = document.querySelector("main");

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

/*darkButton.addEventListener('click', () => {
    main.classList.toggle("dark");
    card.classList.toggle("dark");

});*/
