const botonBurger = document.getElementById('burger');
const misBotones = document.getElementById('botones-mas')
const navBar = document.getElementById('nav-menu')

botonBurger.addEventListener("click" , function(event){
    event.preventDefault();
    navBar.classList.add('max-[600px]:block')
    misBotones.classList.add('max-[600px]:flex')
});
<<<<<<< HEAD

=======
>>>>>>> dbb58109acc18942dfab67216dbc079f3c4dbd80
