import React, { Component } from 'react';

import ProductThumbnails from './product-thumbnails';



class ProductImage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedImage: this.props.product.properties.imageURL.large
        }
    }

    handleImageClick(event, product) {
        var thumbnail = event.target
        console.log(this.props.product)
        this.setState({
            selectedImage: thumbnail.dataset.largeimage
        })
    }


    render() {

        return (
            <section className="product-image">
                <div>
                    <img src={`${this.state.selectedImage}.jpg`} alt="Apron Laid Out Flat" />
                </div>
                <div className="product-thumbnails">
                    <ul className="product-thumbnails__images">
                    {this.props.products.map((product, i) => {
                        return (
                            <ProductThumbnails selected={product} handleImageClick={this.handleImageClick.bind(this)} key={product.id}/>
                        )
                    })}
                    </ul>
                </div>
            </section>
        )
    }
}
    

export default ProductImage;