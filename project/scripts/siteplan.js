const currentYear = new Date().getFullYear();

document.getElementById('copyright-year').textContent = currentYear;

const lastModifiedDate = document.lastModified;

document.getElementById('last-modified').textContent = lastModifiedDate;


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
