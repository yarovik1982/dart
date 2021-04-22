document.addEventListener('DOMContentLoaded', ()=> {
    const burger = document.querySelector('.burger-menu');
    const burgerMenu = document.querySelector('.header__list');
console.log(burger);
console.log(burgerMenu);
    burger.addEventListener('click', ()=>{
        burger.classList.toggle('active');
        burgerMenu.classList.toggle('show');
    });

    const accordeon = ()=>{
        const accordeonHeaderAll = document.querySelectorAll('.accordeon-header');
        const accordeonBodyAll = document.querySelectorAll('.accordeon-body');

        
        
}
    accordeon();

    // function accordion() {
    //     const servicesInnerAll = document.querySelectorAll('.services-inner');

    //     servicesInnerAll.forEach(element => {
    //         element.addEventListener('click', event =>{
    //             target = event.target;
    //             servicesInnerAll.forEach(element =>{
    //                 element.classList.remove('show-block');
    //             })
    //             element.classList.add{'show-block'};
    //         })
    //     })
    //     console.log(servicesInnerAll);

    // }
    // accordion();
});


// $(document).ready(function() {
    // $('.burger-menu').click(function() {
        // $('.header-list, .burger-menu').toggleClass('active');
        // $('.menu-body').toggleClass('body-active');
    // })
// });