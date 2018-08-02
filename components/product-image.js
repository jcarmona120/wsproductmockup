import React, { Component } from 'react';
import LargeProductImage from './product-image-large';
import ProductThumbnails from './product-thumbnails';

class ProductImage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedImage: this.props.product.properties.imageURL.large,
        }

    }

    handleImageClick(event) {
        var thumbnail = event.target
        this.setState({
            selectedImage: thumbnail.dataset.largeimage,
        })
    }

    render() {

        return (
            <section className="product-image">
                <LargeProductImage selectedImage={this.state.selectedImage} key={this.props.product.id} />
                <div className="product-thumbnails">
                    <ul className="product-thumbnails__images">
                        {this.props.products.map((product, i) => {
                            return (
                                <ProductThumbnails selected={product} handleImageClick={this.handleImageClick.bind(this)} key={product.id} />
                            )
                        })}
                    </ul>
                </div>
            </section>
        )
    }
}


export default ProductImage;