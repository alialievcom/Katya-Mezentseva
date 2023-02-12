const clickx= document.getElementById('pencet');
const clickx2= document.getElementById('links-hide-menu');
const imgContent = document.querySelectorAll('.img-content-hover');


clickx.addEventListener('click', function(){
    clickx.classList.toggle('Diam');
    clickx2.classList.toggle('links-menu');
});


// var btn = $('#button');
//
// $(window).scroll(function() {
//     if ($(window).scrollTop() > 300) {
//         btn.addClass('show');
//     } else {
//         btn.removeClass('show');
//     }
// });
//
// btn.on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({scrollTop:0}, '300');
// });
//
//
// function showImgContent(e) {
//     for(var i = 0; i < imgContent.length; i++) {
//         x = e.pageX;
//         y = e.pageY;
//         imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
//     }
// };
//
// document.addEventListener('mousemove', showImgContent);