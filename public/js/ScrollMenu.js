window.addEventListener("load", documentLoaded);

function documentLoaded() {



    /*=====================Ajout de symbole fleche au demmarage pour le menu de gauche ======================*/




    var liste = document.getElementById("nav");
     var menup = document.querySelector(".menu-p");
    var puceLi = document.querySelectorAll("#nav ul li ");
    var eli =puceLi.children;

    liste.addEventListener("click", CacherSousListe, false);
  
   for(var i=0; puceLi.length;i++){
       
        if(puceLi[i].lastElementChild.nodeName== "UL"){
            
            
           puceLi[i].firstElementChild.classList.add("plus");
          
        }     
   }
       
     
 
             


    //======== liste ul=================
 function CacherSousListe(evt) {
      //alert(evt.target.nodeName);
  
                  //  evt.target.classList.add("plus");
      if (evt.target.nodeName !== "UL") {

            if (evt.target.nextElementSibling.nodeName == "UL") {
                if (evt.target.nextElementSibling.style.display !== "block") {
                    evt.target.nextElementSibling.style.display = "block";
                 evt.target.classList.add("moins");
                    evt.target.classList.remove("plus");
                  
                } else {
                    evt.target.nextElementSibling.style.display = "none";
                    evt.target.classList.add("plus");
                    evt.target.classList.remove("moins");

                }
            }

        }

       
    }
}




// vous pouvez utiliser cette fonction de trace
// pour la mise au point de votre programmation JavaScript
// =======================================================

function trace(evt, msg) {
    msg = evt.type + " " +
        evt.target.nodeName + " " +
        evt.target.parentNode.nodeName + " " +
        evt.target.firstChild.nodeName + " " +
        evt.target.firstChild.nodeValue + " : " +
        msg;
    document.getElementById("trace").innerHTML += msg + "<br>";
}
