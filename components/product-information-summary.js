import React, { Component } from 'react';

class ProductSummary extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <h1 className="product-title">{this.props.productName}</h1>
                <p className="product-description">{this.props.product.properties.description}.</p>
                <ul className="product-bullets">
                    <li className="product-bullet-item"><span id="bullet">{'\u2022'}</span> Durable 100% cotton construction.</li>
                    <li className="product-bullet-item"><span id="bullet">{'\u2022'}</span>Adjustable neckband ensures a good fit.</li>
                    <li className="product-bullet-item"><span id="bullet">{'\u2022'}</span>Roomy front pockets hold small tools.</li>
                    <li className="product-bullet-item"><span id="bullet">{'\u2022'}</span>Machine-wash.</li>
                </ul>

                <div className="product-addtocart">
                    <p className="product-price">${`${this.props.product.properties.price}`}</p>
                    <input type="number" className="product-quantity" placeholder="QTY" />
                </div>

                {/** Requirement: Call Modal on Add To Cart click event **/}
                <button onClick={this.props.handleAddToCart}>
                    <img src="assets/button-add-to-cart.png" alt="Add to Cart Button" id="addToCart" />
                </button>
            </div>
        )
    }
}

export default ProductSummary;