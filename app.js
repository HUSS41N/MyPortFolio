window.addEventListener('scroll',()=>{
    let main_header = document.getElementById('main-header')
    main_header.classList.toggle('scrolling-active',window.scrollY > 0)
})
// Nav
const navigation = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.collapse')
    const main_header = document.querySelector('#main-header')
   
    burger.addEventListener('click',()=>{
        main_header.classList.toggle('nav-background')
        nav.classList.toggle('burger-active')
        burger.classList.toggle('toggle')
    })
}
navigation()