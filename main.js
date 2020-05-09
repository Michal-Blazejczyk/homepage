//alert("siema");


const firstname = 'Michal';
const age = 32;

console.log(
    'Witaj Drogi Odwiedzjacy, nazywam sie ${firstname} i mam ${age} lata'
    );

const heading = document.querySelector('.main-heading--js');

console.log(heading.innerHTML)

heading.innerHtml = `Witaj Drogi Odwiedzjacy, nazywam sie ${firstname} i mam ${age} lata`
console.log(heading)