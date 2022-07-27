
import  { Component } from "react";
import './Filters.css';

class Filters extends Component {
    
    constructor(props){
        super(props);
    }
  render() {
    return (
    <div>
         <button onClick={this.handleEvent}>Click on me</button>
              <header><span className="menu-p">Modedel et marques <strong>crochet</strong></span></header>
    <nav id="nav" aria-label="Arborescence principale">
        <ul className="menu">
            <li> <a href="#"><span className="iconify" data-inline="false" data-icon="gridicons:product-downloadable"  data-flip="horizontal"></span>
                    Articles</a>
                <ul>

                    <li><a href="#"> Gestion des produits</a>
                        <ul>
                            <li><a href="admine.php?page=insertionProduit">ajout un produits</a></li>

                            <li><a href="admine.php?page=listeProduit">liste des produits</a></li>
                        </ul>
                    </li>

                    <li><a href="#">Gestion des categories</a>
                        <ul>
                            <li><a href="admine.php?page=insertionCategorie">ajout une categories</a></li>

                            <li><a href="admine.php?page=listeCategorie">listes des categories</a></li>
                        </ul>
                    </li>

                </ul>
            </li>
       
            <li> <a href="#"><span className="iconify" data-inline="false" data-icon="simple-line-icons:people"  data-flip="horizontal"></span>
                    Tiers</a>
                <ul>

                    <li><a href="#">gestion des clients</a>
                        <ul>
                            <li><a href="admine.php?page=insertionClient"> ajout un client</a></li>

                            <li><a href="admine.php?page=listeClient">liste des clients</a></li>
                        </ul>
                    </li>
              
                    <li><a href="#"> gestion des vendeurs</a>
                        <ul>

                            <li><a href="admine.php?page=insertionVendeurs">ajout un vendeur</a></li>

                            <li><a href="admine.php?page=listeVendeur">liste des vendeurs</a></li>
                        </ul>
                    </li>
                    <li><a href="#">gestion des gestionnaires</a>
                        <ul>
                            <li><a href="admine.php?page=insertionGestionnaire">ajout un gestionnaire</a></li>

                            <li><a href="admine.php?page=listeGestionnaire">listes gestionnaire</a></li>
                        </ul>
                    </li>
                    <li><a href="admine.php?page=listeUsers">liste des utilisateurs</a></li>
                   
                </ul>
            </li>
       
            <li> <a href="#"><span className="iconify" data-inline="false" data-icon="gridicons:product-external"  data-flip="horizontal"></span>commandes</a>

                <ul>
                    <li><a href="admine.php?page=insertionCommandeNews">ajout une nouvelle commande</a></li>
                    <li><a href="admine.php?page=insertionCommande">ajout commande client existant</a></li>
                    <li><a href="admine.php?page=listeCommande">liste des commandes</a></li>
                </ul>
            </li>
            <li><a href="#"><span className="iconify" data-inline="false" data-icon="mdi:settings-transfer"  data-flip="horizontal"></span>administrateur</a>

            </li>
           

        </ul>


    </nav>
   
            
        </div>
    );
  }
  showNav() {
    this.sideNav.show();
  }
}

export default Filters;
