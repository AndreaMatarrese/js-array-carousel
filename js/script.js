// array
const eleImages=[
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
]
// dichiarazione variabili
const eleSlider = document.querySelector('.slider')
const eleControls= document.querySelector('.controls')
const btnNext = document.querySelector('.next')
const bntPrev = document.querySelector('.prev')

for (i=0; i < eleImages.length; i++){
    // creo l'immagine
    const eleImg = document.createElement('img')
    eleImg = eleImages[i];
   
    // aggiungo all'immagine una classe
    eleImg.classList.add('slider-image')

    if(i==0)
}