function follow() {    
    var para_element = document.getElementsByClassName("parallax-scroll");
    
    for (let i = 0; i < para_element.length; i++) {
        let paratop = para_element[i].getBoundingClientRect().top;
        if (paratop < window.innerHeight) {
            para_element[i].style.backgroundPositionY = (window.innerHeight - paratop) * 0.5 + "px";
        }
    }
    
}

window.addEventListener("unload", function() {
    this.scrollTo(0, 0);
});
window.addEventListener("scroll", follow);