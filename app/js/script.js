
const hambugger = document.querySelector('.hambugger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')
const fadeElems = document.querySelectorAll('.has-fade')
const mobilemenu = document.querySelector('.mobilemenu')


hambugger.addEventListener('click', () => {

    console.log('hello world!!')

    if(header.classList.contains('open')){
        header.classList.remove('open')
        body.classList.remove('noscroll')
        overlay.classList.remove('fade-in')
        overlay.classList.add('fade-out')
        mobilemenu.classList.remove('mobile-fadeIn')
        mobilemenu.classList.add('mobile-fadeOut')


        // fadeElems.forEach(element => {
        //     element.classList.remove('fade-in')
        //     element.classList.add('fade-out')
        // })

    }
    else{
        body.classList.add('noscroll')
        header.classList.add('open')  
        overlay.classList.remove('fade-out')
        overlay.classList.add('fade-in')
        mobilemenu.classList.add('mobile-fadeIn')
        mobilemenu.classList.remove('mobile-fadeOut')
        

        // fadeElems.forEach(element => {
        //     element.classList.add('fade-in')
        //     element.classList.remove('fade-out') 
        // })
    }
})



const scrollLink = document.querySelector('.scroll')
const nav = document.querySelector('.nav')

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset
    const navHeight = nav.getBoundingClientRect().height

    if(scrollHeight > 300 ){
        scrollLink.classList.add('footer__showLink')
    }
    else{
        scrollLink.classList.remove('footer__showLink')
    }
    
})























