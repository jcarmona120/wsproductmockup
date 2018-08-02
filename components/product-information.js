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
        }
        this.handleShowModal = this.handleShowModal.bind(this)
    }


    handleShowModal() {
        console.log('button clicked')
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
            <section className="product-information">
                <ProductSummary productName={this.props.productName} product={this.props.product} handleAddToCart={this.handleShowModal.bind(this)} />

                {this.state.showModal ? <AddToCartModal activeModal={this.state.showModal} product={this.props.product} continueShopping={this.handleShowModal.bind(this)} /> : null}

                <Accordion product={this.props.product} handlePanelClick={this.handlePanelClick} />

            </section>
        )
    }

}



export default ProductInformation;