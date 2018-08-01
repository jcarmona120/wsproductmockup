import React, { Component } from 'react';
import AddToCartModal from './addToCart-modal';
import AccordionPanel from './product-accordion-panel';
import ProductSummary from './product-information-summary';

class ProductInformation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
        }

        this.accordion = React.createRef();
        this.handlePanelClick = this.handlePanelClick.bind(this)
        this.handleAddToCart = this.handleAddToCart.bind(this)
    }

    handlePanelClick(event) {
        var panel = event.target;
    }   

    handleAddToCart() {
        console.log('button clicked')
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
            <section className="prodcut-information">
                <ProductSummary product={this.props.product} handleAddToCart={this.handleAddToCart.bind(this)}/>

                {this.state.showModal ? <AddToCartModal activeModal={this.state.showModal}/> : null}
                
                <dl id="Accordion product-panels" role="tablist" ref={this.accordion}>
                    <AccordionPanel name="summary" handlePanelClick={this.handlePanelClick} />
                    <AccordionPanel name="Dimensions" handlePanelClick={this.handlePanelClick} />
                    <AccordionPanel name="Shipping" handlePanelClick={this.handlePanelClick} />
                </dl>

            </section>
        )
    }
    
}

   

export default ProductInformation;