//alert("siema");


const firstname = 'Michal';
const age = 32;

console.log(
    'Witaj Drogi Odwiedzjacy, nazywam sie ${firstname} i mam ${age} lata'
    );

const heading = document.querySelector('.main__heading--js');

console.log(heading.innerHTML)

heading.innerHtml = `Witaj Drogi Odwiedzjacy, nazywam sie ${firstname} i mam ${age} lata`

const emptyParagraph = document.querySelector('.week-summary__description--js');
emptyParagraph.innerHTML = `Nawet uzupelnilem java script`
