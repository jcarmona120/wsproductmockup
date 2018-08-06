import React, { Component } from 'react';
import { render } from 'react-dom';

// Modules

import axios from 'axios';

// Components

import Header from './components/top-level/header'
import Nav from './components/top-level/nav'
import Product from './components/top-level/product'
import Footer from './components/top-level/footer';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            catalog: [],
            currentProduct: '',
            selectedImage: ''
        }

        this.getCatalog = this.getCatalog.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
    }

    getCatalog() {
        axios.get('./catalog.json').then(response => {
            var data = response.data;
            this.setState({
                catalog: data.products,
                currentProduct: data.products[0],
                selectedImage: data.products[0].properties.imageURL.large
            })

        })
    }

    handleImageClick(event) {
        var thumbnail = event.target
        console.log(thumbnail)
        this.setState({
            selectedImage: thumbnail.dataset.largeimage,
            currentProduct: this.state.catalog[thumbnail.dataset.productid]
        })
    }

    componentDidMount() {
        this.getCatalog();
    }

    render() {
        console.log(this.state)
        let productComponent;
        // {show component if catalog data has been passed to state}
        if (this.state.currentProduct !== '' && this.state.selectedImage !== '') {
            productComponent =  <Product 
                                    catalog={this.state.catalog} 
                                    currentProduct={this.state.currentProduct}
                                    selectedImage = {this.state.selectedImage}
                                    handleImageClick = {this.handleImageClick}
                                />
        } else {
            productComponent = <div>Loading</div>
        }

    
        return (
            <div>
                <Header />
                <Nav productName={this.state.currentProduct.name}/>
                {productComponent}
                <Footer />
            </div>
               
            

        )
    }
}

render(<App />, document.getElementById('root'))