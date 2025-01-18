const currentYear = new Date().getFullYear();

document.getElementById('copyright-year').textContent = currentYear;

const lastModifiedDate = document.lastModified;

document.getElementById('last-modified').textContent = lastModifiedDate;

const hambutton = document.querySelector('#hambutton');

hambutton.addEventListener('click', () => {
  document.querySelector('h1').classList.toggle('show');
  document.querySelector('#navmenu').classList.toggle('show');
  hambutton.classList.toggle('show');
});

function toggleActive(element) {
  element.classList.toggle("active");
}