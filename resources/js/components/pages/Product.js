import React from 'react'
import Catalogue from '../Catalogue'
import ComFilterCards from '../ComFilterCards';
import '../Product.css';
/*   =====
 - page des produits en catalogue
 -les voitures sont  relies a leur detail respectif 

=====*/
export default function Product() {
    return (<>
          <div className='product-container'>
       <ComFilterCards/>
          </div>
          </> 
    )
}


