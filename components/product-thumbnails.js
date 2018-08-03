import React, { Component } from 'react';

import Product from './product';

class ProductThumbnails extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <li >
                <button onClick={this.props.handleImageClick} className="thumbnail">
                    <img src={`${this.props.selected.properties.imageURL.small}.jpg`}
                        data-productid = {`${this.props.productID}`}
                        alt="French Apron"
                        data-largeimage={`${this.props.selected.properties.imageURL.large}`} />
                </button>

            </li>
        )
    }

}

export default ProductThumbnails;