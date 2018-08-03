import React, { Component } from 'react';
import AddToCartModal from './addToCart-modal';
import Accordion from './product-accordion';
import AccordionPanel from './product-accordion-panel';
import ProductSummary from './product-information-summary';

class ProductInformation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            value: 1
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleShowModal = this.handleShowModal.bind(this)
    }
    handleShowModal() {
        
        this.setState({
            showModal: !this.state.showModal,
            value: 1
        })
   
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        var {currentProduct} = this.props
        
        return (
            <section className="product-information">
                <ProductSummary 
                    currentProduct={currentProduct}
                    handleAddToCart={this.handleShowModal.bind(this)} 
                    handleChange = {this.handleChange.bind(this)}
                    quantity={this.state.value} />

                {this.state.showModal ? 
                    <AddToCartModal 
                        activeModal={this.state.showModal} 
                        product={currentProduct} 
                        handleChange = {this.handleChange.bind(this)}
                        continueShopping={this.handleShowModal.bind(this)} 
                        quantity={this.state.value}/> 
                    : null}

                <Accordion currentProduct={currentProduct} handlePanelClick={this.handlePanelClick} />

            </section>
        )
    }

}



export default ProductInformation;