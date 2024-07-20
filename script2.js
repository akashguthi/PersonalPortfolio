const homeButton = document.querySelector("#home-button");
const aboutButton = document.querySelector("#about-button");
const educationButton = document.querySelector("#education-button");
const skillsButton = document.querySelector("#skills-button");
const contactButton = document.querySelector("#contact-button");
const homeSection = document.querySelector(".home-d");
const aboutSection = document.querySelector(".about-d");
const educationSection = document.querySelector(".education-d");
const skillsSection = document.querySelector(".skills-d");
const contactSection = document.querySelector(".contact-d");
const defaultContent = document.querySelector(".demo-d");
function showSection(sectionToShow) {
    [homeSection, aboutSection, educationSection, skillsSection, contactSection].forEach(section => {
        section.classList.add("hide");
    });
    sectionToShow.classList.remove("hide");
    defaultContent.classList.add("hide");
}
homeButton.addEventListener("click", () => {
    showSection(homeSection);
});
aboutButton.addEventListener("click", () => {
    showSection(aboutSection);
});
educationButton.addEventListener("click", () => {
    showSection(educationSection);
});
skillsButton.addEventListener("click", () => {
    showSection(skillsSection);
});
contactButton.addEventListener("click", () => {
    showSection(contactSection);
});
