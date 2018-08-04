import React, { Component } from 'react';

import axios from 'axios';

import LargeProductImage from './product-image-large';
import ProductThumbnails from './product-thumbnails';

class ProductImage extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        var {catalog} = this.props;

        return (
            <section className="product-image">

            <LargeProductImage selectedImage={this.props.selectedImage} key={this.props.currentProduct.id} />

                <div className="product-thumbnails">
                    <ul className="product-thumbnails__images">
                        {catalog.map((product, i) => {
                            return (
                                <ProductThumbnails selected={product} productID={i}  handleImageClick={this.props.handleImageClick} key={product.id} />
                            )
                        })}
                    </ul>
                </div>

            </section>
        )
    }
}


export default ProductImage;