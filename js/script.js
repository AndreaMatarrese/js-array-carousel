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
    const eleImg = document.createElement('img');
    eleImg.src = eleImages[i];
    eleImg.classList.add('slider-img');


if(i === 0){

        eleImg.classList.add('active');
    }  
     eleSlider.append(eleImg);
}
// const listEleImg =  document.querySelectorAll('slider-image');
const listEleImg = document.querySelectorAll('.slider-img');
let activeIndex=0;


// freccia destra
btnNext.addEventListener('click', function(){
    listEleImg[activeIndex].classList.remove('active');
    

    activeIndex++;

    listEleImg[activeIndex].classList.add('active')
    // bntPrev.classList.remove('hidden');
    eleBtnLeft.classList.remove('hidden');
	if (activeIndex === listEleImg.length - 1) {
		eleBtnRight.classList.add('hidden');
	}
    
});

// freccia sinistra
bntPrev.addEventListener('click', function(){
    listEleImg[activeIndex].classList.remove('active');

    activeIndex--;

    listEleImg[activeIndex].classList.add('active')
    eleBtnRight.classList.remove('hidden');
	if (activeIndex === 0) {
		eleBtnLeft.classList.add('hidden');
	}
})