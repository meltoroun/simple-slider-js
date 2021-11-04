let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    (offset > 2570) ? offset = 0 : sliderLine.style.left = -offset + 'px';
    offset += 854;
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    (offset < 0) ? offset = 2570 : sliderLine.style.left = -offset + 'px';
    offset -= 854;
});

