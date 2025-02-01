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

const temples = [
    {
        templeName: "Buenos Aires Argentina Temple",
        location: "Buenos Aires, Argentina",
        dedicated: "2012, September, 9",
        area: 30659,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
    },
    {
        templeName: "Freiberg Germany Temple",
        location: "Freiberg, Germany",
        dedicated: "2016, September, 4",
        area: 21500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/freiberg-germany-temple/freiberg-germany-temple-16459-main.jpg"
    },
    {
        templeName: "Guatemala City Guatemala Temple",
        location: "Guatemala City, Guatemala",
        dedicated: "1984, December, 14-16",
        area: 11610,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-6415-main.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019, March, 10-12",
        area: 41010,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
    {
        templeName: "Cebu City Philippines Temple",
        location: "Cebu City, Philippines",
        dedicated: "2010, June, 13",
        area: 29556,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/133-Cebu-City-Philippines-Temple.jpg"
    },
    {
        templeName: "Regina Saskatchewan Temple",
        location: "Regina, Saskatchewan",
        dedicated: "1999, November, 14",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/regina-saskatchewan-temple/regina-saskatchewan-temple-13301-main.jpg"
    },
    {
        templeName: "Winter Quarters Nebraska Temple",
        location: "Winter Quarters, Nebraska",
        dedicated: "2001, April, 22",
        area: 16000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/winter-quarters-nebraska-temple/winter-quarters-nebraska-temple-317-main.jpg"
    },
    {
        templeName: "Hamilton New Zealand Temple",
        location: "Hamilton, New Zealand",
        dedicated: "2022, October, 16",
        area: 45251,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/hamilton-new-zealand-temple/hamilton-new-zealand-temple-29744-main.jpg"
    },
    {
        templeName: "Laie Hawaii Temple",
        location: "Laie, Hawaii",
        dedicated: "2010, November, 21",
        area: 42100,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg"
    }

];

createTempleCard();

function createTempleCard() {
    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    });
}