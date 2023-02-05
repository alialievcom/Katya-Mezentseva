let menu = new Map([['char', 'character'], ['larg', 'larger'], ['small', 'smaller'],
    ['ser', 'series'], ['rus', 'russian']])


menu.forEach(MenuElements)
function MenuElements(value, key) {
    const key1 = document.getElementById(key);
    const value1 = document.getElementById(value);

    key1.addEventListener('click', function(){
        if(document.getElementById(value).classList.contains('grid_show') === false){
            value1.classList.toggle('grid_show');
            value1.classList.remove('grid_hide');
        } else {
            value1.classList.toggle('grid_hide');
            value1.classList.remove('grid_show');
        }
    });

}