import React, { Component } from 'react';

class AddToCartModal extends Component {
    constructor(props) {
        super(props)

        this.continueButton = React.createRef();

    }

    componentDidMount() {
        this.continueButton.current.focus();
    }

    render() {
        return (
            <div role="dialog"
                aria-modal="true">
                <h1 className="addedToBasket">You've just added the following to your basket: </h1>
                <h2 id="dialog1_label" className="dialog_label">
                    {this.props.product.name}
                </h2>

                <div className="basketItem">
                    <img src={`${this.props.product.properties.imageURL.small}.jpg`} 
                         alt={`thumbnail of purchased item: ${this.props.product.name}`} 
                         />
                    <div className="basketItem-info">
                        <p>Item ID: {this.props.product.id}</p>
                        <p>Quantity: {this.props.quantity}</p>
                        <p>Price: {this.props.product.properties.price}</p>
                    </div>
                </div>

                <div className="shoppingButton">
                    <button 
                        ref={this.continueButton} 
                        className="continueShopping" 
                        onClick={this.props.continueShopping}>
                        Continue Shopping
                    </button>
                </div>
            </div>

        )
    }
}

export default AddToCartModal;