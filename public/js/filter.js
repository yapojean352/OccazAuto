window.addEventListener("load", documentLoaded);

function documentLoaded() {
    var clickFilter = document.querySelector(".filter-icon .fa-sliders");
    var filterCard = document.querySelector(".filter-produit");
    clickFilter.addEventListener("click", navtoggleClick, false);
    //=== click filter to display filter card=================
    function navtoggleClick(evt) {
      filterCard.classList.toggle('filter-open');
}
}


