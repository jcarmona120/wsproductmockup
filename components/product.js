import React, { Component } from 'react';
import catalog from '../db.js'

import ProductImage from './product-image';
import ProductInformation from './product-information';

class Product extends Component {
    constructor(props) {
        super(props);
        console.log(catalog)
        this.state = {
            catalog,
            product: catalog[0]
        };
      }

    componentDidMount() {
        this.setState({
            product: this.props.product
        })
    }
    
    render() {
        var {catalog} = this.state;
        return (
            <main className="productGrid">
               <ProductImage catalog={catalog} products={this.props.catalog} product={this.props.product}/>
               <ProductInformation products={this.props.catalog} product={this.props.product}/>
            </main>
        );
    }
}

export default Product;