const currentYear = new Date().getFullYear();

// Insertar el año actual en el elemento con id "copyright-year"
document.getElementById('copyright-year').textContent = currentYear;

// Obtener la fecha de última modificación del documento
const lastModifiedDate = document.lastModified;

// Insertar la fecha de última modificación en el elemento con id "last-modified"
document.getElementById('last-modified').textContent = lastModifiedDate;