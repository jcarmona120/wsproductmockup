import React, { Component } from 'react';

import ProductImage from '../product-image/product-image';
import ProductInformation from '../product-information/product-information';

class Product extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var {currentProduct, catalog} = this.props
        return (
            <main className="productGrid">
                <ProductImage 
                    catalog={catalog} 
                    currentProduct={currentProduct} 
                    selectedImage = {this.props.selectedImage}
                    handleImageClick = {this.props.handleImageClick}/>
                <ProductInformation catalog={catalog} currentProduct={currentProduct} />
            </main>
        );
    }
}

export default Product;