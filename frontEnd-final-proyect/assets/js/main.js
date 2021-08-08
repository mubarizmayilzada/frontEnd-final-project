const languageChanger = document.querySelector("#language-aze");
const languageChangerIcon = document.querySelector(".drop-icon");
const languageDropDown = document.querySelector('.languages-wrapper');

languageChanger.addEventListener('click', function (e){
    e.preventDefault();
    languageChanger.classList.toggle('background-for-language-tab');
    languageDropDown.classList.toggle('d-none');
});
languageChangerIcon.addEventListener('click', function (e){
    e.preventDefault();
    languageChanger.classList.toggle('background-for-language-tab');
    languageDropDown.classList.toggle('d-none');
});
