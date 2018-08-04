import React, { Component } from 'react';

class ProductSummary extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        var {currentProduct} = this.props 
        
        return (
            <div>
                <h1 className="product-title">{currentProduct.name}</h1>
                <p className="product-description">{currentProduct.properties.description}.</p>
                <ul className="product-bullets">
                    <li className="product-bullet-item"><span id="bullet">{'\u2022'}</span> Durable 100% cotton construction.</li>
                    <li className="product-bullet-item"><span id="bullet">{'\u2022'}</span>Adjustable neckband ensures a good fit.</li>
                    <li className="product-bullet-item"><span id="bullet">{'\u2022'}</span>Roomy front pockets hold small tools.</li>
                    <li className="product-bullet-item"><span id="bullet">{'\u2022'}</span>Machine-wash.</li>
                </ul>

                <form className="product-addtocart"> 
                    <p className="product-price">${`${currentProduct.properties.price}`}</p>
                    <input type="number" value={this.props.quantity} onChange={this.props.handleChange} className="product-quantity" placeholder="QTY" />
                </form>

                {/** Requirement: Call Modal on Add To Cart click event **/}
                <button onClick={this.props.handleAddToCart}>
                    <img src="assets/button-add-to-cart.png" alt="Add to Cart Button" id="addToCart" />
                </button>
            </div>
        )
    }
}

export default ProductSummary;