let menu = new Map([['char', 'character'], ['larg', 'larger'], ['small', 'smaller'],
    ['ser', 'series']])


menu.forEach(MenuElements)
function MenuElements(value, key) {
    const key1 = document.getElementById(key);
    const value1 = document.getElementById(value);
    key1.addEventListener('click', function(){
        if(document.getElementById(value).classList.contains('grid_show') === false){
            value1.classList.toggle('grid_show');
            value1.classList.remove('grid_hide');
            key1.classList.remove("arrow-line")
            key1.querySelector("img").classList.remove("down")
            key1.querySelector("img").classList.toggle("up")
            key1.getElementsByClassName("line_upper")[0].classList.toggle("hide")


        } else {
            value1.classList.toggle('grid_hide');
            value1.classList.remove('grid_show');
            key1.classList.toggle("arrow-line")
            key1.querySelector("img").classList.remove("up")
            key1.querySelector("img").classList.toggle("down")
            key1.getElementsByClassName("line_upper")[0].classList.remove("hide")
        }
    });

}