const currentYear = new Date().getFullYear();

document.getElementById('copyright-year').textContent = currentYear;

const lastModifiedDate = document.lastModified;

document.getElementById('last-modified').textContent = lastModifiedDate;