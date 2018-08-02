import React, { Component } from 'react';
import Product from './product';

class ProductThumbnails extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <li id={`${this.props.selected.id}`}>
                <button onClick={this.props.handleImageClick} className="thumbnail">
                    <img src={`${this.props.selected.properties.imageURL.small}.jpg`}
                        alt="French Apron"
                        data-largeimage={`${this.props.selected.properties.imageURL.large}`} />
                </button>

            </li>
        )
    }

}

export default ProductThumbnails;