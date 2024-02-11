const slides = document.querySelectorAll(".slide")
var counter = 0;

slides.forEach( //forEach loop ask you for callback and in callback it provide two things 1st slides and 2nd keys(index) (slide and index)
    (slide, index) => {
        slide.style.left = `${index * 100}%` //1st slide index 0 so it will be 0 * 100% away 2nd 1 * 100 3rd 2 * 100 and so on.
    }
)

const goPrev = () => {
    if(counter==0){
        counter= slides.length - 1;
        slideImage();
    }else{
        counter--;
        slideImage()
    }
}

const goNext = () => {
    if(counter== slides.length - 1){
        counter= 0;
        slideImage();
    }else{
        counter++;
        slideImage()
    }
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}