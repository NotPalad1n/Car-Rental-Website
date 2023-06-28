import React from 'react'

import "../styling/Brands.css"

import BrandsData from '../data/BrandsData'

const Brands = () => {
    const [brands, setBrands] = React.useState(BrandsData)
    
    const brandElements = brands.map(brand => 
        <img key={brand.id} src={require('../images/brands/' + brand.logo + '.png')} alt="" className='car-logo'/>
    )

    return (
        <div className='brands'>
            {brandElements}
        </div>
    )
}

export default Brands