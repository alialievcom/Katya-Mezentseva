import Frame from 'https://cdn.jsdelivr.net/gh/ofekN/Frame/src/frame.js'


let chapters = new Map([
    ['ser', 'series']])

chapters.forEach(ChaptersElements)
function ChaptersElements(value, key) {
    let num = 0
    let slide = '.slide' +'_' + key
    let slides = [...document.querySelectorAll(slide)]
    let left = '.left-button' + '_' + key
    let right = '.right' + '_' + key
    console.log(key, slide, left, right, slides)


    slides.forEach((slide, i) => {
        if (i > 0) slide.style.left = (100) + '%'
    })

    function moveSlideNext(n) {
        if (n === 0) {
            slides[0].style.left = '100%'
            Frame.run(slides[slides.length - 1], {left: '-100%', duration: .5})
            Frame.run(slides[n], {left: '0px', duration: .5})
        } else {
            slides[n].style.left = '100%'
            slides[n - 1].style.left = '0%'
            Frame.run(slides[n - 1], {left: '-100%', duration: .5})
            Frame.run(slides[n], {left: '0px', duration: .5})

        }

    }


    function moveSlidePrev(n) {


        if (n === 0) {

            slides[n].style.left = '-100%'
            slides[n + 1].style.left = '0px'


            Frame.run(slides[n + 1], {left: '100%', duration: .5})
            Frame.run(slides[n], {left: '0px', duration: .5})
        } else if (n === slides.length - 1) {
            slides[n].style.left = '-100%'
            slides[0].style.left = '0px'

            Frame.run(slides[0], {left: '100%', duration: .5})
            Frame.run(slides[n], {left: '0px', duration: .5})
        } else {

            slides[n].style.left = '-100%'
            slides[n + 1].style.left = '0px'

            Frame.run(slides[n + 1], {left: '100%', duration: .5})
            Frame.run(slides[n], {left: '0px', duration: .5})
        }

    }


    document.querySelector(right).addEventListener('click', () => {
        if (num < slides.length - 1) {
            num += 1
            moveSlideNext(num)
        } else {
            num = 0
            moveSlideNext(num)
        }
    })

    document.querySelector(left).addEventListener('click', () => {
        if (num > 0) {
            num -= 1
            moveSlidePrev(num)
        } else {
            num = slides.length - 1
            moveSlidePrev(num)

        }

    })
}