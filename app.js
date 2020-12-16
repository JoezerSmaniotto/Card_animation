// const hamburger = document.querySelector('#nav__toogle');
// const showMenu = document.querySelector('#nav__menu');


// hamburger.addEventListener('click',()=>{

//     showMenu.classList.toggle('active__Menu') 
// })

const showMenu = (toggleId, navId) => {
    const hamburger = document.getElementById(toggleId);
    const showMenu = document.getElementById(navId);
    const modal = document.getElementById('myModal');

    hamburger.addEventListener('click',()=>{
        showMenu.classList.toggle('active__Menu')
        modal.classList.toggle('activee')
    })

}

showMenu('nav__toogle','nav__menu')

// A C T I V E    A N D   R E M O V E   MENU 

    
    const navLink = document.querySelectorAll('.nav__link');

    function RemoveActive() {

        navLink.forEach(n => n.classList.remove('active')) 
        this.classList.add('active')
        
        // Close Menu ao clicar em um link
        const showMenu = document.getElementById('nav__menu');
        showMenu.classList.toggle('active__Menu')

        // Remove Modal
        const modal = document.getElementById('myModal');
        modal.classList.toggle('activee')
    }

    navLink.forEach(n => n.addEventListener('click',RemoveActive))


// C L O S E   M E N U      

window.onclick = function(event) {
   
    const modal = document.getElementById('myModal'),
    showMenu = document.getElementById('nav__menu');

    if (event.target == modal ) {
        showMenu.classList.toggle('active__Menu')
        modal.classList.toggle('activee')
        
    }
}

/* CHAMA API */ 

// function OpenModalCard(id){
//     let modal = document.getElementById("modal__card__id");
//     modal.style.display = 'block'

// }


// const cards = document.querySelectorAll('.card');

// cards.forEach( card => {
//     card.addEventListener('click',()=>{
//         let id = card.id;
//         OpenModalCard(id)
        
//     })
// })

// document.querySelector('.close').addEventListener('click',()=>{
//     let modal = document.getElementById("modal__card__id");
//     modal.style.display = 'none'
// })