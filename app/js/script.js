
const btnHambuger = document.querySelector('#btnHambuger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')

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

const body = document.querySelector('body')

btnHambuger.addEventListener('click', () => {
    // header.classList.toggle('open')

    if(header.classList.contains('open')){

        body.classList.remove('noscroll')
        header.classList.remove('open')
        fadeElems.forEach(elem => {
            elem.classList.remove('fade-in')
            elem.classList.add('fade-out')
        })
    }
    else{
         body.classList.add('noscroll')
        header.classList.add('open') 
        
        fadeElems.forEach(elem => {
            elem.classList.remove('fade-out')
            elem.classList.add('fade-in') 
        })
    }


})