import React from 'react'
import { Boutton } from './Boutton'
import './HeroSection.css'
/* === page d acceuil  ====== */
function HeroSection() {
    return (<div className='heros-container'>
            <h1>ACHETEZ VOTRE AUTO api </h1>
            <strong> 100% EN LIGNE</strong>
             <p>LE PROCESSUS EST SIMPLE, SANS CONTACT ET À VOTRE ENTIÈRE SATISFACTION.</p>
            <div className='btns-hero'>
                <Boutton lien="/Occaz-Auto/vehicule-usager" className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>Trouver votre Auto</Boutton>
                 <Boutton lien="/Occaz-Auto/A-vendre" className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>Vendre votre Auto</Boutton>
            </div>  
        </div>
    )
}
export default HeroSection
