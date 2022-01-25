window.addEventListener("load", documentLoaded);

function documentLoaded() {

    var menup = document.querySelector(".menu-p");

    var menuD = document.querySelector("#nav>ul");
    //  menuD.classList.add('fermerC');
    
    menup.addEventListener("click", navtoggleClick, false);
    //=== click du menu pour afficher le menu deroulant=================
    
    function navtoggleClick(evt) {
//  menuD.classList.remove('fermerC');
        menuD.classList.toggle('fermerC');

}

}


