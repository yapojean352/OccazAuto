import React from 'react'
import CardFilterClas from '../CardFilterClas';
import ComFilterCardsCons from '../ComFilterCardsCons';
import '../Product.css';
/*   =====
 - page des produits en catalogue
 -les voitures sont  relies a leur detail respectif 
 import ComFilterCards from '../ComFilterCards';
import ComFilterCardsCons from '../ComFilterCardsCons';
=====*/
export default function Product() {
    return (<>
          <div className='product-container'>
     {/* <CardFilterClas/> */}
     <ComFilterCardsCons/>
          </div>
          </> 
    )
}


