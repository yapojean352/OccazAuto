import React from 'react'
import './FiltreTest.css'
import {useState,useEffect}  from 'react';
import HeadFilterCat from './HeadFilterCat'
function FiltreTest() {
    const [click,setClick]= useState(true);
    const handleClick = ()=>setClick(!click);
    return (
        <div>
              <header ><span className="menu-p "></span></header>
    <nav id="nav" aria-label="Arborescence principale">
        <ul className="menu">
        <li> <a href="#">Audi</a><ul>
    <li><a href="admine.php?page=insertionCommandeNews">Tout</a></li>
    <li><a href="admine.php?page=insertionCommande">A</a></li>
    <li><a href="admine.php?page=listeCommande">S</a></li>
</ul>
</li>
       
<li> <a href="#">BMW</a>

                <ul>
                    <li><span></span><a href="admine.php?page=insertionCommandeNews">Tout</a></li>
                    <li><a href="admine.php?page=insertionCommande">A</a></li>
                    <li><a href="admine.php?page=listeCommande">S</a></li>
                </ul>
        </li>
       
            <li> <a href="#">Mercedes</a>

                <ul>
                    <li><a href="admine.php?page=insertionCommandeNews">Tout</a></li>
                    <li><a href="admine.php?page=insertionCommande">A</a></li>
                    <li><a href="admine.php?page=listeCommande">S</a></li>
                </ul>
            </li>

        </ul>


    </nav>
            
        </div>
    )
}

export default FiltreTest
