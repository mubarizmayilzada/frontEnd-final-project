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


//faq section

const accordions = document.querySelectorAll('.faq-accordion-heading');
const accordionsDescription = document.querySelectorAll('.faq-accordion-description');
let accordionClickedTab = '';
let accordionClickedTabDescription = '';
accordions.forEach((tab) => {

    tab.addEventListener('click',(e) => {
        e.preventDefault();
        accordionClickedTab = tab.getAttribute("data-according");
        accordionsDescription.forEach((item) => {
            accordionClickedTabDescription = item.getAttribute("data-according-num");
                item.classList.add('height-0'); 
                if (accordionClickedTab === accordionClickedTabDescription) {
                            item.classList.remove('height-0');
            }
        })
    })
})