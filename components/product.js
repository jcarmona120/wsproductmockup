import React, { Component } from 'react';
import catalog from '../db.js'

import ProductImage from './product-image';
import ProductInformation from './product-information';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catalog,
            product: catalog[0],
            productName: catalog[0].name
        };
    }

    componentDidMount() {
        this.setState({
            product: this.props.product
        })
    }

    render() {
        var { catalog } = this.state;
        return (
            <main className="productGrid">
                <ProductImage products={catalog} product={this.props.product} />
                <ProductInformation productName={this.state.productName} products={this.props.catalog} product={this.props.product} />
            </main>
        );
    }
}

export default Product;