const imgs = document.querySelectorAll('.header-slider ul img');
const prevBtn = document.querySelectorAll('.control-prev');
const nextBtn = document.querySelectorAll('.control-next');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

changeSlide();

nextBtn.addEventListener('click', (e) => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
});


const scrollContailer = document.querySelectorAll('.products');
for (const item of scrollContailer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft +=evt.deltay;

    });
}
