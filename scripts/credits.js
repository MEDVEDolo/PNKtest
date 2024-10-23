let partners = document.querySelector(".container_partners");
partners.style.bottom = '-240px';
partners.style.left = '50px';
let pos = -240;
let userSection = 0;

function credits() {
    userSection = localStorage.getItem('userSectionId', userSectionId);
    if (userSection == sectionList.length - 1) {
        pos += 1;
        partners.style.bottom = `${pos}px`;
    } else {
        partners.style.bottom = '-240px';
        pos = -240;
    }
}
setInterval(credits, 20)