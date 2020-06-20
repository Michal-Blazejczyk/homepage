




/* const deathStar = {
  diameter: 12000,
  fire: (target) => {
      console.log(`${target} destroyed`)
  },
  isOperating: true,
  levels: 357,
  name: 'Death star',
  population: 10000,
  isLightOn: true,
  commander: {
      name: 'Darth Vader',
      age: 44
  }  
}
deathStar.fire('Rebel ship')
//console.log(deathStar.name)

//-------------------------------------funkcje--------------------------------
  //alert("siema");


const firstName = 'Michal';
const age = 32;

 console.log(
    'Witaj Drogi Odwiedzjacy, nazywam sie ${firstname} i mam ${age} lata'
    );  */
    const firstName = 'Michal';
    const age = 32;
const heading = document.querySelector(".main__heading--js");

//console.log(heading.innerHTML)

heading.innerHtml = `Witaj Drogi Odwiedzjacy, nazywam sie ${firstName} i mam ${age} lata`; 

const emptyParagraph = document.querySelector('.week-summary__description--js');
emptyParagraph.innerHTML = `Nawet uzupelnilem java script`;


/* function greet(age, firstName) {
    console.log(`Witaj drogi odwiedzajacy nazywam sie ${firstName} i mam ${age}lata`);
}

greet(18, "Miki") */
 


function createContent (querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}
createContent('.week-summary__description--js','Witaj Swiecie');

createContent('.week-summary__title--js','Podmienimy tekst');  

/* if ('java' != 'javascript') {
    console.log
}     */


const button = document.querySelector(".acton--js");

const myClick = ()=> {
    const heading = document.querySelector('.main__heading--js');
    heading.innerHtml = `Witaj Drogi Odwiedzjacy, nazywam sie ${firstName} i mam ${age} lata`;
    heading.classList.remove('main__heading');
}
button.addEventListener('click', myClick );

const hamburger = document.querySelector('.hamburger--js') 

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})