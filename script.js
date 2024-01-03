function myfunction(){
    var x= document.getElementById("navv");

    if (x.className === "nav"){
        x.className += " responsive";
    }

    else{
        x.className = "nav";
    }
    

}


let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplays) =>{
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplays.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(counter);
        }

     }, duration);
});




let currentIndex = 0;
function showSlide(index){
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index < 0){
        index = totalSlides - 1;
    }
    else if (index >= totalSlides){
        index = 0;
    }
    currentIndex = index;
    const translateValue = -index * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
}
    function prevSlide() {
        showSlide(currentIndex - 1);
    }
    function nextSlide() {
        showSlide(currentIndex + 1);
    }