const btnHambugerMenu = document.querySelector('#btnHamburgerMenu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHambugerMenu.addEventListener('click',function(){
    console.log("click hamburger");

    if(header.classList.contains('open')) {//Close hamburger Menu
        header.classList.remove('open');
        fadeElems.forEach(function(element) {
            element.classList.add('fade-out');
             element.classList.remove('fade-in');
        });

        

    } else {//Open hamburger Menu 
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
       
        
    }
});