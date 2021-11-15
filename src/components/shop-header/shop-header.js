import React from 'react';
import './shop-header.css'
import {Link} from 'react-router-dom'

const ShopHeader = ({numItems, total}) => {
    return(
        <header id='shop-header' className='row'>
            <Link to='/'>
                <div href="#" className='logo text-dark'>
                    Amazing Book Shop
                </div>
            </Link>
            <Link to='/cart'>
                <div className='shopping-cart'>
                    <i className='cart-icon fa fa-shopping-cart'>
                        {numItems} items (${total})
                    </i>
                </div>
            </Link>
            
            
        </header>
    )
}

export default ShopHeader